"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationError = exports.httpInputValidationError = exports.formModel = void 0;
var io = require("io-ts");
// Add More Possible Input Types here as needed
exports.formModel = function (m) { return m; };
var getInvalidInputTypeFromModel = function (model) {
    return io.record(io.keyof(model), io.union([io.string, io.undefined]));
};
exports.httpInputValidationError = function (model) { return io.type({
    type: io.literal('HttpInputValidationError'),
    invalidInput: getInvalidInputTypeFromModel(model),
}); };
exports.inputValidationError = function (model) { return io.type({
    type: io.literal('InputValidationError'),
    content: io.type({
        fields: getInvalidInputTypeFromModel(model),
    }),
}); };
//# sourceMappingURL=form.js.map