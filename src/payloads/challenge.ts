import * as io from 'io-ts';
import { roomRecord } from '../records/roomRecord';
import { challengeRecord, gameSpecsRecord } from '../records/challengeRecord';

// HTTP

export const baseCreateChallengeRequest = io.type({
  gameSpecs: gameSpecsRecord,
  userId: io.string,
});

export const createPublicChallengeRequest = io.intersection([
  baseCreateChallengeRequest,
  io.type({
    type: io.keyof({ public: null }),
  }),
]);
export type CreatePublicChallengeRequest = io.TypeOf<typeof createPublicChallengeRequest>;

export const createPrivateChallengeRequest = io.intersection([
  baseCreateChallengeRequest,
  io.type({
    type: io.keyof({ private: null }),
  }),
]);
export type CreatePrivateChallengeRequest = io.TypeOf<typeof createPrivateChallengeRequest>;

export const createChallengeRequest = io.union([
  createPrivateChallengeRequest,
  createPublicChallengeRequest,
]);
export type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;

export const createChallengeResponse = challengeRecord;
export type CreateChallengeResponse = io.TypeOf<typeof createChallengeResponse>;

export const removeChallengeRequest = io.type({
  id: io.string,

  // This has to be the same user that created it. 
  // TODO: In the future this could be taken from the auth
  userId: io.string,
});

export const acceptChallengeRequest = io.type({
  id: io.string,
  userId: io.string,
});
export type AcceptChallengeRequest = io.TypeOf<typeof acceptChallengeRequest>;

export const quickPairingRequest = io.type({
  userId: io.string,
  gameSpecs: gameSpecsRecord,
});
export type QuickPairingRequest = io.TypeOf<typeof quickPairingRequest>;

export const quickPairingMatchedResponse = io.type({
  matched: io.literal(true),
  room: roomRecord,
});
export type QuickPairingMatchedResponse = io.TypeOf<typeof quickPairingMatchedResponse>;

export const quickPairingPendingResponse = io.type({
  matched: io.literal(false),
  challenge: challengeRecord,
});
export type QuickPairingPendingResponse = io.TypeOf<typeof quickPairingPendingResponse>;

export const quickPairingResponse = io.union([
  quickPairingMatchedResponse,
  quickPairingPendingResponse,
]);
export type QuickPairingResponse = io.TypeOf<typeof quickPairingResponse>;

// SOCKET

export const challengeAcceptedPayload = io.type({
  kind: io.literal('challengeAccepted'),
  content: io.type({
    id: io.string,
    userId: io.string,
    room: roomRecord,
  }),
});
export type ChallengeAcceptedPayload = io.TypeOf<typeof challengeAcceptedPayload>;