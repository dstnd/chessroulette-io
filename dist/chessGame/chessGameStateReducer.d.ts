import { ChessGameStatePgn, ChessGameColor, ChessGameStatePending, ChessGameStateStarted, ChessGameStateFinished, ChessGameStateNeverStarted, ChessGameTimeLimit, ChessGameStateStopped, ChessGameState } from './records';
import { ISODateTime } from 'io-ts-isodatetime';
import { ChessMove } from './boardRecords';
import { UserInfoRecord } from '../records/userRecord';
export declare const prepareGameAction: ({ players, timeLimit, preferredColor, pgn, }: {
    players: [UserInfoRecord, UserInfoRecord];
    timeLimit: ChessGameTimeLimit;
    preferredColor?: "white" | "black" | "random" | undefined;
    pgn?: string | undefined;
}) => ChessGameStatePending | ChessGameStateStarted | ChessGameStateFinished;
export declare const actions: {
    prepareGame: ({ players, timeLimit, preferredColor, pgn, }: {
        players: [UserInfoRecord, UserInfoRecord];
        timeLimit: ChessGameTimeLimit;
        preferredColor?: "white" | "black" | "random" | undefined;
        pgn?: string | undefined;
    }) => ChessGameStatePending | ChessGameStateStarted | ChessGameStateFinished;
    move: (prev: ChessGameStatePending | ChessGameStateStarted, next: {
        move: ChessMove;
        movedAt: ISODateTime;
    } | {
        pgn: ChessGameStatePgn;
        movedAt: ISODateTime;
    }) => ChessGameStateStarted | ChessGameStateFinished;
    resign: (prev: ChessGameStateStarted, resigningColor: ChessGameColor) => ChessGameStateStopped;
    draw: (prev: ChessGameStateStarted) => ChessGameStateStopped;
    abort: (prev: ChessGameStatePending) => ChessGameStateNeverStarted;
    statusCheck: (prev: ChessGameState, at: Date) => ChessGameState;
    timerFinished: (prev: ChessGameStateStarted) => ChessGameStateFinished;
};
