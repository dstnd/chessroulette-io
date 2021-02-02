"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestAuthenticationResponsePayload = exports.guestAuthenticationRequestPayload = exports.createUserAccountResponsePayload = exports.createUserAccountRequestPayload = exports.verifyEmailResponsePayload = exports.verifyEmailRequestPayload = exports.userCheckResponsePayload = exports.userCheckExistentUserResponsePayload = exports.userCheckInexitentUserResponsePayload = exports.userCheckVerificationFailedResponsePayload = exports.userCheckRequestPayload = exports.userCheckExternalAccountRequestPayload = exports.userCheckInternalAccountRequestPayload = exports.externalVendor = void 0;
var io = require("io-ts");
var userRecord_1 = require("../records/userRecord");
// Check if User exists/ Attempts to Authenticate automatically if exists
exports.externalVendor = io.keyof({
    facebook: null,
    lichess: null,
});
exports.userCheckInternalAccountRequestPayload = io.type({
    type: io.literal('internal'),
    email: io.string,
    verificationCode: io.string,
});
exports.userCheckExternalAccountRequestPayload = io.type({
    type: io.literal('external'),
    externalVendor: exports.externalVendor,
    externalUserId: io.string,
});
exports.userCheckRequestPayload = io.union([
    exports.userCheckInternalAccountRequestPayload,
    exports.userCheckExternalAccountRequestPayload,
]);
exports.userCheckVerificationFailedResponsePayload = io.type({
    status: io.literal('BadVerficationCode'),
});
exports.userCheckInexitentUserResponsePayload = io.type({
    status: io.literal('InexistentUser'),
});
exports.userCheckExistentUserResponsePayload = io.type({
    status: io.literal('ExistentUser'),
    accessToken: io.string,
});
exports.userCheckResponsePayload = io.union([
    exports.userCheckVerificationFailedResponsePayload,
    exports.userCheckInexitentUserResponsePayload,
    exports.userCheckExistentUserResponsePayload,
]);
// Email Verification
exports.verifyEmailRequestPayload = io.type({
    email: io.string,
});
exports.verifyEmailResponsePayload = io.undefined;
// Registration - In case the User Check came negative
exports.createUserAccountRequestPayload = io.type({
    email: io.string,
    firstName: io.string,
    lastName: io.string,
    external: io.array(io.type({
        externalVendor: exports.externalVendor,
        externalUserId: io.string,
    })),
});
exports.createUserAccountResponsePayload = io.type({
    // user: userRecord, // TODO: See if this is needed in this call - it's for ease of access at this point
    accessToken: io.string,
});
exports.guestAuthenticationRequestPayload = io.type({
    guestUser: io.union([userRecord_1.guestUserRecord, io.undefined]),
});
exports.guestAuthenticationResponsePayload = io.type({
    guest: userRecord_1.guestUserRecord,
});
//# sourceMappingURL=authentication.js.map