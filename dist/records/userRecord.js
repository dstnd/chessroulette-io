"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRecord = exports.guestUserRecord = exports.registeredUserRecord = exports.userInfoRecord = void 0;
var io = require("io-ts");
exports.userInfoRecord = io.type({
    id: io.string,
    name: io.string,
    avatarId: io.string,
});
exports.registeredUserRecord = io.intersection([
    exports.userInfoRecord,
    io.type({
        isGuest: io.literal(false),
    }),
]);
exports.guestUserRecord = io.intersection([
    exports.userInfoRecord,
    io.type({
        isGuest: io.literal(true),
    }),
]);
exports.userRecord = io.union([exports.registeredUserRecord, exports.guestUserRecord]);
//# sourceMappingURL=userRecord.js.map