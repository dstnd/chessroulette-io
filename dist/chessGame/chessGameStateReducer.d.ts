import { ChessGameStatePgn, ChessGameColor, ChessGameStatePending, ChessGameStateStarted, ChessGameStateFinished, ChessGameStateNeverStarted, ChessGameTimeLimit, ChessGameStateWaitingForOpponent } from "./records";
import { ChessMove } from "./boardRecords";
import { UserInfoRecord } from "../records/userRecord";
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
        timeLeft: undefined;
        pgn: undefined;
        winner: undefined;
        lastMoveBy: undefined;
        lastMoveAt: undefined;
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
        lastMoved: "white" | "black";
    };
    move: (prev: ChessGameStatePending | ChessGameStateStarted, next: {
        move: ChessMove;
    } | {
        pgn: ChessGameStatePgn;
    }) => ChessGameStateStarted | ChessGameStateFinished;
    timerFinished: (prev: ChessGameStateStarted | ChessGameStatePending, next?: {
        loser: ChessGameColor;
    } | undefined) => ChessGameStateNeverStarted | ChessGameStateFinished;
};
