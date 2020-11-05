import * as io from 'io-ts';
// import { isoDateTimeFromISOString } from 'src/lib/date';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { userInfoRecord } from '../records/userRecord';
import { capturableChessPieceType } from './boardRecords';

export const chessPlayerWhite = io.type({
  color: io.literal('white'),
  user: userInfoRecord,
});
export type ChessPlayerWhite = io.TypeOf<typeof chessPlayerWhite>;

export const chessPlayerBlack = io.type({
  color: io.literal('black'),
  user: userInfoRecord,
});
export type ChessPlayerBlack = io.TypeOf<typeof chessPlayerBlack>;

export const chessPlayer = io.union([chessPlayerBlack, chessPlayerWhite]);
export type ChessPlayer = io.TypeOf<typeof chessPlayer>;

export const chessPlayers = io.type({
  white: chessPlayerWhite,
  black: chessPlayerBlack,
});
export type ChessPlayers = io.TypeOf<typeof chessPlayers>;

export const chessColorWhite = io.keyof({ white: null });
export type ChessColorWhite = io.TypeOf<typeof chessColorWhite>;
export const chessColorBlack = io.keyof({ black: null });
export type ChessColorBlack = io.TypeOf<typeof chessColorBlack>;

export const chessGameColor = io.union([chessColorWhite, chessColorBlack]);
export type ChessGameColor = io.TypeOf<typeof chessGameColor>;

export const chessPreferredColorOption = io.union([
  chessColorBlack,
  chessColorWhite,
  io.keyof({ random: null }),
]);
export type ChessPrefferedColorOption = io.TypeOf<typeof chessPreferredColorOption>;

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

export const chessGameDrawOffer = io.type({
  type: io.literal('draw'),
  content: io.type({
    by: chessGameColor,
  }),
});
export type ChessGameDrawOffer = io.TypeOf<typeof chessGameDrawOffer>;

export const chessGameRematchOffer = io.type({
  type: io.literal('rematch'),
  content: io.type({
    by: chessGameColor,
  }),
});
export type ChessGameRematchOffer = io.TypeOf<typeof chessGameRematchOffer>;

export const chessGameOffer = io.union([chessGameDrawOffer, chessGameRematchOffer]);
export type ChessGameOffer = io.TypeOf<typeof chessGameOffer>;

export const capturedPiecesRecord = io.type({
  white: io.record(capturableChessPieceType, io.number),
  black: io.record(capturableChessPieceType, io.number),
});
export type CapturedPiecesRecord = io.TypeOf<typeof capturedPiecesRecord>;

export const chessGameStateWaitingForOpponent = io.type({
  state: io.literal('waitingForOpponent'),
  timeLimit: chessGameTimeLimit,
  players: io.tuple([chessPlayer]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,

  captured: io.undefined,
  /* @deprecated */
  lastMoved: io.undefined,
});
export type ChessGameStateWaitingForOpponent = io.TypeOf<typeof chessGameStateWaitingForOpponent>;

export const chessGameStatePending = io.type({
  state: io.literal('pending'),
  timeLimit: chessGameTimeLimit,
  players: io.tuple([chessPlayer, chessPlayer]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,
  captured: io.undefined,
  /* @deprecated */
  lastMoved: io.undefined,
});
export type ChessGameStatePending = io.TypeOf<typeof chessGameStatePending>;

export const chessGameStateNeverStarted = io.type({
  state: io.literal('neverStarted'),
  timeLimit: chessGameTimeLimit,
  players: io.union([io.tuple([chessPlayer, chessPlayer]), io.tuple([chessPlayer])]),
  timeLeft: io.type({
    white: io.number,
    black: io.number,
  }),
  pgn: io.undefined,
  winner: io.undefined,
  lastMoveBy: io.undefined,
  lastMoveAt: io.undefined,
  captured: io.undefined,
  /* @deprecated */
  lastMoved: io.undefined,
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
  pgn: chessGameStatePgn,
  winner: io.undefined,

  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,
  captured: capturedPiecesRecord,
  /* @deprecated */
  lastMoved: io.keyof(chessPlayers.props),
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
  pgn: chessGameStatePgn,
  winner: io.union([chessGameColor, io.literal('1/2')]),

  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,
  captured: capturedPiecesRecord,
  /* @deprecated */
  lastMoved: io.keyof(chessPlayers.props),
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
  pgn: chessGameStatePgn,
  winner: io.union([chessGameColor, io.literal('1/2')]),

  lastMoveBy: io.keyof(chessPlayers.props),
  lastMoveAt: isoDateTimeFromIsoString,
  captured: capturedPiecesRecord,
  /* @deprecated */
  lastMoved: io.keyof(chessPlayers.props),
});
export type ChessGameStateStopped = io.TypeOf<typeof chessGameStateStopped>;

export const chessGameState = io.union([
  // TODO: I'm thinking this could be deprecated
  //  since a game without opponent is not a game yet
  //  and could be treated as undefined
  chessGameStateWaitingForOpponent,
  chessGameStatePending,
  chessGameStateStarted,
  chessGameStateFinished,
  chessGameStateNeverStarted,
  chessGameStateStopped,
]);
export type ChessGameState = io.TypeOf<typeof chessGameState>;
