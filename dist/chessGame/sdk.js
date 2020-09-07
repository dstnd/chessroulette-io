"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewChessGame = void 0;
var chess_js_1 = require("chess.js");
var ChessB = require("chess.js");
// This weirdness is due to the fact that node and browser js imports
// are working differently!
var ChessConstructor = chess_js_1.Chess || ChessB;
exports.getNewChessGame = function (pgn) {
    return new ChessConstructor(pgn);
};
//# sourceMappingURL=sdk.js.map