"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRecordWithoutPlayerInfo = exports.gameRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var chessGame_1 = require("../chessGame");
exports.gameRecord = io.intersection([
    chessGame_1.chessGameState,
    io.type({
        id: io.string,
        createdAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
        updatedAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    }),
]);
exports.gameRecordWithoutPlayerInfo = io.intersection([
    exports.gameRecord,
    io.type({
        players: io.string,
    }),
]);
//# sourceMappingURL=gameRecord.js.map