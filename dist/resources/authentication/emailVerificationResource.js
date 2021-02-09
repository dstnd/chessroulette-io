"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailVerificationResource = void 0;
var http_1 = require("../../sdk/http");
var Resource_1 = require("../../sdk/resource/Resource");
var io = require("io-ts");
var model = http_1.formModel({
    email: io.string,
});
var request = io.type(model);
var okResponse = io.type({
    response: io.literal('works'),
});
var customErrResponse = io.type({
    type: io.literal('MyCustomError'),
    content: io.type({
        myVal: io.number,
    }),
});
var validationErrResponse = io.type({
    type: io.literal('ValidationErrors'),
    content: io.type({
        invalidFields: io.string,
    }),
});
var errResponse = io.union([
    customErrResponse,
    validationErrResponse,
]);
exports.emailVerificationResource = new Resource_1.Resource(request, okResponse, errResponse);
//# sourceMappingURL=emailVerificationResource.js.map