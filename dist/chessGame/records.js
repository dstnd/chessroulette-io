"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGameState = exports.chessGameStateFinished = exports.chessGameStateStarted = exports.chessGameStateNeverStarted = exports.chessGameStatePending = exports.chessGameStateWaitingForOpponent = exports.partialChessPlayersBySide = exports.chessPlayersBySide = exports.chessGameTimeLimit = exports.chessGameStatePgn = exports.chessGameStateFen = exports.chessGameColor = exports.chessColorBlack = exports.chessColorWhite = exports.chessPlayers = exports.chessPlayer = exports.chessPlayerBlack = exports.chessPlayerWhite = void 0;
var io = require("io-ts");
// import { isoDateTimeFromISOString } from 'src/lib/date';
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var userRecord_1 = require("../records/userRecord");
// export const userInfoRecord = io.type({
//   id: io.string,
//   name: io.string,
//   avatarId: io.string,
//   // Add any other pertinent details here if needed!
// });
// export const userInfoRecord = io.type({
//   id: io.string,
//   name: io.string,
//   avatarId: io.string,
//   // Add any other pertinent details here if needed!
// });
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
exports.chessColorWhite = io.literal('white');
exports.chessColorBlack = io.literal('black');
exports.chessGameColor = io.union([exports.chessColorWhite, exports.chessColorBlack]);
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
// const c: PartialChessPlayersBySide;
// if (c.home) {
//   c.away
// }
exports.chessGameStateWaitingForOpponent = io.type({
    state: io.literal('waitingForOpponent'),
    timeLimit: exports.chessGameTimeLimit,
    // players: io.union([
    //   io.type({
    //     white: chessPlayerWhite,
    //     black: io.undefined,
    //   }),
    //   io.type({
    //     white: io.undefined,
    //     black: chessPlayerBlack,
    //   }),
    // ]),
    // playersIdToColor: io.record(io.string, io.keyof({
    //   'white': undefined,
    //   'black': undefined,
    // })),
    players: io.tuple([exports.chessPlayer]),
    // colors: io.tuple([chessGameColor]),
    // playersInfo: io.record(io.string, userRecord),
    // playersBySide: partialChessPlayersBySide,
    // homeColor: chessGameColor,
    // playersByColor: {},
    timeLeft: io.undefined,
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    /* @deprecated */
    lastMoved: io.undefined,
});
exports.chessGameStatePending = io.type({
    state: io.literal('pending'),
    timeLimit: exports.chessGameTimeLimit,
    // players: chessPlayers,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    // colors: io.tuple([chessGameColor, chessGameColor]),
    // playersBySide: chessPlayersBySide,
    // playersInfo: io.record(io.string, userRecord),
    // homeColor: chessGameColor,
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    /* @deprecated */
    lastMoved: io.undefined,
});
exports.chessGameStateNeverStarted = io.type({
    state: io.literal('neverStarted'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    // players: chessPlayers,
    // playersBySide: chessPlayersBySide,
    // playersInfo: io.record(io.string, userRecord),
    // homeColor: chessGameColor,
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    /* @deprecated */
    lastMoved: io.undefined,
});
// TODO: Remove the union once it works
exports.chessGameStateStarted = io.type({
    timeLimit: exports.chessGameTimeLimit,
    state: io.literal('started'),
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    // players: chessPlayers,
    // playersBySide: chessPlayersBySide,
    // playersInfo: io.record(io.string, userRecord),
    // homeColor: chessGameColor,
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.undefined,
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    /* @deprecated */
    lastMoved: io.keyof(exports.chessPlayers.props),
});
exports.chessGameStateFinished = io.type({
    state: io.literal('finished'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.tuple([exports.chessPlayer, exports.chessPlayer]),
    // players: chessPlayers,
    // playersBySide: chessPlayersBySide,
    // playersInfo: io.record(io.string, userRecord),
    // homeColor: chessGameColor,
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.union([exports.chessGameColor, io.literal('1/2')]),
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    /* @deprecated */
    lastMoved: io.keyof(exports.chessPlayers.props),
});
exports.chessGameState = io.union([
    exports.chessGameStateWaitingForOpponent,
    exports.chessGameStatePending,
    exports.chessGameStateStarted,
    exports.chessGameStateFinished,
    exports.chessGameStateNeverStarted,
]);
//# sourceMappingURL=records.js.map