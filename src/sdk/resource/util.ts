import { Resource } from './Resource';
import {
  resourceFailureHandledError,
  badEncodingError,
  ResourceFailureHandledError,
  BadEncodingError,
  BadRequestError,
  badRequestError,
} from './errors';
import { IntFromString } from 'io-ts-types/lib/IntFromString';
import { FormModelCodec, FormModelKeysMap } from '../../sdk/http';
import * as io from 'io-ts';
import { isRight } from 'fp-ts/lib/Either';

export type RequestOf<R extends Resource<any, any, any>> = io.TypeOf<R['requestPayloadCodec']>;
export type OkResponseOf<R extends Resource<any, any, any>> = io.TypeOf<
  R['responseOkPayloadCodec']
>;
export type ErrResponseOf<R extends Resource<any, any, any>> = io.TypeOf<
  R['responseErrPayloadCodec']
>;
export type ResponseOf<R extends Resource<any, any, any>> = OkResponseOf<R> | ErrResponseOf<R>;

export const isPayloadOfCodec = <C extends io.Mixed>(
  c: C,
  payload: unknown
): payload is io.TypeOf<C> => {
  return isRight(c.decode(payload));
};

export const isResourceFailureHandledError = (e: unknown): e is ResourceFailureHandledError =>
  isPayloadOfCodec(resourceFailureHandledError, e);
export const isBadEncodingError = (e: unknown): e is BadEncodingError =>
  isPayloadOfCodec(badEncodingError, e);
export const isBadRequestError = (e: unknown): e is BadRequestError =>
  isPayloadOfCodec(badRequestError, e);

export const emptyRequest = io.union([io.undefined, io.null, io.void, io.type({})]);

export const getValidationErrorCodec = <M extends { [key: string]: io.Mixed }>(model: M) =>
  io.type({
    type: io.literal('ValidationErrors'),
    content: io.type({
      fields: io.record(io.keyof(model), io.union([io.string, io.undefined])),
    }),
  });

// export type ValidationError = io.TypeOf<ReturnType<typeof getValidationErrorCodec>>;
export type ValidationError<M extends FormModelKeysMap> = {
  type: 'ValidationErrors';
  content: {
    fields: Partial<{ [k in keyof M]: string | undefined }>;
  };
};

export const withPaginatorResponse = <TCodec extends io.Mixed>(codec: TCodec) =>
  io.type({
    items: io.array(codec),
    itemsTotal: io.number,
    currentIndex: io.number,
  });

declare type PaginatorWitoutItems = Omit<
  io.TypeOf<ReturnType<typeof withPaginatorResponse>>,
  'items'
>;
export declare type PaginatedResponse<TType> = PaginatorWitoutItems & {
  items: TType[];
};
