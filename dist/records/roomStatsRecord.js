"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomStatsRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var chessGame_1 = require("../chessGame");
var peerRecord_1 = require("./peerRecord");
// @deprecate in favor of RoomRecord
exports.roomStatsRecord = io.intersection([
    io.type({
        id: io.string,
        name: io.string,
        peersCount: io.number,
        peers: io.record(io.string, peerRecord_1.peerRecord),
        createdAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
        createdBy: io.string,
        // @deprecate in favor of activity
        game: chessGame_1.chessGameState,
        gameOffer: chessGame_1.chessGameOffer,
    }),
    io.union([
        io.type({ type: io.literal('public') }),
        io.type({
            type: io.literal('private'),
            code: io.string,
        })
    ])
]);
//# sourceMappingURL=roomStatsRecord.js.map