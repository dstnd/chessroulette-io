import * as io from 'io-ts';
import { chessGameState } from '../chessGame';

export const gameRecord = io.intersection([
  chessGameState,
  io.type({
    id: io.string,
  }),
]);

export type GameRecord = io.TypeOf<typeof gameRecord>;
