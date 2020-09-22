"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var userRecord_1 = require("./userRecord");
exports.peerRecord = io.intersection([
    io.type({
        id: io.string,
        user: userRecord_1.userRecord,
    }),
    io.union([
        io.type({
            hasJoinedRoom: io.literal(false),
            joinedRoomId: io.null,
            joinedRoomAt: io.null,
        }),
        io.type({
            hasJoinedRoom: io.literal(true),
            joinedRoomId: io.string,
            joinedRoomAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
        })
    ])
]);
//# sourceMappingURL=peerRecord.js.map