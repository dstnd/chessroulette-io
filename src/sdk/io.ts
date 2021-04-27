import * as PayloadCodecs from '../payloads';
import { isLeft, Left, Right, Either } from 'fp-ts/lib/Either';
import { Err, Ok, Result } from 'ts-results';
import * as ioTs from 'io-ts';
import {
  ErrHttpResponsePayloadOfType,
  HttpGenericErrorCodec,
  GenericOkHttpResponsePayload,
} from './http';


const deserialize = <
  K extends keyof typeof PayloadCodecs,
  TCodec extends typeof PayloadCodecs[K],
  TRecord extends ioTs.TypeOf<TCodec>,
  >(
    codec: TCodec,
    serialized: string,
): Result<TRecord, IODeserializationError> => {
  const decoded = codec.decode(serialized) as Left<ioTs.Errors> | Right<TRecord>;

  if (isLeft(decoded)) {
    return new Err({
      type: 'BadEncoding',
      reasons: decoded.left,
    });
  }

  return new Ok(decoded.right);
}

const serialize = <
  K extends keyof typeof PayloadCodecs,
  TCodec extends typeof PayloadCodecs[K],
  TRecord extends ioTs.TypeOf<TCodec>,
  >(
    _: TCodec, // used only to map the record type to it for now
    record: TRecord
  ) => record;

export const toResult = <T, E>(either: Either<E, T>): Result<T, E> => {
  if (isLeft(either)) {
    return new Err(either.left);
  }

  return new Ok(either.right);
};

export type IODeserializationError = {
  type: 'BadEncoding',
  reasons: ioTs.ValidationError[],
};

export const isIODeserializationError = (e: unknown): e is IODeserializationError => {
  return e && typeof e === 'object' && ('type' in e && typeof e === 'string' && (e as any).type === 'BadEncoding');
}


// export const deserializeHttpResponsePayload = <
//   TCodec extends AnyHttpResponsePayloadCodec,
//   TRecord extends ioTs.TypeOf<TCodec>,
// >(codec: TCodec, serialized: string): Result<TRecord, {
//   type: string,
//   reasons: any,
// }> => {
//   const decoded = codec.decode(serialized) as Left<ioTs.Errors> | Right<TRecord>;

//   if (isLeft(decoded)) {
//     return new Err({
//       type: 'BadEncoding',
//       reasons: decoded.left,
//     });
//   }

//   if (decoded.right.ok === false) {
//     return new Err({
//       type: 'HttpErrorResponse',
//       reasons: ['asd'],
//     });
//     // decoded.right
//     // return new Err(decoded.right);
//   }

//   return new Ok(decoded.right);
// }

// const r = deserializeHttpResponsePayload(verifyEmailResponsePayload, 'asda').map((s) => {
//   if (!s.ok) {
//     s.error.type === 'HttpGenericError'
//   }
// })


// if (r.ok) {
//   r.val.
// }

// deserialize(verifyEmailResponsePayload, 'asd').map((s) => {
//   if (s.ok) {
//     s.data.works
//   }
// })

// type OnlyHttpPayload = <
//   K extends keyof typeof PayloadCodecs,
//   TCodec extends typeof PayloadCodecs[K],
// >

// const toHttpRequestPayload = <
//   // P extends GenericHttpRequestPayload
//   // TCodec extends AnyHttpRequestPayloadCodec,
//   K extends keyof typeof PayloadCodecs,
//   TCodec extends typeof PayloadCodecs[K],
//   TRecord extends ioTs.TypeOf<TCodec>,
// >(_: TCodec, data: TRecord['data']) => {
//   return {
//     protocol: 'http',
//     data,
//   } as TRecord;
// }

// const x = toHttpRequestPayload(userCheckInternalAccountRequestPayload, { asd: 'asd'});

export const toGenericHttpErrorResponsePayload = (message?: string): ErrHttpResponsePayloadOfType<HttpGenericErrorCodec> => ({
  protocol: 'http',
  ok: false,
  error: {
    type: 'HttpGenericError',
    message,
  },
} as const);


type OKResponseDataType = object | undefined | string | number;

export type OkHttpResponsePayloadWithData<
  TData extends OKResponseDataType
  > = Omit<GenericOkHttpResponsePayload, 'data'> & {
    data: TData;
  };

export const toOkHttpResponsePayloadWithData = <TData extends OKResponseDataType>(
  data: TData,
): OkHttpResponsePayloadWithData<TData> => ({
  protocol: 'http',
  ok: true,
  data,
});

export const io = {
  serialize,
  deserialize,
  toResult,
  isIODeserializationError,
  toGenericHttpErrorResponsePayload,
  toOkHttpResponsePayloadWithData,
};