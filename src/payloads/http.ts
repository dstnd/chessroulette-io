import * as io from 'io-ts';
import { roomType } from '../records';

export const publicRoomsResponsePayload = io.array(io.type({
  id: io.string,
  name: io.string,
  peersCount: io.number,
}));
export type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;

export const createRoomRequest = io.type({
  nickname: io.union([io.string, io.undefined]),
  peerId: io.string,
  type: roomType,
});
export type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;

export const createRoomResponse = io.union([
  io.type({
    id: io.string,
    type: io.literal('private'),
    code: io.string,
  }), 
  io.type({
    id: io.string,
    type: io.literal('public'),
  }),
]);
export type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;

export const createChallengeRequest = io.type({
  peerId: io.string,
});
export type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;

export const createChallengeResponse = createRoomResponse;
export type CreateChallengeResponse = CreateRoomResponse;



// export const joinRoomRequest = io.type({
//   id: io.string,
//   peerId: io.string,
//   code: io.union([io.string, io.undefined]),
// });
// export type JoinRoomRequest = io.TypeOf<typeof joinRoomRequest>;
// export type JoinPublicRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: string };
// export type JoinPrivateRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: undefined };