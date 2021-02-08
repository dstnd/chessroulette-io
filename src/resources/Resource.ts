import * as io from 'io-ts';
import { AsyncResultWrapper } from 'src/AsyncResult/AsyncBox';
import { toResult } from 'src/sdk/io';
import { Err, Ok } from 'ts-results';

// export const httpRequestPayload = <TData extends io.Mixed>(data: TData) => io.type({
//   protocol: io.literal('http'),
//   data,
// });

// export const anyHttpRequestPayload = io.type({
//   protocol: io.literal('http'),
//   data: io.any,
// });

// export type AnyHttpRequestPayloadCodec = typeof anyHttpRequestPayload;
// export type AnyHttpRequestPayload = io.TypeOf<typeof anyHttpRequestPayload>;


type BaseRequestPayloadCodec = io.Mixed;
type BaseResponseOkPayloadCodec = io.Mixed;
// type BaseResponseErrPayloadCodec = io.Mixed;
// type BaseCustomResponseErrorContentCodec = io.Mixed;

// export const errorCodec = io.Mixed & {}

// export type HttpGenericErrorCodec = ReturnType<typeof httpGenericError>;
// export type HttpGenericError = io.TypeOf<HttpGenericErrorCodec>;

// type BaseResponseErrPayloadCodec = io.Mixed & {
//   type: io.StringC;
//   content: io.Mixed;
// }

export type BaseResponseErrPayloadCodec = io.TypeC<{
  type: any;
  content: any;
}>;

export const responseErrorCodec = <
  TErrContent extends io.Mixed,
  TErrorTypeValue extends string,
  // TErrType extends io.LiteralType<TErrorTypeValue>,
  >(
    type: TErrorTypeValue,
    content: TErrContent,
) => io.type({
  type: io.literal(type),
  content: content,
});

export const responseErrorCodec2 = <
  TErrContent extends io.Props,
  TErrorTypeValue extends string,
  // TErrType extends io.LiteralType<TErrorTypeValue>,
  >(
    type: TErrorTypeValue,
    content: TErrContent,
) => io.type({
  type: io.string,
  content: io.type(content),
});

type ResponseErrorCodec = ReturnType<typeof responseErrorCodec>;

// type BaseResponseErrPayloadCodec = ResponseErrorCodec;

// type CommonResponseErrorPayload =
//   | {
//     type: 'BadRequest';
//     content: string;
//   }
//   | {
//     type: 'BadEncoding';
//     content: undefined;
//   }
//   | {
//     type: 'NetworkError';
//     content: undefined;
//   }
//   | {
//     type: 'BadErrorEncoding';
//     content: number;
//   }


// type BaseMethod = 'get' | 'post' | 'put' | 'delete' | 'options';

const responseAsOkResult = <TDataCodec extends io.Mixed>(data: TDataCodec) => io.type({
  ok: io.literal(true),
  data,
});
type ResponseAsOkResultCodec = ReturnType<typeof responseAsOkResult>;
type ResponseAsOkResult = io.TypeOf<ResponseAsOkResultCodec>;

const badRequestError = io.type({
  type: io.literal('BadRequest'),
  content: io.string,
});
type BadRequestErrorCodec = typeof badRequestError;

const badEncodingError = io.type({
  type: io.literal('BadEncoding'),
  content: io.number,
});

const networkError = io.type({
  type: io.literal('NetworkError'),
  content: io.undefined,
});

const badErrorEncoding = io.type({
  type: io.literal('BadErrorEncoding'),
  content: io.type({
    reason: io.string,
  }),
});

// const customError = () => 

const commonErrorsPayload = io.union([
  badRequestError,
  badEncodingError,
  networkError,
  badErrorEncoding,
]);

type CommonResponseErrorPayload = io.TypeOf<typeof commonErrorsPayload>;

// type BaseResponseErrPayloadCodec = typeof commonErrorsPayload;


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
    err: TErrCodec
  ) => io.union([
    ok,
    io.union([
      responseAsErrResult(commonErrorsPayload), 
      err,
    ])
    // Took the custom error for a little
    // io.union([
    //   responseAsErrResult(commonErrors), 
    //   err
    // ]),
  ]);

  const responseAsResult2 = <
  TOkCodec extends ResponseAsOkResultCodec,
  TErrCodec extends ResponseAsErrResultCodec,
  >(
    ok: TOkCodec,
    customErr: TErrCodec
  ) => io.union([
    ok,
    io.union([
      responseAsErrResult(commonErrorsPayload), 
      customErr,
    ]),
  ]);

// type ResponseAsResultCodec = ResponseAsOkResult | ResponseAsErrResult;
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
  // public responseErrPayloadCodec: ResponseErrPayloadCodec;

  constructor(
    public requestPayloadCodec: RequestPayloadCodec,
    public responseOkPayloadCodec: ResponseOkPayloadCodec,
    public responseErrPayloadCodec: ResponseErrPayloadCodec = badRequestError as ResponseErrPayloadCodec,
  ) {
    // this.responseErrPayloadCodec = responseErrPayloadCodec
    //   ? responseErrPayloadCodec
    //   : io.type({}) as unknown as ResponseErrPayloadCodec;
  }

  request(
    requestPayload: RequestPayload,
    senderFn: (requestPayload: RequestPayload) => Promise<{ data: unknown }>,
  ) {
    return new AsyncResultWrapper<
      ResponseOkPayload,
      CommonResponseErrorPayload | ResponseErrPayload
    // | {
    //   type: 'CustomError';
    //   content: ResponseErrPayload,
    // }
    >(async () => {
      // TODO: Should we serialize/encode the data before sending?

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
          // io.union([
          //   io.type({
          //     ok: io.literal(false),
          //     error: this.responseErrPayloadCodec,
          //   }),
          //   io.type({
          //     ok: io.literal(false),
          //     error: this.responseErrPayloadCodec,
          //   }),
          // ])
        );

        const result = toResult(responseAsResultCodec.decode(data));

        if (!result.ok) {
          return new Err({
            type: 'BadEncoding',
            content: 2,
          } as const);
        }

        if (!result.val.ok) {
          const customErrorResult = toResult(this.responseErrPayloadCodec.decode(result.val.error))

          if (!customErrorResult.ok) {            
            return new Err({
              type: 'BadErrorEncoding',
              content: {
                reason: 'asd',
              },
            } as const);
          }


          // TODO: Not supposed to be here
          return new Err({
            type: 'BadErrorEncoding',
            content: {
              reason: 'asda',
            },
          } as const);
          // return new Err(customErrorResult.val);

          // return new Err({
          //   type: 'CustomError',
          //   content: customErrorResult.val,
          // });
        }

        return new Ok(result.val.data);
      } catch (e) {
        return new Err({
          type: 'BadRequest',
          content: '',
        } as const);
      }
    });
  }

  parseRequest(data: unknown) {
    return toResult<RequestPayload, io.Errors>(this.requestPayloadCodec.decode(data));
  }

  respond(data: ResponseOkPayload, senderFn: (responseResult: ResponseAsOkResult) => void) {
    // TODO: Should we serialize/encode the data before sending?
    senderFn({
      ok: true,
      data,
    });
  }

  fail(error: ResponseErrPayload, senderFn: (errPayload: ResponseAsErrResult) => void) {
    // TODO: Should we serialize/encode the data before sending?
    senderFn({
      ok: false,
      error,
    });
  }
}

export type ResourceTypeOfRequestPayload<R extends Resource<any, any, any>> = io.TypeOf<R['requestPayloadCodec']>;
export type ResourceTypeOfOkResponsePayload<R extends Resource<any, any, any>> = io.TypeOf<R['responseOkPayloadCodec']>;
export type ResourceTypeOfErrResponsePayload<R extends Resource<any, any, any>> = io.TypeOf<R['responseErrPayloadCodec']>;

// const x = new Resource(
//   io.type({ question: io.string }), 
//   io.type({ answer: io.string }),
//   io.type({ myError: io.string }),
// );

// x.request({
//   question: 'asd',
// }, () => {
//   return Promise.resolve({ data: 'asd' });
// });

