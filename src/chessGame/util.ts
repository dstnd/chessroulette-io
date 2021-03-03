import {
  ChessGameColor,
  ChessColorWhite,
  ChessColorBlack,
  CapturedPiecesRecord,
  ChessGameState,
} from './records';
import { getNewChessGame } from './sdk';
import { Move } from 'chess.js';

// I don't know why this needs to be typed like this
//  with a function declaration but if it's declared
//  as an anonymous function it throws a tsc error
export function otherChessColor<C extends ChessGameColor>(
  c: C
): C extends ChessColorWhite ? ChessColorBlack : ChessColorWhite;
export function otherChessColor<C extends ChessGameColor>(c: C) {
  return c === 'white' ? 'black' : 'white';
}

/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 *
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle<T extends unknown>(a: T[]) {
  // eslint-disable-next-line no-plusplus
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const getRandomChessColor = () => shuffle(['white', 'black'])[0] as ChessGameColor;

export const getCapturedPiecesState = (history: Move[]) => {
  const initial: CapturedPiecesRecord = {
    white: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    black: { p: 0, n: 0, b: 0, r: 0, q: 0 },
  };

  return history.reduce((acc, move) => {
    if ('captured' in move && move.captured) {
      const piece = move.captured;

      acc[otherChessColor(move.color === 'w' ? 'white' : 'black')][piece] += 1;

      return acc;
    }

    return acc;
  }, initial);
};

export const getCapturedPiecesFromPgn = (pgn: ChessGameState['pgn']) => {
  const instance = getNewChessGame(pgn);

  return getCapturedPiecesState(instance.history({ verbose: true }));
}
