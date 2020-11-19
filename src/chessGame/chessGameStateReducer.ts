import {
  ChessGameStatePgn,
  ChessGameColor,
  ChessGameStatePending,
  ChessGameStateStarted,
  ChessGameStateFinished,
  ChessGameStateNeverStarted,
  ChessGameTimeLimit,
  ChessGameStateWaitingForOpponent,
  ChessGameStateStopped,
} from './records';
import { otherChessColor, getRandomChessColor, getCapturedPiecesState } from './util';
import { getNewChessGame } from './sdk';
import { ISODateTime, toISODateTime } from 'io-ts-isodatetime';
import { ChessMove } from './boardRecords';
import { UserInfoRecord } from '../records/userRecord';
import { chessGameTimeLimitMsMap } from '../metadata/game';
import { Move } from 'chess.js';

export const prepareGameAction = ({
  players,
  timeLimit,
  preferredColor = 'random',
  pgn = '',
}: {
  players: [UserInfoRecord] | [UserInfoRecord, UserInfoRecord];
  timeLimit: ChessGameTimeLimit;
  preferredColor?: ChessGameColor | 'random';
  pgn?: ChessGameStatePgn;
}):
  | ChessGameStateWaitingForOpponent
  | ChessGameStatePending
  | ChessGameStateStarted
  | ChessGameStateFinished => {
  const firstPlayerColor: ChessGameColor =
    preferredColor === 'random' ? getRandomChessColor() : preferredColor;

  if (!players[1]) {
    const waitingForOpponentGameState: ChessGameStateWaitingForOpponent = {
      state: 'waitingForOpponent',
      timeLimit,
      players: [
        {
          color: firstPlayerColor,
          user: players[0],
        },
      ],
      timeLeft: {
        white: chessGameTimeLimitMsMap[timeLimit],
        black: chessGameTimeLimitMsMap[timeLimit],
      },
      lastMoveAt: undefined,
      lastMoveBy: undefined,
      lastMoved: undefined,
      captured: undefined,
      pgn: undefined,
      winner: undefined,
    };

    return waitingForOpponentGameState;
  }

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
    captured: undefined,

    lastMoveAt: undefined,
    lastMoveBy: undefined,
    lastMoved: undefined,
  };

  if (pgn) {
    // If there is a pgn given on prepare, then simulate a move action!
    return moveAction(pendingGameState, { pgn, movedAt: toISODateTime(new Date()) });
  }

  return pendingGameState;
};

const joinGameAction = (prev: ChessGameStateWaitingForOpponent, opponent: UserInfoRecord) => {
  // This could maybe be tested more and
  //  Just need to make sure the player positions/colors
  // stay the same
  return prepareGameAction({
    players: [prev.players[0].user, opponent],
    preferredColor: prev.players[0].color,
    timeLimit: prev.timeLimit,
  });
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
  const { lastMoved: prevLastMoved = 'black' } = prev;

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

  // const now = new Date();
  const moveElapsedMs =
    prev.lastMoveAt !== undefined ? movedAt.getTime() - new Date(prev.lastMoveAt).getTime() : 0; // Zero if first move

  const captured = getCapturedPiecesState(instance.history({ verbose: true }) as Move[]);

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
      captured,

      lastMoved: currentLastMovedBy,
    };
  }

  const timeLeft = prev.timeLeft[currentLastMovedBy] - moveElapsedMs;

  if (prev.timeLimit !== 'untimed' && prev.state === 'started' && timeLeft < 0) {
    return {
      ...prev,
      state: 'finished',
      winner: prevLastMoved,
    };
  }

  return {
    ...prev,
    state: 'started',
    pgn: instance.pgn(),
    lastMoveAt: next.movedAt,
    lastMoveBy: currentLastMovedBy,
    lastMoved: currentLastMovedBy,
    timeLeft: {
      ...prev.timeLeft,
      [currentLastMovedBy]: timeLeft,
    },
    captured,
    winner: undefined,
  };
};

const timerFinishedAction = (
  prev: ChessGameStateStarted,

  // @deprecated
  next?: {
    loser: ChessGameColor;
  }
): ChessGameStateFinished => {
  return {
    ...prev,
    state: 'finished',
    winner: otherChessColor(prev.lastMoveBy),
  };
};

const abortAction = (
  prev: ChessGameStatePending | ChessGameStateWaitingForOpponent
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
  joinGame: joinGameAction,
  move: moveAction,
  timerFinished: timerFinishedAction,
  resign: resignAction,
  draw: drawAction,
  abort: abortAction,
};
