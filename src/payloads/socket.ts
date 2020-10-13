import * as io from 'io-ts';
import { peerRecord } from '../records/peerRecord';
import { challengeAcceptedPayload } from './challenge';
import { 
  gameJoinRequestPayload, 
  gameDrawOfferingRequestPayload, 
  gameDrawAcceptRequestPayload,
  gameMoveRequestPayload, 
  gameResignationRequestPayload,
  gameAbortionRequestPayload,
  gameRematchOfferingRequestPayload,
  gameRematchAcceptRequestPayload,
  gameRematchDenyRequestPayload,
  gameDrawDenyRequestPayload,
} from './game';
import { myStatsPayload } from './peer';
import { 
  joinedRoomUpdatedPayload,
  peerJoinedRoomPayload,
  joinRoomRequestPayload,
  joinRoomSuccessPayload,
  joinRoomFailurePayload,
} from './room';
import { statsSocketPayload } from './stats';

export const userIdentificationPayload = io.type({
  kind: io.literal('userIdentification'),
  content: io.type({
    userId: io.string,
  }),
});
export type UserIdentificationPayload = io.TypeOf<typeof userIdentificationPayload>;

export const statsReaderIdentificationPayload = io.type({
  kind: io.literal('statsReaderIdentificationPayload'),
  content: io.type({
    userId: io.string,
  }),
});
export type StatsReaderIdentificationPayload = io.TypeOf<typeof statsReaderIdentificationPayload>;

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

export const whoamiRequestPayload = io.type({
  kind: io.literal('whoami'),
  content: io.unknown,
});
export type WhoamiRequestPayload = io.TypeOf<typeof whoamiRequestPayload>;

export const iamResponsePayload = io.type({
  kind: io.literal('iam'),
  content: peerRecord,
});
export type IamResponsePayload = io.TypeOf<typeof iamResponsePayload>;

export const genericFailureResponsePayload = io.type({
  kind: io.literal('genericRequestFailure'),
  content: io.unknown,
});
export type GenericFailureResponsePayload = io.TypeOf<typeof genericFailureResponsePayload>;

export const socketPayload = io.union([
  userIdentificationPayload,
  statsReaderIdentificationPayload,
  pingPayload,
  genericFailureResponsePayload,

  // Business Logic
  connectionOpenedPayload,
  whoamiRequestPayload,
  iamResponsePayload,

  // Challenges
  challengeAcceptedPayload,

  // Room
  peerJoinedRoomPayload,
  joinRoomRequestPayload,
  joinRoomSuccessPayload,
  joinRoomFailurePayload,

  // Game Actions
  gameJoinRequestPayload,
  gameMoveRequestPayload,
  gameDrawOfferingRequestPayload,
  gameDrawAcceptRequestPayload,
  gameDrawDenyRequestPayload,
  gameResignationRequestPayload,
  gameAbortionRequestPayload,
  gameRematchOfferingRequestPayload,
  gameRematchAcceptRequestPayload,
  gameRematchDenyRequestPayload,

  // Stats
  statsSocketPayload,
  myStatsPayload,
  joinedRoomUpdatedPayload,
]);
export type SocketPayload = io.TypeOf<typeof socketPayload>;