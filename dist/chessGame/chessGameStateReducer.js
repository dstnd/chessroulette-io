"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.prepareGameAction = void 0;
var util_1 = require("./util");
var sdk_1 = require("./sdk");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var game_1 = require("../metadata/game");
exports.prepareGameAction = function (_a) {
    var players = _a.players, timeLimit = _a.timeLimit, _b = _a.preferredColor, preferredColor = _b === void 0 ? "random" : _b, _c = _a.pgn, pgn = _c === void 0 ? "" : _c;
    var firstPlayerColor = preferredColor === "random" ? util_1.getRandomChessColor() : preferredColor;
    if (!players[1]) {
        var waitingForOpponentGameState = {
            state: "waitingForOpponent",
            timeLimit: timeLimit,
            players: [
                {
                    color: firstPlayerColor,
                    user: players[0],
                },
            ],
            timeLeft: {
                white: game_1.chessGameTimeLimitMsMap[timeLimit],
                black: game_1.chessGameTimeLimitMsMap[timeLimit],
            },
            lastMoveAt: undefined,
            lastMoveBy: undefined,
            lastMoved: undefined,
            pgn: undefined,
            winner: undefined,
        };
        return waitingForOpponentGameState;
    }
    var pendingGameState = {
        state: "pending",
        timeLimit: timeLimit,
        players: [
            {
                color: firstPlayerColor,
                user: players[0],
            },
            {
                color: util_1.otherChessColor(firstPlayerColor),
                user: players[1],
            },
        ],
        timeLeft: {
            white: game_1.chessGameTimeLimitMsMap[timeLimit],
            black: game_1.chessGameTimeLimitMsMap[timeLimit],
        },
        pgn: undefined,
        winner: undefined,
        lastMoveAt: undefined,
        lastMoveBy: undefined,
        lastMoved: undefined,
    };
    if (pgn) {
        // If there is a pgn given on prepare, then simulate a move action!
        return moveAction(pendingGameState, { pgn: pgn });
    }
    return pendingGameState;
};
var joinGameAction = function (prev, opponent) {
    // This could maybe be tested more and
    //  Just need to make sure the player positions/colors
    // stay the same
    return exports.prepareGameAction({
        players: [prev.players[0].user, opponent],
        preferredColor: prev.players[0].color,
        timeLimit: prev.timeLimit,
    });
};
var moveAction = function (prev, next) {
    var _a;
    // Default it to black so when the game just starts
    //  it sets the 1st move to white
    var _b = prev.lastMoved, prevLastMoved = _b === void 0 ? "black" : _b;
    var currentLastMovedBy = util_1.otherChessColor(prevLastMoved);
    var instance = sdk_1.getNewChessGame();
    var pgn = ("pgn" in next ? next.pgn : prev.pgn) || "";
    // Load the nnxt or prev pgn
    instance.load_pgn(pgn);
    // If there is a move make it
    if ("move" in next) {
        instance.move(next.move);
    }
    var now = new Date();
    var moveElapsedMs = (prev.lastMoveAt !== undefined)
        ? now.getTime() - new Date(prev.lastMoveAt).getTime()
        : 0; // Zero if first move
    if (instance.game_over()) {
        return __assign(__assign({}, prev), { state: "finished", winner: instance.in_draw() ? "1/2" : currentLastMovedBy, pgn: instance.pgn(), lastMoveAt: io_ts_isodatetime_1.toISODateTime(now), lastMoveBy: currentLastMovedBy, lastMoved: currentLastMovedBy });
    }
    var timeLeft = prev.timeLeft[currentLastMovedBy] - moveElapsedMs;
    if (prev.state === 'started' && timeLeft < 0) {
        return __assign(__assign({}, prev), { state: 'finished', winner: prevLastMoved });
    }
    return __assign(__assign({}, prev), { state: "started", pgn: instance.pgn(), lastMoveAt: io_ts_isodatetime_1.toISODateTime(now), lastMoveBy: currentLastMovedBy, lastMoved: currentLastMovedBy, timeLeft: __assign(__assign({}, prev.timeLeft), (_a = {}, _a[currentLastMovedBy] = timeLeft, _a)), winner: undefined });
};
var timerFinishedAction = function (prev, 
// @deprecated
next) {
    return __assign(__assign({}, prev), { state: "finished", winner: util_1.otherChessColor(prev.lastMoveBy) });
};
var abortAction = function (prev) {
    return __assign(__assign({}, prev), { state: "neverStarted" });
};
var resignAction = function (prev, resigningColor) {
    return __assign(__assign({}, prev), { state: "stopped", winner: util_1.otherChessColor(resigningColor) });
};
var drawAction = function (prev) {
    return __assign(__assign({}, prev), { state: "stopped", winner: "1/2" });
};
exports.actions = {
    prepareGame: exports.prepareGameAction,
    joinGame: joinGameAction,
    move: moveAction,
    timerFinished: timerFinishedAction,
    resign: resignAction,
    draw: drawAction,
    abort: abortAction,
};
//# sourceMappingURL=chessGameStateReducer.js.map