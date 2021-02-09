"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerification = void 0;
var http_1 = require("../../sdk/http");
var resource_1 = require("../../sdk/resource");
var io = require("io-ts");
var EmailVerification;
(function (EmailVerification) {
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
    EmailVerification.resource = new resource_1.Resource(request, okResponse, errResponse);
})(EmailVerification = exports.EmailVerification || (exports.EmailVerification = {}));
//# sourceMappingURL=emailVerificationResource.js.map