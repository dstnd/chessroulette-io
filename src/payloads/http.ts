import * as io from 'io-ts';
import * as ChessGame from '../chessGame';
import { CreateRoomResponse, createRoomResponse } from './room';

// TOTO: @deprecate in favor of challenge or move it there
export const gameInitConfig = io.type({
  timeLimit: ChessGame.chessGameTimeLimit,
  preferredColor: ChessGame.chessPreferredColorOption,
});
export type GameInitConfig = io.TypeOf<typeof gameInitConfig>;

export const createChallengeRequest = io.type({
  peerId: io.string,
  game: gameInitConfig,
});
export type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;

export const createChallengeResponse = createRoomResponse;
export type CreateChallengeResponse = CreateRoomResponse;

export const iceServerRecord = io.type({
  url: io.string,
  urls: io.string,
  credential: io.union([io.string, io.undefined]),
  username: io.union([io.string, io.undefined]),
})
export type IceServerRecord = io.TypeOf<typeof iceServerRecord>;

export const iceServersResponse = io.array(iceServerRecord);
export type IceServersResponse = io.TypeOf<typeof iceServersResponse>;


// export const joinRoomRequest = io.type({
//   id: io.string,
//   peerId: io.string,
//   code: io.union([io.string, io.undefined]),
// });
// export type JoinRoomRequest = io.TypeOf<typeof joinRoomRequest>;
// export type JoinPublicRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: string };
// export type JoinPrivateRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: undefined };