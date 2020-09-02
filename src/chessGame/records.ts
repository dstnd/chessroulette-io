import * as io from 'io-ts';
// import { isoDateTimeFromISOString } from 'src/lib/date';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';

export const chessPlayerWhite = io.type({
  color: io.literal('white'),
  id: io.string,
  name: io.string,
});
export type ChessPlayerWhite = io.TypeOf<typeof chessPlayerWhite>;

export const chessPlayerBlack = io.type({
  color: io.literal('black'),
  id: io.string,
  name: io.string,
});
export type ChessPlayerBlack = io.TypeOf<typeof chessPlayerBlack>;

export const chessPlayer = io.union([chessPlayerBlack, chessPlayerWhite]);
export type ChessPlayer = io.TypeOf<typeof chessPlayer>;

export const chessPlayers = io.type({
  white: chessPlayerWhite,
  black: chessPlayerBlack,
});
export type ChessPlayers = io.TypeOf<typeof chessPlayers>;

export const chessColorWhite = io.literal('white');
export type ChessColorWhite = io.TypeOf<typeof chessColorWhite>;
export const chessColorBlack = io.literal('black');
export type ChessColorBlack = io.TypeOf<typeof chessColorBlack>;

export const chessGameColor = io.union([chessColorWhite, chessColorBlack]);
export type ChessGameColor = io.TypeOf<typeof chessGameColor>;

export const chessGameStateFen = io.string;
export type ChessGameStateFen = io.TypeOf<typeof chessGameStateFen>;

export const chessGameStatePgn = io.string;
export type ChessGameStatePgn = io.TypeOf<typeof chessGameStatePgn>;

export const chessGameTimeLimit = io.keyof({
  bullet: null,
  untimed: null,
  blitz: null,
  rapid: null,
  // day: null,
});
export type ChessGameTimeLimit = io.TypeOf<typeof chessGameTimeLimit>;

export const chessPlayersBySide = io.union([
  io.type({
    home: chessPlayerWhite,
    away: chessPlayerBlack,
  }),
  io.type({
    home: chessPlayerBlack,
    away: chessPlayerWhite,
  }),
]);
export type ChessPlayersBySide = io.TypeOf<typeof chessPlayersBySide>;

export const partialChessPlayersBySide = io.union([
  io.type({
    home: chessPlayer,
    away: io.undefined,
  }),
  io.type({
    home: io.undefined,
    away: chessPlayer,
  }),
]);
export type PartialChessPlayersBySide = io.TypeOf<typeof partialChessPlayersBySide>;

// const c: PartialChessPlayersBySide;

// if (c.home) {
//   c.away
// }

export const chessGameStateWaitingForOpponent = io.type({
  state: io.literal('waitingForOpponent'),
  timeLimit: chessGameTimeLimit,
  // @deprecate
  players: io.union([
    io.type({
      white: chessPlayerWhite,
      black: io.undefined,
    }),
    io.type({
      white: io.undefined,
      black: chessPlayerBlack,
    }),
  ]),
  playersBySide: partialChessPlayersBySide,
  homeColor: chessGameColor,
  timeLeft: io.undefined,
  pgn: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,
  /* @deprecated */
  lastMoved: io.undefined,
});
export type ChessGameStateWaitingForOpponent = io.TypeOf<typeof chessGameStateWaitingForOpponent>;

export const chessGameStatePending = io.type({
  state: io.literal('pending'),
  timeLimit: chessGameTimeLimit,
  players: io.type({
    white: chessPlayerWhite,
    black: chessPlayerBlack,
  }),
  playersBySide: chessPlayersBySide,
  homeColor: chessGameColor,
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,
  /* @deprecated */
  lastMoved: io.undefined,
});
export type ChessGameStatePending = io.TypeOf<typeof chessGameStatePending>;

export const chessGameStateNeverStarted = io.type({
  state: io.literal('neverStarted'),
  timeLimit: chessGameTimeLimit,
  players: io.type({
    white: chessPlayerWhite,
    black: chessPlayerBlack,
  }),
  playersBySide: chessPlayersBySide,
  homeColor: chessGameColor,
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,
  /* @deprecated */
  lastMoved: io.undefined,
});
export type ChessGameStateNeverStarted = io.TypeOf<typeof chessGameStateNeverStarted>;

// TODO: Remove the union once it works
export const chessGameStateStarted = io.type({
  timeLimit: chessGameTimeLimit,
  state: io.literal('started'),
  players: io.type({
    white: chessPlayerWhite,
    black: chessPlayerBlack,
  }),
  playersBySide: chessPlayersBySide,
  homeColor: chessGameColor,
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: chessGameStatePgn,
  winner: io.undefined,

  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,
  /* @deprecated */
  lastMoved: io.keyof(chessPlayers.props),
});
export type ChessGameStateStarted = io.TypeOf<typeof chessGameStateStarted>;

export const chessGameStateFinished = io.type({
  state: io.literal('finished'),
  timeLimit: chessGameTimeLimit,
  players: io.type({
    white: chessPlayerWhite,
    black: chessPlayerBlack,
  }),
  playersBySide: chessPlayersBySide,
  homeColor: chessGameColor,
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: chessGameStatePgn,
  winner: io.union([chessGameColor, io.literal('1/2')]),

  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,
  /* @deprecated */
  lastMoved: io.keyof(chessPlayers.props),
});
export type ChessGameStateFinished = io.TypeOf<typeof chessGameStateFinished>;

export const chessGameState = io.union([
  chessGameStateWaitingForOpponent,
  chessGameStatePending,
  chessGameStateStarted,
  chessGameStateFinished,
  chessGameStateNeverStarted,
]);
export type ChessGameState = io.TypeOf<typeof chessGameState>;
