import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import * as ChessGame from '../chessGame';

export const gameSpecsRecord = io.type({
  timeLimit: ChessGame.chessGameTimeLimit,
  preferredColor: ChessGame.chessPreferredColorOption,
});
export type GameSpecsRecord = io.TypeOf<typeof gameSpecsRecord>;

export const baseChallengeRecord = io.type({
  type: io.keyof({
    public: null,
    private: null,
  }),
  gameSpecs: gameSpecsRecord,
});

export const challengeRecord = io.intersection([
  baseChallengeRecord,
  io.type({
    id: io.string,
    createdBy: io.string,
    createdAt: isoDateTimeFromIsoString,
    slug: io.string,
  }),
]);
export type ChallengeRecord = io.TypeOf<typeof challengeRecord>;

export const publicChallengeRecord = io.intersection([
  challengeRecord,
  io.type({
    type: io.literal('public'),
  }),
]);
export type PublicChallengeRecord = io.TypeOf<typeof publicChallengeRecord>;

export const privateChallengeRecord = io.intersection([
  challengeRecord,
  io.type({
    type: io.literal('private'),
  }),
]);
export type PrivateChallengeRecord = io.TypeOf<typeof privateChallengeRecord>;
