"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatHistoryRecord = exports.chatMessageRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var userRecord_1 = require("./userRecord");
exports.chatMessageRecord = io.type({
    content: io.string,
    fromUserId: io.string,
    sentAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chatHistoryRecord = io.type({
    id: io.string,
    messages: io.array(exports.chatMessageRecord),
    usersInfo: io.record(io.string, userRecord_1.userInfoRecord),
});
//# sourceMappingURL=chatRecords.js.map