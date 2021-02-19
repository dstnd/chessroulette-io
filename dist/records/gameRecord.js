"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRecord = void 0;
var io = require("io-ts");
var chessGame_1 = require("../chessGame");
exports.gameRecord = io.intersection([
    chessGame_1.chessGameState,
    io.type({
        id: io.string,
    }),
]);
//# sourceMappingURL=gameRecord.js.map