"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestAuthenticationResponsePayload = exports.authenticationResponsePayload = exports.authenticationRequestPayload = exports.authenticationViaExistentUserRequestPayload = exports.authenticationViaExternalAccountRequestPayload = exports.getLichessUserResponsePayload = exports.getLichessUserRequestPayload = exports.authenticationRedirectUrlResponsePayload = void 0;
var io = require("io-ts");
var lichessRecords_1 = require("../records/lichessRecords");
var userRecord_1 = require("../records/userRecord");
exports.authenticationRedirectUrlResponsePayload = io.type({
    redirectUrl: io.string,
});
exports.getLichessUserRequestPayload = io.type({
    token: io.string,
});
exports.getLichessUserResponsePayload = io.type({
    user: lichessRecords_1.lichessUserRecord,
});
exports.authenticationViaExternalAccountRequestPayload = io.type({
    externalAccountType: io.keyof({ lichess: null }),
    externalAccountToken: io.string,
});
exports.authenticationViaExistentUserRequestPayload = io.type({
    userId: io.string,
});
exports.authenticationRequestPayload = io.union([
    exports.authenticationViaExternalAccountRequestPayload,
    exports.authenticationViaExistentUserRequestPayload,
]);
exports.authenticationResponsePayload = io.type({
    user: userRecord_1.userRecord,
});
exports.guestAuthenticationResponsePayload = io.type({
    guest: userRecord_1.guestUserRecord,
});
// export const guestAuthenticationResponsePayload
//# sourceMappingURL=authentication.js.map