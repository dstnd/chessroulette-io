"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpResponsePayload = exports.errHttpResponsePayload = exports.okHttpResponsePayload = exports.httpRequestPayload = void 0;
var io = require("io-ts");
exports.httpRequestPayload = function (props) { return io.type({
    protocol: io.literal('http'),
    data: io.type(props),
}); };
exports.okHttpResponsePayload = function (data) { return io.type({
    protocol: io.literal('http'),
    ok: io.literal(true),
    data: data,
}); };
exports.errHttpResponsePayload = function (error) { return io.type({
    protocol: io.literal('http'),
    ok: io.literal(false),
    error: error,
}); };
exports.httpResponsePayload = function (ok, err) { return io.union([ok, err]); };
//# sourceMappingURL=util.js.map