"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGenericError = void 0;
var io = require("io-ts");
exports.httpGenericError = function () { return io.type({
    type: io.literal('HttpGenericError'),
    message: io.string,
}); };
//# sourceMappingURL=httpErrors.js.map