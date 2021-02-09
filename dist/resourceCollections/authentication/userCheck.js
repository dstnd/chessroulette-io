"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCheck = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var payloads_1 = require("../../payloads");
var externalVendorsRecords_1 = require("../../records/externalVendorsRecords");
var UserCheck;
(function (UserCheck) {
    var internalAccountRequest = io.type({
        type: io.literal('internal'),
        email: io.string,
        verificationCode: io.string,
    });
    var externalAccountRequest = io.type({
        type: io.literal('external'),
        vendor: payloads_1.externalVendor,
        accessToken: io.string,
    });
    var request = io.union([
        internalAccountRequest,
        externalAccountRequest,
    ]);
    var okResponseInexistentUser = io.type({
        status: io.literal('InexistentUser'),
        external: io.union([
            io.undefined,
            io.type({
                vendor: payloads_1.externalVendor,
                user: externalVendorsRecords_1.externalUserRecord,
            }),
        ]),
    });
    var okResponseExistentUser = io.type({
        status: io.literal('ExistentUser'),
        accessToken: io.string,
    });
    var okResponse = io.union([
        okResponseInexistentUser,
        okResponseExistentUser,
    ]);
    var errResponseVerificationFailed = io.type({
        type: io.literal('VerificationFailed'),
        content: io.undefined,
    });
    UserCheck.resource = new resource_1.Resource(request, okResponse, errResponseVerificationFailed);
})(UserCheck = exports.UserCheck || (exports.UserCheck = {}));
//# sourceMappingURL=userCheck.js.map