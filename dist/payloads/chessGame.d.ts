import * as io from 'io-ts';
export declare const chessPlayerWhite: io.TypeC<{
    color: io.LiteralC<"white">;
    id: io.StringC;
    name: io.StringC;
}>;
export declare type ChessPlayerWhite = io.TypeOf<typeof chessPlayerWhite>;
export declare const chessPlayerBlack: io.TypeC<{
    color: io.LiteralC<"black">;
    id: io.StringC;
    name: io.StringC;
}>;
export declare type ChessPlayerBlack = io.TypeOf<typeof chessPlayerBlack>;
export declare const chessPlayer: io.UnionC<[io.TypeC<{
    color: io.LiteralC<"black">;
    id: io.StringC;
    name: io.StringC;
}>, io.TypeC<{
    color: io.LiteralC<"white">;
    id: io.StringC;
    name: io.StringC;
}>]>;
export declare type ChessPlayer = io.TypeOf<typeof chessPlayer>;
export declare const chessPlayers: io.TypeC<{
    white: io.TypeC<{
        color: io.LiteralC<"white">;
        id: io.StringC;
        name: io.StringC;
    }>;
    black: io.TypeC<{
        color: io.LiteralC<"black">;
        id: io.StringC;
        name: io.StringC;
    }>;
}>;
export declare type ChessPlayers = io.TypeOf<typeof chessPlayers>;
export declare const chessColorWhite: io.LiteralC<"white">;
export declare type ChessColorWhite = io.TypeOf<typeof chessColorWhite>;
export declare const chessColorBlack: io.LiteralC<"black">;
export declare type ChessColorBlack = io.TypeOf<typeof chessColorBlack>;
export declare const chessGameColor: io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>;
export declare type ChessGameColor = io.TypeOf<typeof chessGameColor>;
export declare const chessGameStateFen: io.StringC;
export declare type ChessGameStateFen = io.TypeOf<typeof chessGameStateFen>;
export declare const chessGameStatePgn: io.StringC;
export declare type ChessGameStatePgn = io.TypeOf<typeof chessGameStatePgn>;
export declare const chessGameTimeLimit: io.KeyofC<{
    bullet: null;
    untimed: null;
    blitz: null;
    rapid: null;
}>;
export declare type ChessGameTimeLimit = io.TypeOf<typeof chessGameTimeLimit>;
export declare const chessGameStateWaitingForOpponent: io.TypeC<{
    state: io.LiteralC<"waitingForOpponent">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.UndefinedC;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>;
export declare type ChessGameStateWaitingForOpponent = io.TypeOf<typeof chessGameStateWaitingForOpponent>;
export declare const chessGameStatePending: io.TypeC<{
    state: io.LiteralC<"pending">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>;
export declare type ChessGameStatePending = io.TypeOf<typeof chessGameStatePending>;
export declare const chessGameStateNeverStarted: io.TypeC<{
    state: io.LiteralC<"neverStarted">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>;
export declare type ChessGameStateNeverStarted = io.TypeOf<typeof chessGameStateNeverStarted>;
export declare const chessGameStateStarted: io.TypeC<{
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    state: io.LiteralC<"started">;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UndefinedC;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type ChessGameStateStarted = io.TypeOf<typeof chessGameStateStarted>;
export declare const chessGameStateFinished: io.TypeC<{
    state: io.LiteralC<"finished">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UnionC<[io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>, io.LiteralC<"1/2">]>;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type ChessGameStateFinished = io.TypeOf<typeof chessGameStateFinished>;
export declare const chessGameState: io.UnionC<[io.TypeC<{
    state: io.LiteralC<"waitingForOpponent">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.UndefinedC;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>, io.TypeC<{
    state: io.LiteralC<"pending">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>, io.TypeC<{
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    state: io.LiteralC<"started">;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UndefinedC;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>, io.TypeC<{
    state: io.LiteralC<"finished">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UnionC<[io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>, io.LiteralC<"1/2">]>;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>, io.TypeC<{
    state: io.LiteralC<"neverStarted">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TypeC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            id: io.StringC;
            name: io.StringC;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>]>;
export declare type ChessGameState = io.TypeOf<typeof chessGameState>;
