import * as io from 'io-ts';
import { gameRecord } from 'src/records/gameRecord';
import { peerRecord } from '../records/peerRecord';
import { 
  roomRecord,
  roomType,
  publicRoomRecord,
  privateRoomRecord,
  roomNoActivityRecord,
} from '../records/roomRecord';

// TODO: Not sure how to split the HTTP/Socket payloads while still keeping them 
//  grouped by feature/module

// HTTP

export const createRoomRequest = io.intersection([
  io.type({
    userId: io.string,
    type: roomType,
  }),
  io.partial({
    name: io.string,
    // TODO: For now a room can only be created from the client
    // with no activity. In the foture this might change.
    // A PlayRoom can only be created from a challenge
    // A Future Custom Room could possibly be created from the client 
    //  but we'll have to see!
    activity: roomNoActivityRecord,
  }),
]);
export type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;

export const createRoomResponse = roomRecord;
export type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;

export const publicRoomResponsePayload = publicRoomRecord;
export type PublicRoomResponsePayload = io.TypeOf<typeof publicRoomResponsePayload>;
export const privateRoomResponsePayload = privateRoomRecord;
export type PrivateRoomResponsePayload = io.TypeOf<typeof privateRoomResponsePayload>;

export const publicRoomsResponsePayload = io.array(publicRoomRecord);
export type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;

export const roomResponsePayload = roomRecord;
export type RoomResponsePayload = io.TypeOf<typeof roomResponsePayload>;

// SOCKET

export const joinedRoomUpdatedPayload = io.type({
  kind: io.literal('joinedRoomUpdated'),
  content: roomRecord,
});
export type JoinedRoomUpdatedPayload = io.TypeOf<typeof joinedRoomUpdatedPayload>;

export const joinedRoomAndGameUpdatedPayload = io.type({
  kind: io.literal('joinedRoomAndGameUpdated'),
  content: io.type({
    room: roomRecord,
    game: gameRecord,
  }),
});
export type JoinedRoomAndGameUpdatedPayload = io.TypeOf<typeof joinedRoomAndGameUpdatedPayload>;

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

export const leaveRoomRequestPayload = io.type({
  kind: io.literal('leaveRoomRequest'),
  content: io.undefined,
});
export type LeaveRoomRequestPayload = io.TypeOf<typeof leaveRoomRequestPayload>;

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
