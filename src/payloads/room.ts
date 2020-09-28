import * as io from 'io-ts';
import { peerRecord } from '../records/peerRecord';
import { 
  roomActivityOption,
  roomActivityRecord,
  roomRecord,
  roomType,
  publicRoomRecord,
  privateRoomRecord,
} from '../records/roomRecord';

// TODO: Not sure how to split the HTTP/Socket payloads while still keeping them 
//  grouped by feature/module

// HTTP

export const createRoomRequest = io.type({
  name: io.union([io.string, io.undefined]),
  userId: io.string,
  type: roomType,

  activity: roomActivityOption,
  
  // Shouldn't be here
  //  This belongs to the challenge. Once a challenge is accepteda room will be created
  //  with the "play" actvity and the correct game state - not waiting for opponent
  // game: gameInitConfig,
});
export type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;

export const createRoomResponse = roomRecord;
export type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;

export const publicRoomResponsePayload = publicRoomRecord;
export type PublicRoomResponsePayload = io.TypeOf<typeof publicRoomResponsePayload>;
export const privateRoomResponsePayload = privateRoomRecord;
export type PrivateRoomResponsePayload = io.TypeOf<typeof privateRoomResponsePayload>;

export const publicRoomsResponsePayload = io.array(publicRoomRecord);
export type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;

// SOCKET

export const roomStatsPayload = io.type({
  kind: io.literal('roomStats'),
  content: roomRecord,
});
export type RoomStatsPayload = io.TypeOf<typeof roomStatsPayload>;

// This is different b/c the client is like a client request
//  while the others are server responses. 
//  Not sure I need to make a distinction between them (yet).
export const joinRoomRequestPayload = io.type({
  kind: io.literal('joinRoomRequest'),
  content: io.type({
    roomId: io.string,
    code: io.union([io.string, io.undefined]),
  }),
});
export type JoinRoomRequestPayload = io.TypeOf<typeof joinRoomRequestPayload>;

export const joinRoomSuccessPayload = io.type({
  kind: io.literal('joinRoomSuccess'),
  content: io.type({
    room: roomRecord,
    me: peerRecord,
  }),
});
export type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;

export const joinRoomFailurePayload = io.type({
  kind: io.literal('joinRoomFailure'),
  content: io.keyof({
    WrongCode: null,
    InexistentRoom: null,
    InexistentPeer: null,
    OtherRoomAlreadyJoined: null,
  }),
});
export type JoinRoomFailurePayload = io.TypeOf<typeof joinRoomFailurePayload>;

// TODO: Not sure this is still needed
// TODO: @deprecate in favor of roomStatsPayload?
export const peerJoinedRoomPayload = io.type({
  kind: io.literal('peerJoinedRoom'),
  content: io.type({
    roomId: io.string,
    peerId: io.string,
  }),
});
export type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>; 