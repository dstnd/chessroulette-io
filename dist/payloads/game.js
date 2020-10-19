"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameActionRequestPayload = exports.gameRematchDenyRequestPayload = exports.gameRematchAcceptRequestPayload = exports.gameRematchOfferingRequestPayload = exports.gameMoveRequestPayload = exports.gameAbortionRequestPayload = exports.gameResignationRequestPayload = exports.gameDrawDenyRequestPayload = exports.gameDrawAcceptRequestPayload = exports.gameDrawOfferingRequestPayload = exports.gameJoinRequestPayload = void 0;
var io = require("io-ts");
var boardRecords_1 = require("../chessGame/boardRecords");
exports.gameJoinRequestPayload = io.type({
    kind: io.literal('gameJoinRequest'),
    content: io.type({
        roomCredentials: io.type({
            roomId: io.string,
            code: io.union([io.string, io.undefined]),
        }),
    }),
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
    content: boardRecords_1.chessMove,
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
]);
//# sourceMappingURL=game.js.map