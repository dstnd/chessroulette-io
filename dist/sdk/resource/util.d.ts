import { Resource } from './Resource';
import * as io from 'io-ts';
export declare type RequestOf<R extends Resource<any, any, any>> = io.TypeOf<R['requestPayloadCodec']>;
export declare type OkResponseOf<R extends Resource<any, any, any>> = io.TypeOf<R['responseOkPayloadCodec']>;
export declare type ErrResponseOf<R extends Resource<any, any, any>> = io.TypeOf<R['responseErrPayloadCodec']>;
export declare type ResponseOf<R extends Resource<any, any, any>> = OkResponseOf<R> | ErrResponseOf<R>;
export declare const isPayloadOfCodec: <C extends io.Mixed>(c: C, payload: unknown) => payload is io.TypeOf<C>;
export declare const isResourceFailureHandledError: (e: unknown) => e is {
    type: "ResourceFailureHandled";
    content: undefined;
};
export declare const isBadEncodingError: (e: unknown) => e is {
    type: "BadEncodingError";
    content: undefined;
};
export declare const isBadRequestError: (e: unknown) => e is {
    type: "BadRequestError";
    content: undefined;
};
export declare const emptyRequest: io.UnionC<[io.UndefinedC, io.NullC, io.VoidC, io.TypeC<{}>]>;
