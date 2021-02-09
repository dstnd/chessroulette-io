"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonResponseErrors = exports.resourceFailureHandledError = exports.badErrorEncodingError = exports.networkError = exports.badEncodingError = exports.serverError = exports.badResponseError = exports.badRequestError = void 0;
var io = require("io-ts");
exports.badRequestError = io.type({
    type: io.literal('BadRequestError'),
    content: io.undefined,
});
exports.badResponseError = io.type({
    type: io.literal('BadResponseError'),
    content: io.undefined,
});
exports.serverError = io.type({
    type: io.literal('ServerError'),
    content: io.undefined,
});
exports.badEncodingError = io.type({
    type: io.literal('BadEncodingError'),
    content: io.undefined,
});
exports.networkError = io.type({
    type: io.literal('NetworkError'),
    content: io.undefined,
});
exports.badErrorEncodingError = io.type({
    type: io.literal('BadErrorEncodingError'),
    content: io.undefined,
});
exports.resourceFailureHandledError = io.type({
    type: io.literal('ResourceFailureHandled'),
    content: io.undefined,
});
exports.commonResponseErrors = io.union([
    exports.badRequestError,
    exports.badEncodingError,
    exports.badResponseError,
    exports.networkError,
    exports.badErrorEncodingError,
    exports.serverError,
]);
//# sourceMappingURL=errors.js.map