"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistration = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var http_1 = require("../../sdk/http");
var UserRegistration;
(function (UserRegistration) {
    var model = http_1.formModel({
        firstName: io.string,
        lastName: io.string,
        // This is a JWT Token passed by the server
        //  with all the needed information in it like:
        //  - email
        //  - external vendor info
        verificationToken: io.string,
        username: io.string,
        countryCode: io.string,
    });
    var request = io.type(model);
    var okResponse = io.type({
        // TODO: See if this is needed in this call - it's for ease of access at this point
        // uzser: userRecord.
        accessToken: io.string,
    });
    var validationErrResponse = resource_1.getValidationErrorCodec(model);
    var errResponseDuplicateUser = io.type({
        type: io.literal('DuplicateUser'),
        content: io.undefined,
    });
    var errResponse = io.union([
        http_1.inputValidationError(model),
        validationErrResponse,
        errResponseDuplicateUser,
    ]);
    UserRegistration.resource = new resource_1.Resource(request, okResponse, errResponse);
})(UserRegistration = exports.UserRegistration || (exports.UserRegistration = {}));
//# sourceMappingURL=userRegistration.js.map