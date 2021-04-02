import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import {
  chessGameColor,
  chessGameStatePgn,
  chessGameTimeLimit,
  chessPlayer,
  chessPlayers,
  chessHistory,
} from './utilRecords';

export const chessGameStatePending = io.type({
  state: io.literal('pending'),
  timeLimit: chessGameTimeLimit,
  players: io.tuple([chessPlayer, chessPlayer]),
  // TODO: Rename this to clock(s)
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  // @deprecate in favor of history
  pgn: io.undefined,
  history: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,

  // Game Started At
  startedAt: io.undefined,
  // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
  lastActivityAt: io.undefined,
});
export type ChessGameStatePending = io.TypeOf<typeof chessGameStatePending>;

export const chessGameStateNeverStarted = io.type({
  state: io.literal('neverStarted'),
  timeLimit: chessGameTimeLimit,
  players: io.tuple([chessPlayer, chessPlayer]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  // @deprecate in favor of history
  pgn: io.undefined,
  history: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,
  // Game Started At
  startedAt: io.undefined,
  // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
  lastActivityAt: isoDateTimeFromIsoString,
});
export type ChessGameStateNeverStarted = io.TypeOf<typeof chessGameStateNeverStarted>;

// TODO: Remove the union once it works
export const chessGameStateStarted = io.type({
  timeLimit: chessGameTimeLimit,
  state: io.literal('started'),
  players: io.tuple([chessPlayer, chessPlayer]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  // @deprecate in favor of history
  pgn: chessGameStatePgn,
  history: chessHistory,

  winner: io.undefined,
  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,

  // Game Started At
  startedAt: isoDateTimeFromIsoString,
  // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
  lastActivityAt: isoDateTimeFromIsoString,
});
export type ChessGameStateStarted = io.TypeOf<typeof chessGameStateStarted>;

export const chessGameStateFinished = io.type({
  state: io.literal('finished'),
  timeLimit: chessGameTimeLimit,
  players: io.tuple([chessPlayer, chessPlayer]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  // @deprecate in favor of history
  pgn: chessGameStatePgn,
  history: chessHistory,

  winner: io.union([chessGameColor, io.literal('1/2')]),
  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,

  // Game Started At
  startedAt: isoDateTimeFromIsoString,
  // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
  lastActivityAt: isoDateTimeFromIsoString,
});
export type ChessGameStateFinished = io.TypeOf<typeof chessGameStateFinished>;

export const chessGameStateStopped = io.type({
  state: io.literal('stopped'),
  timeLimit: chessGameTimeLimit,
  players: io.tuple([chessPlayer, chessPlayer]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  // @deprecate in favor of history
  pgn: chessGameStatePgn,
  history: chessHistory,

  winner: io.union([chessGameColor, io.literal('1/2')]),

  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,

  // Game Started At
  startedAt: isoDateTimeFromIsoString,
  // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
  lastActivityAt: isoDateTimeFromIsoString,
});
export type ChessGameStateStopped = io.TypeOf<typeof chessGameStateStopped>;

export const chessGameState = io.union([
  chessGameStatePending,
  chessGameStateStarted,
  chessGameStateFinished,
  chessGameStateNeverStarted,
  chessGameStateStopped,
]);
export type ChessGameState = io.TypeOf<typeof chessGameState>;
