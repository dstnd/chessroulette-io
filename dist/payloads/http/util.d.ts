import * as io from 'io-ts';
export declare const httpRequestPayload: <T extends io.Props>(props: T) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    data: io.TypeC<T>;
}>;
export declare type GenericHttpRequestPayloadIOType = ReturnType<typeof httpRequestPayload>;
export declare type GenericHttpRequestPayload = io.TypeOf<GenericHttpRequestPayloadIOType>;
export declare const okHttpResponsePayload: <TData extends io.Mixed>(data: TData) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<true>;
    data: TData;
}>;
export declare type GenericOkHttpResponsePayloadIOType = ReturnType<typeof okHttpResponsePayload>;
export declare type GenericOkHttpResponsePayload = io.TypeOf<GenericOkHttpResponsePayloadIOType>;
export declare const errHttpResponsePayload: <TErr extends io.Mixed>(error: TErr) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<false>;
    error: TErr;
}>;
export declare type GenericErrHttpResponsePayloadIOType = ReturnType<typeof errHttpResponsePayload>;
export declare type GenericErrHttpResponsePayload = io.TypeOf<GenericErrHttpResponsePayloadIOType>;
export declare const httpResponsePayload: <OkType extends io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<true>;
    data: io.Mixed;
}>, ErrType extends io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<false>;
    error: io.Mixed;
}>>(ok: OkType, err: ErrType) => io.UnionC<[OkType, ErrType]>;
export declare type GenericHttpResponsePayloadIOType = ReturnType<typeof httpResponsePayload>;
export declare type GenericHttpResponsePayload = io.TypeOf<GenericHttpResponsePayloadIOType>;
