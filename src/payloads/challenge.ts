import * as io from 'io-ts';
import { roomRecord } from '../records/roomRecord';
import { baseChallengeRecord, challengeRecord } from '../records/challengeRecord';

// HTTP

export const createChallengeRequest = io.intersection([
  baseChallengeRecord,
  io.type({
    userId: io.string,
  }),
]);
export type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;

export const createChallengeResponse = challengeRecord;
export type CreateChallengeResponse = io.TypeOf<typeof createChallengeResponse>;

export const createPublicChallengeRequest = io.intersection([
  createChallengeRequest,
  io.type({
    type: io.literal('public'),
  }),
]);
export type CreatePublicChallengeRequest = io.TypeOf<typeof createPublicChallengeRequest>;

export const createPrivateChallengeRequest = io.intersection([
  createChallengeRequest,
  io.type({
    type: io.literal('private'),
  }),
]);
export type CreatePrivateChallengeRequest = io.TypeOf<typeof createPrivateChallengeRequest>;

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