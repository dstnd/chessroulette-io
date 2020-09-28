"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRoomRecord = exports.publicRoomRecord = exports.roomRecord = exports.roomType = exports.roomActivityRecord = exports.roomActivityOption = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var chessGame_1 = require("../chessGame");
var peerRecord_1 = require("./peerRecord");
exports.roomActivityOption = io.keyof({
    none: null,
    play: null,
});
exports.roomActivityRecord = io.union([
    io.type({
        type: io.literal('none'),
    }),
    io.type({
        type: io.literal('play'),
        game: io.union([chessGame_1.chessGameState, io.undefined]),
        gameOffer: chessGame_1.chessGameOffer,
    }),
]);
exports.roomType = io.keyof({
    public: null,
    private: null,
});
exports.roomRecord = io.intersection([
    io.type({
        id: io.string,
        name: io.string,
        createdAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
        createdBy: io.string,
        peers: io.record(io.string, peerRecord_1.peerRecord),
        activity: exports.roomActivityRecord,
        // TODO: Add
        // lastJoinedAt: null | ISODateTime;
        // lastLeftAt: null | ISODateTime;
        // TODO: Temporarily additon to match the room stats record
        game: chessGame_1.chessGameState,
        gameOffer: chessGame_1.chessGameOffer,
    }),
    io.union([
        io.type({
            type: io.literal('public'),
            code: io.null,
        }),
        io.type({
            type: io.literal('private'),
            code: io.string,
        })
    ])
]);
exports.publicRoomRecord = io.intersection([
    exports.roomRecord,
    io.type({
        type: io.literal('public'),
    }),
]);
exports.privateRoomRecord = io.intersection([
    exports.roomRecord,
    io.type({
        type: io.literal('private'),
    }),
]);
;
//# sourceMappingURL=roomRecord.js.map