"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGameState = exports.chessGameStateStopped = exports.chessGameStateFinished = exports.chessGameStateStarted = exports.chessGameStateNeverStarted = exports.chessGameStatePending = exports.capturedPiecesRecord = exports.chessGameOffer = exports.chessGameRematchOffer = exports.chessGameDrawOffer = exports.partialChessPlayersBySide = exports.chessPlayersBySide = exports.chessGameTimeLimit = exports.chessGameStatePgn = exports.chessGameStateFen = exports.chessPreferredColorOption = exports.chessGameColor = exports.chessColorBlack = exports.chessColorWhite = exports.chessPlayers = exports.chessPlayer = exports.chessPlayerBlack = exports.chessPlayerWhite = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var userRecord_1 = require("../records/userRecord");
var boardRecords_1 = require("./boardRecords");
exports.chessPlayerWhite = io.type({
    color: io.literal('white'),
    user: userRecord_1.userInfoRecord,
});
exports.chessPlayerBlack = io.type({
    color: io.literal('black'),
    user: userRecord_1.userInfoRecord,
});
exports.chessPlayer = io.union([exports.chessPlayerBlack, exports.chessPlayerWhite]);
exports.chessPlayers = io.type({
    white: exports.chessPlayerWhite,
    black: exports.chessPlayerBlack,
});
exports.chessColorWhite = io.keyof({ white: null });
exports.chessColorBlack = io.keyof({ black: null });
exports.chessGameColor = io.union([exports.chessColorWhite, exports.chessColorBlack]);
exports.chessPreferredColorOption = io.union([
    exports.chessColorBlack,
    exports.chessColorWhite,
    io.keyof({ random: null }),
]);
exports.chessGameStateFen = io.string;
exports.chessGameStatePgn = io.string;
exports.chessGameTimeLimit = io.keyof({
    bullet: null,
    untimed: null,
    blitz: null,
    rapid: null,
});
exports.chessPlayersBySide = io.union([
    io.type({
        home: exports.chessPlayerWhite,
        away: exports.chessPlayerBlack,
    }),
    io.type({
        home: exports.chessPlayerBlack,
        away: exports.chessPlayerWhite,
    }),
]);
exports.partialChessPlayersBySide = io.union([
    io.type({
        home: exports.chessPlayer,
        away: io.undefined,
    }),
    io.type({
        home: io.undefined,
        away: exports.chessPlayer,
    }),
]);
exports.chessGameDrawOffer = io.type({
    type: io.literal('draw'),
    content: io.type({
        by: exports.chessGameColor,
    }),
});
exports.chessGameRematchOffer = io.type({
    type: io.literal('rematch'),
    content: io.type({
        by: exports.chessGameColor,
    }),
});
exports.chessGameOffer = io.union([exports.chessGameDrawOffer, exports.chessGameRematchOffer]);
exports.capturedPiecesRecord = io.type({
    white: io.record(boardRecords_1.capturableChessPieceType, io.number),
    black: io.record(boardRecords_1.capturableChessPieceType, io.number),
});
// export const chessGameStateWaitingForOpponent = io.type({
//   state: io.literal('waitingForOpponent'),
//   timeLimit: chessGameTimeLimit,
//   players: io.tuple([chessPlayer]),
//   timeLeft: io.type({
//     white: io.number,
//     black: io.number,
//   }),
//   pgn: io.undefined,
//   winner: io.undefined,
//   lastMoveBy: io.undefined,
//   lastMoveAt: io.undefined,
//   captured: io.undefined,
// });
// export type ChessGameStateWaitingForOpponent = io.TypeOf<typeof chessGameStateWaitingForOpponent>;
// export const chessPlayersByColor = io.type({
//   white: io.type({
//   })
// })
// export const playersSection = io.type({
//   playersInfo: io.record(io.string, userInfoRecord),
//   byColor: io.type({
//     white: io.string,
//     black: io.string,
//   }),
//   bySide: io.type({
//     home: io.string,
//     away: io.string,
//   }),
// });
exports.chessGameStatePending = io.type({
    state: io.literal('pending'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
});
exports.chessGameStateNeverStarted = io.type({
    state: io.literal('neverStarted'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
});
// TODO: Remove the union once it works
exports.chessGameStateStarted = io.type({
    timeLimit: exports.chessGameTimeLimit,
    state: io.literal('started'),
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.undefined,
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chessGameStateFinished = io.type({
    state: io.literal('finished'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.union([exports.chessGameColor, io.literal('1/2')]),
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chessGameStateStopped = io.type({
    state: io.literal('stopped'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.union([exports.chessGameColor, io.literal('1/2')]),
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chessGameState = io.union([
    exports.chessGameStatePending,
    exports.chessGameStateStarted,
    exports.chessGameStateFinished,
    exports.chessGameStateNeverStarted,
    exports.chessGameStateStopped,
]);
//# sourceMappingURL=records.js.map