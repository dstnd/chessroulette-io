import * as io from 'io-ts';
import { HttpErrorCodec } from './httpErrors';
export declare const httpRequestPayload: <TData extends io.Mixed>(data: TData) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    data: TData;
}>;
export declare const httpRequestPayloadFromProps: <TProps extends io.Props>(props: TProps) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    data: io.TypeC<TProps>;
}>;
export declare const anyHttpRequestPayload: io.TypeC<{
    protocol: io.LiteralC<"http">;
    data: io.AnyC;
}>;
export declare type AnyHttpRequestPayloadCodec = typeof anyHttpRequestPayload;
export declare type AnyHttpRequestPayload = io.TypeOf<typeof anyHttpRequestPayload>;
export declare const okHttpResponsePayload: <TData extends io.Mixed>(data: TData) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<true>;
    data: TData;
}>;
export declare const okHttpResponsePayloadFromProps: <TProps extends io.Props>(props: TProps) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<true>;
    data: io.TypeC<TProps>;
}>;
export declare type GenericOkHttpResponsePayloadCodec = ReturnType<typeof okHttpResponsePayload>;
export declare type GenericOkHttpResponsePayload = io.TypeOf<GenericOkHttpResponsePayloadCodec>;
export declare type AnyOkHttpResponsePayloadCodec = io.TypeC<{
    protocol: io.LiteralType<'http'>;
    ok: io.LiteralType<true>;
    data: any;
}>;
export declare const errHttpResponsePayload: <TErr extends io.Mixed>(error: TErr) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<false>;
    error: TErr;
}>;
export declare type GenericErrHttpResponsePayloadCodec = ReturnType<typeof errHttpResponsePayload>;
export declare type GenericErrHttpResponsePayload = io.TypeOf<GenericErrHttpResponsePayloadCodec>;
export declare const errHttpResponsePayloadOfType: <TErr extends HttpErrorCodec>(error: TErr) => io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<false>;
    error: TErr;
}>;
export declare type ErrHttpResponsePayloadOfType<TErr extends HttpErrorCodec> = GenericErrHttpResponsePayload & {
    error: io.TypeOf<TErr>;
};
export declare type AnyErrHttpResponsePayloadCodec = io.TypeC<{
    protocol: io.LiteralType<'http'>;
    ok: io.LiteralType<false>;
    error: any;
}>;
export declare const httpResponsePayload: <TOkCodec extends io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<true>;
    data: io.Mixed;
}>, TErrCodec extends io.TypeC<{
    protocol: io.LiteralC<"http">;
    ok: io.LiteralC<false>;
    error: io.Mixed;
}>>(ok: TOkCodec, err: TErrCodec) => io.UnionC<[TOkCodec, TErrCodec]>;
export declare type GenericHttpResponsePayloadCodec = ReturnType<typeof httpResponsePayload>;
export declare type GenericHttpResponsePayload = io.TypeOf<GenericHttpResponsePayloadCodec>;
export declare const anyHttpResponsePayload: <TOkCodec extends AnyOkHttpResponsePayloadCodec, TErrCodec extends AnyErrHttpResponsePayloadCodec>(ok: TOkCodec, err: TErrCodec) => io.UnionC<[TOkCodec, TErrCodec]>;
export declare type AnyHttpResponsePayloadCodec = ReturnType<typeof anyHttpResponsePayload>;
export declare type AnyHttpResponsePayload = io.TypeOf<AnyHttpResponsePayloadCodec>;
