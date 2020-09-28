"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iceServersResponse = exports.iceServerRecord = exports.createChallengeResponse = exports.createChallengeRequest = exports.gameInitConfig = void 0;
var io = require("io-ts");
var ChessGame = require("../chessGame");
var room_1 = require("./room");
// TOTO: @deprecate in favor of challenge or move it there
exports.gameInitConfig = io.type({
    timeLimit: ChessGame.chessGameTimeLimit,
    preferredColor: ChessGame.chessPreferredColorOption,
});
exports.createChallengeRequest = io.type({
    peerId: io.string,
    game: exports.gameInitConfig,
});
exports.createChallengeResponse = room_1.createRoomResponse;
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