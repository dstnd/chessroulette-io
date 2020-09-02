import { ChessGameStatePgn, ChessGameColor, ChessGameStatePending, ChessGameStateStarted, ChessGameStateFinished, ChessGameStateNeverStarted, ChessGameTimeLimit } from './records';
import { UserInfoRecord } from 'src/records';
export declare type GamePlayer = UserInfoRecord;
export declare type GamePlayersBySide = {
    home: GamePlayer;
    away: GamePlayer;
};
export declare const prepareGameAction: ({ playersBySide, timeLimit, homeColor, pgn, }: {
    playersBySide: GamePlayersBySide;
    timeLimit?: "bullet" | "untimed" | "blitz" | "rapid" | undefined;
    homeColor?: "white" | "black" | "random" | undefined;
    pgn?: string | undefined;
}) => ChessGameStatePending | ChessGameStateStarted | ChessGameStateFinished;
export declare const actions: {
    prepareGame: ({ playersBySide, timeLimit, homeColor, pgn, }: {
        playersBySide: GamePlayersBySide;
        timeLimit?: "bullet" | "untimed" | "blitz" | "rapid" | undefined;
        homeColor?: "white" | "black" | "random" | undefined;
        pgn?: string | undefined;
    }) => ChessGameStatePending | ChessGameStateStarted | ChessGameStateFinished;
    move: (prev: ChessGameStatePending | ChessGameStateStarted, next: {
        pgn: ChessGameStatePgn;
    }) => ChessGameStateStarted | ChessGameStateFinished;
    timerFinished: (prev: ChessGameStateStarted | ChessGameStatePending, next?: {
        loser: ChessGameColor;
    } | undefined) => ChessGameStateNeverStarted | ChessGameStateFinished;
};
