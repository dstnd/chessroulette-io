"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyHttpResponsePayload = exports.httpResponsePayload = exports.errHttpResponsePayloadOfType = exports.errHttpResponsePayload = exports.okHttpResponsePayloadFromProps = exports.okHttpResponsePayload = exports.anyHttpRequestPayload = exports.httpRequestPayloadFromProps = exports.httpRequestPayload = void 0;
var io = require("io-ts");
exports.httpRequestPayload = function (data) { return io.type({
    protocol: io.literal('http'),
    data: data,
}); };
exports.httpRequestPayloadFromProps = function (props) { return exports.httpRequestPayload(io.type(props)); };
exports.anyHttpRequestPayload = io.type({
    protocol: io.literal('http'),
    data: io.any,
});
// export type GenericHttpRequestPayloadCodec = ReturnType<typeof httpRequestPayload>;
// export type GenericHttpRequestPayload = io.TypeOf<GenericHttpRequestPayloadCodec>;
exports.okHttpResponsePayload = function (data) { return io.type({
    protocol: io.literal('http'),
    ok: io.literal(true),
    data: data,
}); };
exports.okHttpResponsePayloadFromProps = function (props) { return exports.okHttpResponsePayload(io.type(props)); };
// export type AnyOkHttpResponsePayload = io.TypeOf<AnyOkHttpResponsePayloadCodec>;
exports.errHttpResponsePayload = function (error) { return io.type({
    protocol: io.literal('http'),
    ok: io.literal(false),
    error: error,
}); };
exports.errHttpResponsePayloadOfType = function (error) {
    return exports.errHttpResponsePayload(error);
};
// export type AnyErrHttpResponsePayloadCodec = typeof anyErrHttpResponsePayload;
// export type AnyErrHttpResponsePayload = io.TypeOf<AnyErrHttpResponsePayloadCodec>;
exports.httpResponsePayload = function (ok, err) { return io.union([ok, err]); };
exports.anyHttpResponsePayload = function (ok, err) { return io.union([ok, err]); };
//# sourceMappingURL=util.js.map