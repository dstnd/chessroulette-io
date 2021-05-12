"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRecord = exports.guestUserRecord = exports.registeredUserRecord = exports.userExternalAccountByVendorMap = exports.userExternalAccountRecord = exports.userInfoRecord = exports.registeredUserInfoRecord = exports.guestUserInfoRecord = void 0;
var io = require("io-ts");
var locationRecords_1 = require("./locationRecords");
// import { lichessUserRecord } from "./lichessRecords";
var basicUserInfoRecord = io.type({
    id: io.string,
    firstName: io.string,
    lastName: io.string,
    avatarId: io.string,
    // Add any other pertinent details here if needed!
    // @deprecate in favor of the more explicit first/last name
    name: io.string,
});
exports.guestUserInfoRecord = io.intersection([
    basicUserInfoRecord,
    io.type({
        isGuest: io.literal(true),
    }),
]);
exports.registeredUserInfoRecord = io.intersection([
    basicUserInfoRecord,
    io.type({
        isGuest: io.literal(false),
        profilePicUrl: io.union([io.string, io.undefined]),
        username: io.string,
        country: io.union([locationRecords_1.country, io.undefined]),
    }),
]);
exports.userInfoRecord = io.union([exports.guestUserInfoRecord, exports.registeredUserInfoRecord]);
// export const userExternalAccountOpts = io.type({
//   externalAccountType: io.literal('lichess'),
//   externalAccountId: io.string,
//   externalAccountInfo: lichessUserRecord,
// });
// export type UserExternalAccountOpts = io.TypeOf<typeof userExternalAccountOpts>;
exports.userExternalAccountRecord = io.type({
    userId: io.union([io.undefined, io.string]),
});
exports.userExternalAccountByVendorMap = io.type({
    facebook: io.union([io.undefined, exports.userExternalAccountRecord]),
    lichess: io.union([io.undefined, exports.userExternalAccountRecord]),
});
exports.registeredUserRecord = io.intersection([
    // basicUserInfoRecord,
    exports.registeredUserInfoRecord,
    io.type({
        // isGuest: io.literal(false),
        email: io.string,
        // profilePicUrl: io.union([io.string, io.undefined]),
        externalAccounts: io.union([io.undefined, exports.userExternalAccountByVendorMap]),
    }),
]);
exports.guestUserRecord = io.intersection([
    // basicUserInfoRecord,
    exports.guestUserInfoRecord,
    io.type({
        // isGuest: io.literal(true),
        // ServerId - This is needed to be able to maintain stale/fresh guests
        //  when the server flushes the DB
        sid: io.string,
    }),
]);
exports.userRecord = io.union([exports.registeredUserRecord, exports.guestUserRecord]);
//# sourceMappingURL=userRecord.js.map