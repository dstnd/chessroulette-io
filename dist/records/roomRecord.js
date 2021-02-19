"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomWithNoActivityRecord = exports.roomWithPlayActivityRecord = exports.privateRoomRecord = exports.publicRoomRecord = exports.roomRecord = exports.roomType = exports.roomActivityRecord = exports.roomPlayActivityRecord = exports.roomNoActivityRecord = exports.roomActivityOption = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var chessGame_1 = require("../chessGame");
var chatRecords_1 = require("./chatRecords");
var peerRecord_1 = require("./peerRecord");
exports.roomActivityOption = io.keyof({
    none: null,
    play: null,
});
exports.roomNoActivityRecord = io.type({
    type: io.literal('none'),
});
exports.roomPlayActivityRecord = io.intersection([
    io.type({
        type: io.literal('play'),
        // game: chessGameState,
        gameId: io.string,
    }),
    io.partial({
        offer: chessGame_1.chessGameOffer,
    }),
]);
exports.roomActivityRecord = io.union([
    exports.roomNoActivityRecord,
    exports.roomPlayActivityRecord,
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
        slug: io.string,
        peers: io.record(io.string, peerRecord_1.peerRecord),
        activity: exports.roomActivityRecord,
        chatHistory: chatRecords_1.chatHistoryRecord,
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
exports.roomWithPlayActivityRecord = io.intersection([
    exports.roomRecord,
    io.type({
        activity: exports.roomPlayActivityRecord,
    }),
]);
exports.roomWithNoActivityRecord = io.intersection([
    exports.roomRecord,
    io.type({
        activity: exports.roomNoActivityRecord,
    }),
]);
//# sourceMappingURL=roomRecord.js.map