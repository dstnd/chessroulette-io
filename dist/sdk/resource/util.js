"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyRequest = exports.isBadRequestError = exports.isBadEncodingError = exports.isResourceFailureHandledError = exports.isPayloadOfCodec = void 0;
var errors_1 = require("./errors");
var io = require("io-ts");
var Either_1 = require("fp-ts/lib/Either");
exports.isPayloadOfCodec = function (c, payload) {
    return Either_1.isRight(c.decode(payload));
};
exports.isResourceFailureHandledError = function (e) {
    return exports.isPayloadOfCodec(errors_1.resourceFailureHandledError, e);
};
exports.isBadEncodingError = function (e) { return exports.isPayloadOfCodec(errors_1.badEncodingError, e); };
exports.isBadRequestError = function (e) { return exports.isPayloadOfCodec(errors_1.badRequestError, e); };
exports.emptyRequest = io.union([io.undefined, io.null, io.void, io.type({})]);
//# sourceMappingURL=util.js.map