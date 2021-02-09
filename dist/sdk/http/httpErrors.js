"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpCustomTypeErrorFromProps = exports.httpCustomError = exports.httpGenericError = void 0;
var io = require("io-ts");
exports.httpGenericError = function () { return io.type({
    type: io.literal('HttpGenericError'),
    message: io.union([io.string, io.undefined]),
}); };
exports.httpCustomError = function (content) { return io.type({
    type: io.literal('HttpCustomError'),
    content: content,
}); };
exports.httpCustomTypeErrorFromProps = function (content) { return exports.httpCustomError(io.type(content)); };
//# sourceMappingURL=httpErrors.js.map