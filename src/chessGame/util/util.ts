import {
  ChessGameColor,
  ChessColorWhite,
  ChessColorBlack,
  CapturedPiecesRecord,
  ChessGameState,
  ChessHistory,
} from '../records';
import { getNewChessGame } from '../sdk';
import { Move } from 'chess.js';
import { SimplePGN } from '../pgnUtil';

// I don't know why this needs to be typed like this
//  with a function declaration but if it's declared
//  as an anonymous function it throws a tsc error
export function otherChessColor<C extends ChessGameColor>(
  c: C
): C extends ChessColorWhite ? ChessColorBlack : ChessColorWhite;
export function otherChessColor<C extends ChessGameColor>(c: C) {
  return c === 'white' ? 'black' : 'white';
}

export const getRandomChessColor = () =>
  ['white', 'black'][Math.round(Math.random())] as ChessGameColor;

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
};

// export const pgnToChessHistory = (pgn: SimplePGN | EnhancedPGN): ChessHistory => {
//   const instance = getNewChessGame(pgn);
// };

export const chessHistoryToSimplePgn = (history: ChessHistory): SimplePGN => {
  const instance = getNewChessGame();

  // TODO: This might not be the most efficient 
  //  but it's ok for now to ensure the validaty of the pgn
  history.forEach((move) => {
    instance.move(move);
  });

  return instance.pgn() as SimplePGN;
}
