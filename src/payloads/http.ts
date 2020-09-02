import * as io from 'io-ts';
import { roomType, roomStatsRecord } from '../records';
import * as ChessGame from '../chessGame';

export const publicRoomResponsePayload = io.intersection([
  roomStatsRecord,
  io.type({
    type: io.literal('public'),
  }),
]);
export type PublicRoomResponsePayload = io.TypeOf<typeof publicRoomResponsePayload>;

export const publicRoomsResponsePayload = io.array(roomStatsRecord);
export type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;

export const privateRoomResponsePayload = io.intersection([
  roomStatsRecord,
  io.type({
    type: io.literal('private'),
  }),
]);;
export type PrivateRoomResponsePayload = io.TypeOf<typeof privateRoomResponsePayload>;

export const gameInitConfig = io.type({
  timeLimit: ChessGame.chessGameTimeLimit,
});
export type GameInitConfig = io.TypeOf<typeof gameInitConfig>;

export const createRoomRequest = io.type({
  nickname: io.union([io.string, io.undefined]),
  peerId: io.string,
  type: roomType,
  game: gameInitConfig,
});
export type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;

export const createRoomResponse = roomStatsRecord;
export type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;

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