"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRecord = exports.guestUserRecord = exports.registeredUserRecord = exports.userExternalAccountOpts = exports.userInfoRecord = void 0;
var io = require("io-ts");
var lichessRecords_1 = require("./lichessRecords");
exports.userInfoRecord = io.type({
    id: io.string,
    name: io.string,
    avatarId: io.string,
});
exports.userExternalAccountOpts = io.type({
    externalAccountType: io.literal('lichess'),
    externalAccountId: io.string,
    externalAccountInfo: lichessRecords_1.lichessUserRecord,
});
exports.registeredUserRecord = io.intersection([
    exports.userInfoRecord,
    io.type({
        isGuest: io.literal(false),
        email: io.string,
    }),
    exports.userExternalAccountOpts,
]);
exports.guestUserRecord = io.intersection([
    exports.userInfoRecord,
    io.type({
        isGuest: io.literal(true),
        // ServerId - This is needed to be able to maintain stale/fresh guests
        //  when the server flushes the DB
        sid: io.string,
    }),
]);
exports.userRecord = io.union([exports.registeredUserRecord, exports.guestUserRecord]);
//# sourceMappingURL=userRecord.js.map