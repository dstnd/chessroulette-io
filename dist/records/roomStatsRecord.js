"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomType = exports.roomStatsRecord = void 0;
var io = require("io-ts");
var chessGame_1 = require("../chessGame");
var peerRecord_1 = require("./peerRecord");
exports.roomStatsRecord = io.intersection([
    io.type({
        id: io.string,
        name: io.string,
        peersCount: io.number,
        peers: io.record(io.string, peerRecord_1.peerRecord),
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
exports.roomType = io.keyof({
    public: null,
    private: null,
});
//# sourceMappingURL=roomStatsRecord.js.map