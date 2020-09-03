"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewChessGame = void 0;
var Chess = require("chess.js");
exports.getNewChessGame = function (pgn) {
    return new Chess(pgn);
};
//# sourceMappingURL=sdk.js.map