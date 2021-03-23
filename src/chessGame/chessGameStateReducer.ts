import {
  ChessGameStatePgn,
  ChessGameColor,
  ChessGameStatePending,
  ChessGameStateStarted,
  ChessGameStateFinished,
  ChessGameStateNeverStarted,
  ChessGameTimeLimit,
  ChessGameStateStopped,
  ChessGameState,
} from './records';
import { otherChessColor, getRandomChessColor } from './util';
import { getNewChessGame } from './sdk';
import { ISODateTime, toISODateTime } from 'io-ts-isodatetime';
import { ChessMove } from './boardRecords';
import { UserInfoRecord } from '../records/userRecord';
import { chessGameTimeLimitMsMap } from '../metadata/game';

export const prepareGameAction = ({
  players,
  timeLimit,
  preferredColor = 'random',
  pgn = '',
}: {
  players: [UserInfoRecord, UserInfoRecord];
  timeLimit: ChessGameTimeLimit;
  preferredColor?: ChessGameColor | 'random';
  pgn?: ChessGameStatePgn;
}):
  | ChessGameStatePending
  | ChessGameStateStarted
  | ChessGameStateFinished => {
  const firstPlayerColor: ChessGameColor =
    preferredColor === 'random' ? getRandomChessColor() : preferredColor;

  const pendingGameState: ChessGameStatePending = {
    state: 'pending',
    timeLimit,
    players: [
      {
        color: firstPlayerColor,
        user: players[0],
      },
      {
        color: otherChessColor(firstPlayerColor),
        user: players[1],
      },
    ],
    timeLeft: {
      white: chessGameTimeLimitMsMap[timeLimit],
      black: chessGameTimeLimitMsMap[timeLimit],
    },
    pgn: undefined,
    winner: undefined,

    lastMoveAt: undefined,
    lastMoveBy: undefined,
  };

  if (pgn) {
    // If there is a pgn given on prepare, then simulate a move action!
    return moveAction(pendingGameState, { pgn, movedAt: toISODateTime(new Date()) });
  }

  return pendingGameState;
};

const moveAction = (
  prev: ChessGameStatePending | ChessGameStateStarted,
  next:
    | {
        move: ChessMove;
        movedAt: ISODateTime;
      }
    | {
        pgn: ChessGameStatePgn;
        movedAt: ISODateTime;
      }
): ChessGameStateStarted | ChessGameStateFinished => {
  // Default it to black so when the game just starts
  //  it sets the 1st move to white
  const { lastMoveBy: prevLastMoveBy = 'black' } = prev;

  const instance = getNewChessGame();

  const pgn = ('pgn' in next ? next.pgn : prev.pgn) || '';

  // Load the nnxt or prev pgn
  instance.load_pgn(pgn);

  // If there is a move make it
  if ('move' in next) {
    instance.move(next.move);
  }

  const nextPgn = instance.pgn();

  // Don't do anything if the PGN's are the same
  // Multiple Requests shouldn't change the output
  if (prev.pgn === nextPgn) {
    return prev;
  }

  const movedAt = new Date(next.movedAt);

  const moveElapsedMs = (prev.lastMoveAt !== undefined)
    ? movedAt.getTime() - new Date(prev.lastMoveAt).getTime()
    : 0; // Zero if first move

  // If it's white's turn that means black moved last!
  const currentLastMovedBy = instance.turn() === 'w' ? 'black' : 'white';

  if (instance.game_over()) {
    return {
      ...prev,
      state: 'finished',
      winner: instance.in_draw() ? '1/2' : currentLastMovedBy,
      pgn: instance.pgn(),

      lastMoveAt: next.movedAt,
      lastMoveBy: currentLastMovedBy,
    };
  }

  const timeLeft = prev.timeLeft[currentLastMovedBy] - moveElapsedMs;

  if (prev.timeLimit !== 'untimed' && prev.state === 'started' && timeLeft < 0) {
    return {
      ...prev,
      state: 'finished',
      winner: prevLastMoveBy,
    };
  }

  return {
    ...prev,
    state: 'started',
    pgn: instance.pgn(),
    lastMoveAt: next.movedAt,
    lastMoveBy: currentLastMovedBy,
    timeLeft: {
      ...prev.timeLeft,
      [currentLastMovedBy]: timeLeft,
    },
    winner: undefined,
  };
};

const statusCheck = (prev: ChessGameState, at: Date): ChessGameState => {
  if (prev.state === 'started') {
    const turn = otherChessColor(prev.lastMoveBy);
    const delta = at.getTime() - (new Date(prev.lastMoveAt).getTime() + prev.timeLeft[turn]);

    if (delta > 0) {
      return {
        ...prev,
        state: 'finished',
        winner: prev.lastMoveBy,
        timeLeft: {
          ...prev.timeLeft,
          [turn]: 0,
        }
      }
    }

    return prev;
  }

  return prev;
}

// @deprecated
const timerFinishedAction = (
  prev: ChessGameStateStarted,
): ChessGameStateFinished => {
  return {
    ...prev,
    state: 'finished',
    winner: otherChessColor(prev.lastMoveBy),
  };
};

const abortAction = (
  prev: ChessGameStatePending
): ChessGameStateNeverStarted => {
  return {
    ...prev,
    state: 'neverStarted',
  };
};

const resignAction = (
  prev: ChessGameStateStarted,
  resigningColor: ChessGameColor
): ChessGameStateStopped => {
  return {
    ...prev,
    state: 'stopped',
    winner: otherChessColor(resigningColor),
  };
};

const drawAction = (prev: ChessGameStateStarted): ChessGameStateStopped => {
  return {
    ...prev,
    state: 'stopped',
    winner: '1/2',
  };
};

export const actions = {
  prepareGame: prepareGameAction,
  // joinGame: joinGameAction,
  move: moveAction,
  resign: resignAction,
  draw: drawAction,
  abort: abortAction,
  statusCheck,

  // @deprecate in favor of statusCheck
  timerFinished: timerFinishedAction,
};
