"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPaginatorResponse = exports.getValidationErrorCodec = exports.emptyRequest = exports.isBadRequestError = exports.isBadEncodingError = exports.isResourceFailureHandledError = exports.isPayloadOfCodec = void 0;
var errors_1 = require("./errors");
var io = require("io-ts");
var Either_1 = require("fp-ts/lib/Either");
var Record_1 = require("fp-ts/lib/Record");
exports.isPayloadOfCodec = function (c, payload) {
    return Either_1.isRight(c.decode(payload));
};
exports.isResourceFailureHandledError = function (e) {
    return exports.isPayloadOfCodec(errors_1.resourceFailureHandledError, e);
};
exports.isBadEncodingError = function (e) {
    return exports.isPayloadOfCodec(errors_1.badEncodingError, e);
};
exports.isBadRequestError = function (e) {
    return exports.isPayloadOfCodec(errors_1.badRequestError, e);
};
exports.emptyRequest = io.union([io.undefined, io.null, io.void, io.type({})]);
var record = function (k, type) { return Record_1.map(function () { return type; })(k.keys); };
exports.getValidationErrorCodec = function (model) {
    return io.type({
        type: io.literal('ValidationErrors'),
        content: io.type({
            fields: io.partial(record(io.keyof(model), io.union([io.string, io.undefined]))),
        }),
    });
};
exports.withPaginatorResponse = function (codec) {
    return io.type({
        items: io.array(codec),
        itemsTotal: io.number,
        currentIndex: io.number,
    });
};
//# sourceMappingURL=util.js.map