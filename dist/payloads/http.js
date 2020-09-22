"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iceServersResponse = exports.iceServerRecord = exports.createChallengeResponse = exports.createChallengeRequest = exports.createRoomResponse = exports.createRoomRequest = exports.gameInitConfig = exports.privateRoomResponsePayload = exports.publicRoomsResponsePayload = exports.publicRoomResponsePayload = void 0;
var io = require("io-ts");
var roomStatsRecord_1 = require("../records/roomStatsRecord");
var ChessGame = require("../chessGame");
exports.publicRoomResponsePayload = io.intersection([
    roomStatsRecord_1.roomStatsRecord,
    io.type({
        type: io.literal('public'),
    }),
]);
exports.publicRoomsResponsePayload = io.array(roomStatsRecord_1.roomStatsRecord);
exports.privateRoomResponsePayload = io.intersection([
    roomStatsRecord_1.roomStatsRecord,
    io.type({
        type: io.literal('private'),
    }),
]);
;
exports.gameInitConfig = io.type({
    timeLimit: ChessGame.chessGameTimeLimit,
    preferredColor: ChessGame.chessPreferredColorOption,
});
exports.createRoomRequest = io.type({
    nickname: io.union([io.string, io.undefined]),
    userId: io.string,
    type: roomStatsRecord_1.roomType,
    // Shouldn't be here
    game: exports.gameInitConfig,
});
exports.createRoomResponse = roomStatsRecord_1.roomStatsRecord;
exports.createChallengeRequest = io.type({
    peerId: io.string,
    game: exports.gameInitConfig,
});
exports.createChallengeResponse = exports.createRoomResponse;
exports.iceServerRecord = io.type({
    url: io.string,
    urls: io.string,
    credential: io.union([io.string, io.undefined]),
    username: io.union([io.string, io.undefined]),
});
exports.iceServersResponse = io.array(exports.iceServerRecord);
// export const joinRoomRequest = io.type({
//   id: io.string,
//   peerId: io.string,
//   code: io.union([io.string, io.undefined]),
// });
// export type JoinRoomRequest = io.TypeOf<typeof joinRoomRequest>;
// export type JoinPublicRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: string };
// export type JoinPrivateRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: undefined };
//# sourceMappingURL=http.js.map