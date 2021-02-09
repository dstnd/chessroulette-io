"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailVerificationResource = void 0;
var http_1 = require("src/sdk/http");
var Resource_1 = require("../Resource");
var io = require("io-ts");
var model = http_1.formModel({
    email: io.string,
});
var request = io.type(model);
var responseOk = io.type({
    response: io.literal('works'),
});
var responseErr = io.type({
    type: io.literal('MyCustomError'),
    content: io.type({
        myVal: io.number,
    }),
});
exports.emailVerificationResource = new Resource_1.Resource(request, responseOk, responseErr);
//# sourceMappingURL=VerifyEmailResource.js.map