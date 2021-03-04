import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { ChessGameState, chessGameState } from '../chessGame';

export const gameRecord = io.intersection([
  chessGameState,
  io.type({
    id: io.string,
    createdAt: isoDateTimeFromIsoString,
    updatedAt: isoDateTimeFromIsoString,
  }),
]);

export type GameRecord = io.TypeOf<typeof gameRecord>;

export type GameRecordFromGameState<GameState extends ChessGameState> = GameRecord & GameState;

export const gameRecordWithoutPlayerInfo = io.intersection([
  gameRecord,
  io.type({
    players: io.string,
  }),
]);

export type GameRecordWithoutPlayerInfo = io.TypeOf<typeof gameRecordWithoutPlayerInfo>;
