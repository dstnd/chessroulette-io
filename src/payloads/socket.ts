import * as io from 'io-ts';
import { peerRecord } from '../records/peerRecord';
import { 
  gameJoinRequestPayload, 
  gameDrawOfferingRequestPayload, 
  gameMoveRequestPayload, 
  gameResignationRequestPayload,
  gameAbortionRequestPayload,
} from './game';
import { myStatsPayload } from './peer';
import { 
  roomStatsPayload,
  peerJoinedRoomPayload,
  joinRoomRequestPayload,
  joinRoomSuccessPayload,
  joinRoomFailurePayload,
} from './room';

export const userIdentificationPayload = io.type({
  kind: io.literal('userIdentification'),
  content: io.type({
    userId: io.string,
  }),
});
export type UserIdentificationPayload = io.TypeOf<typeof userIdentificationPayload>;

export const pingPayload = io.type({
  kind: io.literal('ping'),
  content: io.string,
});
export type PingPayload = io.TypeOf<typeof pingPayload>;

export const connectionOpenedPayload = io.type({
  kind: io.literal('connectionOpened'),
  content: io.type({
    me: peerRecord,
  }),
});
export type ConnectionOpenedPayload = io.TypeOf<typeof connectionOpenedPayload>;

export const whoAmIRequestPayload = io.type({
  kind: io.literal('whoami'),
  content: io.unknown,
});
export type WhoAmIRequestPayload = io.TypeOf<typeof whoAmIRequestPayload>;

export const genericFailureResponsePayload = io.type({
  kind: io.literal('genericRequestFailure'),
  content: io.unknown,
});
export type GenericFailureResponsePayload = io.TypeOf<typeof genericFailureResponsePayload>;
// export const leaveRoomRequestPayload = io.type({
//   kind: io.literal('leaveRoomRequest'),
//   content: io.type({
//     room: roomStatsRecord,
//     me: peerRecord,
//   }),
// });
// export type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;

export const socketPayload = io.union([
  userIdentificationPayload,
  pingPayload,
  genericFailureResponsePayload,

  // Business Logic
  connectionOpenedPayload,
  myStatsPayload,
  roomStatsPayload,
  peerJoinedRoomPayload,
  joinRoomRequestPayload,
  joinRoomSuccessPayload,
  joinRoomFailurePayload,
  whoAmIRequestPayload,

  gameJoinRequestPayload,
  gameMoveRequestPayload,
  gameDrawOfferingRequestPayload,
  gameResignationRequestPayload,
  gameAbortionRequestPayload,
]);
export type SocketPayload = io.TypeOf<typeof socketPayload>;