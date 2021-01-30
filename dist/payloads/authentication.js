"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestAuthenticationResponsePayload = exports.guestAuthenticationRequestPayload = exports.createUserAccountResponsePayload = exports.createUserAccountRequestPayload = exports.verifyEmailResponsePayload = exports.verifyEmailRequestPayload = exports.userCheckResponsePayload = exports.userCheckPositiveResponsePayload = exports.userCheckNegativeResponsePayload = exports.userCheckRequestPayload = exports.userCheckExternalAccountRequestPayload = exports.userCheckInternalAccountRequestPayload = exports.externalVendor = void 0;
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
exports.userCheckNegativeResponsePayload = io.type({
    isUser: io.literal(false),
});
exports.userCheckPositiveResponsePayload = io.type({
    isUser: io.literal(true),
    // user: userRecord, // TODO: See if this is needed in this call - it's for ease of access at this point
    accessToken: io.string,
});
exports.userCheckResponsePayload = io.union([
    exports.userCheckNegativeResponsePayload,
    exports.userCheckPositiveResponsePayload,
]);
// Email Verification
exports.verifyEmailRequestPayload = io.type({
    email: io.string,
});
exports.verifyEmailResponsePayload = io.null;
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
// // Step 1.5 - Verify Email before trying to authenticate
// export const verifyEmailRequestPayload = io.type({
//   email: io.string,
//   code: io.string,
// });
// export type VerifyEmailRequestPayload = io.TypeOf<typeof verifyEmailRequestPayload>;
// export const verifyEmailResponsePayload = io.union([
//   userCheckNegativeResponsePayload,
// ])
// export const 
// Older
// export const authenticationViaExternalAccountRequestPayload = io.type({
//   externalVendor: externalVendor,
//   externalUserId: io.string,
// });
// export type AuthenticationViaExternalAccountRequestPayload = io.TypeOf<
//   typeof authenticationViaExternalAccountRequestPayload
// >;
// export const authenticationViaInternalAccountRequestPayload = io.type({
//   email: io.string,
//   code: io.string,
// });
// export type AuthenticationViaExistentUserRequestPayload = io.TypeOf<
//   typeof authenticationViaExistentUserRequestPayload
// >;
// export const authenticationRequestPayload = io.union([
//   authenticationViaExternalAccountRequestPayload,
//   authenticationViaExistentUserRequestPayload,
// ]);
// export type AuthenticationRequestPayload = io.TypeOf<typeof authenticationRequestPayload>;
// export const authenticationResponsePayload = io.type({
//   user: userRecord,
//   /// TODO: Commenting this for now but it's supposed to be used later
//   //  in all subsequent request headers
//   // authToken: io.string,
// });
// export type AuthenticationResponsePayload = io.TypeOf<typeof authenticationResponsePayload>;
exports.guestAuthenticationRequestPayload = io.type({
    guestUser: io.union([userRecord_1.guestUserRecord, io.undefined]),
});
exports.guestAuthenticationResponsePayload = io.type({
    guest: userRecord_1.guestUserRecord,
});
//# sourceMappingURL=authentication.js.map