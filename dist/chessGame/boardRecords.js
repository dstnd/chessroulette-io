"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessMove = exports.chessSquare = exports.capturableChessPieceType = exports.promotionalChessPieceType = exports.chessPieceType = void 0;
var io = require("io-ts");
// Taken from chess.js
/**
 * - "p" for Pawn
 * - "n" for Knight
 * - "b" for Bishop
 * - "r" for Rook
 * - "q" for Queen
 * - "k" for King
 */
exports.chessPieceType = io.keyof({
    'p': undefined,
    'n': undefined,
    'b': undefined,
    'r': undefined,
    'q': undefined,
    'k': undefined,
});
exports.promotionalChessPieceType = io.keyof({
    'n': undefined,
    'b': undefined,
    'r': undefined,
    'q': undefined,
});
exports.capturableChessPieceType = io.keyof({
    'p': undefined,
    'n': undefined,
    'b': undefined,
    'r': undefined,
    'q': undefined,
});
exports.chessSquare = io.keyof({
    'a8': undefined,
    'b8': undefined,
    'c8': undefined,
    'd8': undefined,
    'e8': undefined,
    'f8': undefined,
    'g8': undefined,
    'h8': undefined,
    'a7': undefined,
    'b7': undefined,
    'c7': undefined,
    'd7': undefined,
    'e7': undefined,
    'f7': undefined,
    'g7': undefined,
    'h7': undefined,
    'a6': undefined,
    'b6': undefined,
    'c6': undefined,
    'd6': undefined,
    'e6': undefined,
    'f6': undefined,
    'g6': undefined,
    'h6': undefined,
    'a5': undefined,
    'b5': undefined,
    'c5': undefined,
    'd5': undefined,
    'e5': undefined,
    'f5': undefined,
    'g5': undefined,
    'h5': undefined,
    'a4': undefined,
    'b4': undefined,
    'c4': undefined,
    'd4': undefined,
    'e4': undefined,
    'f4': undefined,
    'g4': undefined,
    'h4': undefined,
    'a3': undefined,
    'b3': undefined,
    'c3': undefined,
    'd3': undefined,
    'e3': undefined,
    'f3': undefined,
    'g3': undefined,
    'h3': undefined,
    'a2': undefined,
    'b2': undefined,
    'c2': undefined,
    'd2': undefined,
    'e2': undefined,
    'f2': undefined,
    'g2': undefined,
    'h2': undefined,
    'a1': undefined,
    'b1': undefined,
    'c1': undefined,
    'd1': undefined,
    'e1': undefined,
    'f1': undefined,
    'g1': undefined,
    'h1': undefined,
});
exports.chessMove = io.type({
    from: exports.chessSquare,
    to: exports.chessSquare,
    promotion: io.union([
        io.undefined,
        exports.promotionalChessPieceType,
    ]),
});
//# sourceMappingURL=boardRecords.js.map