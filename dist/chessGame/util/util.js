"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessHistoryToSimplePgn = exports.getCapturedPiecesFromPgn = exports.getCapturedPiecesState = exports.getRandomChessColor = exports.otherChessColor = void 0;
var sdk_1 = require("../sdk");
function otherChessColor(c) {
    return c === 'white' ? 'black' : 'white';
}
exports.otherChessColor = otherChessColor;
exports.getRandomChessColor = function () {
    return ['white', 'black'][Math.round(Math.random())];
};
exports.getCapturedPiecesState = function (history) {
    var initial = {
        white: { p: 0, n: 0, b: 0, r: 0, q: 0 },
        black: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    };
    return history.reduce(function (acc, move) {
        if ('captured' in move && move.captured) {
            var piece = move.captured;
            acc[otherChessColor(move.color === 'w' ? 'white' : 'black')][piece] += 1;
            return acc;
        }
        return acc;
    }, initial);
};
exports.getCapturedPiecesFromPgn = function (pgn) {
    var instance = sdk_1.getNewChessGame(pgn);
    return exports.getCapturedPiecesState(instance.history({ verbose: true }));
};
// export const pgnToChessHistory = (pgn: SimplePGN | EnhancedPGN): ChessHistory => {
//   const instance = getNewChessGame(pgn);
// };
exports.chessHistoryToSimplePgn = function (history) {
    var instance = sdk_1.getNewChessGame();
    // TODO: This might not be the most efficient 
    //  but it's ok for now to ensure the validaty of the pgn
    history.forEach(function (move) {
        instance.move(move);
    });
    return instance.pgn();
};
//# sourceMappingURL=util.js.map