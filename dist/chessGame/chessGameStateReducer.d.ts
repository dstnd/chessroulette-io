import { ChessGameStatePgn, ChessGameColor, ChessGameStatePending, ChessGameStateStarted, ChessGameStateFinished, ChessGameStateNeverStarted, ChessGameTimeLimit, ChessGameStateWaitingForOpponent, ChessGameStateStopped, ChessGameState } from './records';
import { ISODateTime } from 'io-ts-isodatetime';
import { ChessMove } from './boardRecords';
import { UserInfoRecord } from '../records/userRecord';
export declare const prepareGameAction: ({ players, timeLimit, preferredColor, pgn, }: {
    players: [UserInfoRecord] | [UserInfoRecord, UserInfoRecord];
    timeLimit: ChessGameTimeLimit;
    preferredColor?: "white" | "black" | "random" | undefined;
    pgn?: string | undefined;
}) => ChessGameStateWaitingForOpponent | ChessGameStatePending | ChessGameStateStarted | ChessGameStateFinished;
export declare const actions: {
    prepareGame: ({ players, timeLimit, preferredColor, pgn, }: {
        players: [UserInfoRecord] | [UserInfoRecord, UserInfoRecord];
        timeLimit: ChessGameTimeLimit;
        preferredColor?: "white" | "black" | "random" | undefined;
        pgn?: string | undefined;
    }) => ChessGameStateWaitingForOpponent | ChessGameStatePending | ChessGameStateStarted | ChessGameStateFinished;
    joinGame: (prev: ChessGameStateWaitingForOpponent, opponent: UserInfoRecord) => {
        state: "waitingForOpponent";
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
        players: [{
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: undefined;
        winner: undefined;
        lastMoveBy: undefined;
        lastMoveAt: undefined;
        captured: undefined;
        lastMoved: undefined;
    } | {
        state: "pending";
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
        players: [{
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }, {
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: undefined;
        winner: undefined;
        lastMoveBy: undefined;
        lastMoveAt: undefined;
        captured: undefined;
        lastMoved: undefined;
    } | {
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
        state: "started";
        players: [{
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }, {
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: string;
        winner: undefined;
        lastMoveBy: "white" | "black";
        lastMoveAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        captured: {
            white: {
                p: number;
                n: number;
                b: number;
                r: number;
                q: number;
            };
            black: {
                p: number;
                n: number;
                b: number;
                r: number;
                q: number;
            };
        };
        lastMoved: "white" | "black";
    } | {
        state: "finished";
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
        players: [{
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }, {
            color: "black";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        } | {
            color: "white";
            user: {
                id: string;
                name: string;
                avatarId: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: string;
        winner: "white" | "black" | "1/2";
        lastMoveBy: "white" | "black";
        lastMoveAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        captured: {
            white: {
                p: number;
                n: number;
                b: number;
                r: number;
                q: number;
            };
            black: {
                p: number;
                n: number;
                b: number;
                r: number;
                q: number;
            };
        };
        lastMoved: "white" | "black";
    };
    move: (prev: ChessGameStatePending | ChessGameStateStarted, next: {
        move: ChessMove;
        movedAt: ISODateTime;
    } | {
        pgn: ChessGameStatePgn;
        movedAt: ISODateTime;
    }) => ChessGameStateStarted | ChessGameStateFinished;
    resign: (prev: ChessGameStateStarted, resigningColor: ChessGameColor) => ChessGameStateStopped;
    draw: (prev: ChessGameStateStarted) => ChessGameStateStopped;
    abort: (prev: ChessGameStatePending | ChessGameStateWaitingForOpponent) => ChessGameStateNeverStarted;
    statusCheck: (prev: ChessGameState, at: Date) => ChessGameState;
    timerFinished: (prev: ChessGameStateStarted, next?: {
        loser: ChessGameColor;
    } | undefined) => ChessGameStateFinished;
};
