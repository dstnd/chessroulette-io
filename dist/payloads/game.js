"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinedGameUpdatedPayload = exports.gameActionRequestPayload = exports.gameStatusCheckRequestPayload = exports.gameOfferingCancelRequestPayload = exports.gameRematchDenyRequestPayload = exports.gameRematchAcceptRequestPayload = exports.gameRematchOfferingRequestPayload = exports.gameMoveRequestPayload = exports.gameAbortionRequestPayload = exports.gameResignationRequestPayload = exports.gameDrawDenyRequestPayload = exports.gameDrawAcceptRequestPayload = exports.gameDrawOfferingRequestPayload = exports.gameJoinRequestPayload = void 0;
var io = require("io-ts");
var gameRecord_1 = require("../records/gameRecord");
var chessGame_1 = require("../chessGame");
exports.gameJoinRequestPayload = io.type({
    kind: io.literal('gameJoinRequest'),
    content: io.undefined,
});
exports.gameDrawOfferingRequestPayload = io.type({
    kind: io.literal('gameDrawOfferingRequest'),
    content: io.undefined,
});
exports.gameDrawAcceptRequestPayload = io.type({
    kind: io.literal('gameDrawAcceptRequest'),
    content: io.undefined,
});
exports.gameDrawDenyRequestPayload = io.type({
    kind: io.literal('gameDrawDenyRequest'),
    content: io.undefined,
});
exports.gameResignationRequestPayload = io.type({
    kind: io.literal('gameResignationRequest'),
    content: io.undefined,
});
exports.gameAbortionRequestPayload = io.type({
    kind: io.literal('gameAbortionRequest'),
    content: io.undefined,
});
exports.gameMoveRequestPayload = io.type({
    kind: io.literal('gameMoveRequest'),
    content: chessGame_1.chessMove,
});
exports.gameRematchOfferingRequestPayload = io.type({
    kind: io.literal('gameRematchOfferingRequest'),
    content: io.undefined,
});
exports.gameRematchAcceptRequestPayload = io.type({
    kind: io.literal('gameRematchAcceptRequest'),
    content: io.undefined,
});
exports.gameRematchDenyRequestPayload = io.type({
    kind: io.literal('gameRematchDenyRequest'),
    content: io.undefined,
});
exports.gameOfferingCancelRequestPayload = io.type({
    kind: io.literal('gameOfferingCancelRequest'),
    content: io.undefined,
});
exports.gameStatusCheckRequestPayload = io.type({
    kind: io.literal('gameStatusCheckRequest'),
    content: io.undefined,
});
exports.gameActionRequestPayload = io.union([
    exports.gameJoinRequestPayload,
    exports.gameDrawAcceptRequestPayload,
    exports.gameDrawDenyRequestPayload,
    exports.gameDrawOfferingRequestPayload,
    exports.gameResignationRequestPayload,
    exports.gameAbortionRequestPayload,
    exports.gameMoveRequestPayload,
    exports.gameRematchAcceptRequestPayload,
    exports.gameRematchDenyRequestPayload,
    exports.gameRematchOfferingRequestPayload,
    exports.gameOfferingCancelRequestPayload,
    exports.gameStatusCheckRequestPayload,
]);
// export const readJoinedGameRequestPayload = io.type({
//   kind: io.literal('readJoinedGameRequest'),
//   content: io.undefined,
// });
// export type ReadJoinedGameRequestPayload = io.TypeOf<typeof readJoinedGameRequestPayload>;
// export const getJoinedGameResponsePayload = io.type({
//   kind: io.literal('getJoinedGameResponse'),
//   content: gameRecord,
// });
// export type GetJoinedGameResponsePayload = io.TypeOf<typeof getJoinedGameResponsePayload>;
exports.joinedGameUpdatedPayload = io.type({
    kind: io.literal('joinedGameUpdated'),
    content: gameRecord_1.gameRecord,
});
//# sourceMappingURL=game.js.map