"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var userRecord_1 = require("./userRecord");
// A Peer Record is a User that has an activ Session
exports.peerRecord = io.intersection([
    io.type({
        // Deprecate this in favor of only using peer.user.id
        // This will ensure no discrepancies between the 2 ever exist
        //  since atm peer.id and peer.user.id are [implicitly] supposed to be the same
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