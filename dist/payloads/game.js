"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameMoveRequestPayload = exports.gameResignationRequestPayload = exports.gameDrawOfferingRequestPayload = exports.gameJoinRequestPayload = void 0;
var io = require("io-ts");
var boardRecords_1 = require("../chessGame/boardRecords");
exports.gameJoinRequestPayload = io.type({
    kind: io.literal('gameJoinRequest'),
    content: io.undefined,
});
exports.gameDrawOfferingRequestPayload = io.type({
    kind: io.literal('gameDrawOfferingRequest'),
    content: io.undefined,
});
exports.gameResignationRequestPayload = io.type({
    kind: io.literal('gameResignationRequest'),
    content: io.undefined,
});
exports.gameMoveRequestPayload = io.type({
    kind: io.literal('gameMoveRequest'),
    content: boardRecords_1.chessMove,
});
//# sourceMappingURL=game.js.map