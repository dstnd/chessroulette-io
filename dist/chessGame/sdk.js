"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewChessGame = void 0;
var chess_js_1 = require("chess.js");
var ChessB = require("chess.js");
exports.getNewChessGame = function (pgn) {
    return new (chess_js_1.Chess || ChessB)(pgn);
};
//# sourceMappingURL=sdk.js.map