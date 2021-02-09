import * as io from 'io-ts';
import { AsyncErr, AsyncResultWrapper } from '../../AsyncResult/AsyncBox';
import { toResult } from '../io';
import { Err, Ok } from 'ts-results';
import {
  badRequestError,
  commonResponseErrors,
  CommonResponseErrors,
  BadRequestErrorCodec,
  ResourceFailureHandledError,
  BadRequestError,
} from './errors';
import { isBadEncodingError, isBadRequestError, isPayloadOfCodec, isResourceFailureHandledError } from './util';


type BaseRequestPayloadCodec = io.Mixed;
type BaseResponseOkPayloadCodec = io.Mixed;

type SingleBaseResponseErrPayloadCodec = io.TypeC<{
  type: any;
  content: any;
}>;

type BaseResponseErrPayloadCodec = SingleBaseResponseErrPayloadCodec | io.UnionC<[
  SingleBaseResponseErrPayloadCodec,
  SingleBaseResponseErrPayloadCodec,
  ...Array<SingleBaseResponseErrPayloadCodec>
]>;

const responseAsOkResult = <TDataCodec extends io.Mixed>(data: TDataCodec) => io.type({
  ok: io.literal(true),
  data,
});
type ResponseAsOkResultCodec = ReturnType<typeof responseAsOkResult>;
type ResponseAsOkResult = io.TypeOf<ResponseAsOkResultCodec>;

const responseAsErrResult = <TErrCodec extends io.Mixed>(error: TErrCodec) => io.type({
  ok: io.literal(false),
  error,
});
type ResponseAsErrResultCodec = ReturnType<typeof responseAsErrResult>;
type ResponseAsErrResult = io.TypeOf<ResponseAsErrResultCodec>;

const responseAsResult = <
  TOkCodec extends ResponseAsOkResultCodec,
  TErrCodec extends ResponseAsErrResultCodec,
  >(
    ok: TOkCodec,
    customErr: TErrCodec
  ) => io.union([
    ok,
    io.union([
      responseAsErrResult(commonResponseErrors),
      customErr,
    ]),
  ]);

type ResponseAsResultCodec = ReturnType<typeof responseAsResult>;
type ResponseAsResult = io.TypeOf<ResponseAsResultCodec>;

export class Resource<
  RequestPayloadCodec extends BaseRequestPayloadCodec,
  ResponseOkPayloadCodec extends BaseResponseOkPayloadCodec,
  ResponseErrPayloadCodec extends BaseResponseErrPayloadCodec = BadRequestErrorCodec,
  RequestPayload = io.TypeOf<RequestPayloadCodec>,
  ResponseOkPayload = io.TypeOf<ResponseOkPayloadCodec>,
  ResponseErrPayload = io.TypeOf<ResponseErrPayloadCodec>,
  > {  
  constructor(
    public requestPayloadCodec: RequestPayloadCodec,
    public responseOkPayloadCodec: ResponseOkPayloadCodec,
    public responseErrPayloadCodec: ResponseErrPayloadCodec = badRequestError as ResponseErrPayloadCodec,
  ) { }

  request(
    requestPayload: RequestPayload,
    senderFn: (requestPayload: RequestPayload) => Promise<{ data: unknown }>,
  ) {
    return new AsyncResultWrapper<
      ResponseOkPayload,
      CommonResponseErrors | ResponseErrPayload
    >(async () => {
      try {
        const { data } = await senderFn(requestPayload);

        const responseAsResultCodec = responseAsResult(
          io.type({
            ok: io.literal(true),
            data: this.responseOkPayloadCodec,
          }),
          io.type({
            ok: io.literal(false),
            error: this.responseErrPayloadCodec,
          }),
        );

        const result = toResult(responseAsResultCodec.decode(data));

        if (!result.ok) {
          return new Err({
            type: 'BadEncodingError',
            content: undefined,
          } as const);
        }

        if (!result.val.ok) {
          const customErrorResult = toResult(this.responseErrPayloadCodec.decode(result.val.error))

          if (!customErrorResult.ok) {
            return new Err({
              type: 'BadErrorEncodingError',
              content: undefined,
            } as const);
          }

          return new Err(customErrorResult.val);
        }

        return new Ok(result.val.data);
      } catch (e) {
        return new Err({
          type: 'BadRequestError',
          content: undefined,
        } as const);
      }
    });
  }

  parseRequest(data: unknown) {
    console.log('parse request data:', data);
    console.log('parse request r codec:', this.requestPayloadCodec);

    return new AsyncResultWrapper<RequestPayload, BadRequestError>(
      toResult<RequestPayload, io.Errors>(this.requestPayloadCodec.decode(data))
        .mapErr((e) => ({
          type: 'BadRequestError',
          content: e as unknown as undefined,
        })),
    );
  }

  respond(data: ResponseOkPayload, senderFn: (responseResult: ResponseAsOkResult) => void) {
    // TODO: Should we serialize/encode the data before sending?
    senderFn({
      ok: true,
      data,
    });
  }

  fail(
    error: ResponseErrPayload | CommonResponseErrors,
    senderFn: (errPayload: ResponseAsErrResult) => void,
  ): AsyncErr<ResourceFailureHandledError | ResponseErrPayload | CommonResponseErrors> {
    try {
      // TODO: Should we serialize/encode the data before sending?
      senderFn({
        ok: false,
        error,
      });

      return new AsyncErr({
        type: 'ResourceFailureHandled',
        content: undefined,
      });
    } catch (e) {
      return new AsyncErr(error);
    }
  }

  // TODO: This for now doesn't return the correct one when no errResponse given!
  isResponseError = (e: unknown) => isPayloadOfCodec(this.responseErrPayloadCodec, e);

  isBadEncodingError = isBadEncodingError;
  isResourceFailureHandledError = isResourceFailureHandledError;
  isBadRequestError = isBadRequestError;
}
