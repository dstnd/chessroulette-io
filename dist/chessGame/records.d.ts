import * as io from 'io-ts';
export declare const chessPlayerWhite: io.TypeC<{
    color: io.LiteralC<"white">;
    user: io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>;
}>;
export declare type ChessPlayerWhite = io.TypeOf<typeof chessPlayerWhite>;
export declare const chessPlayerBlack: io.TypeC<{
    color: io.LiteralC<"black">;
    user: io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>;
}>;
export declare type ChessPlayerBlack = io.TypeOf<typeof chessPlayerBlack>;
export declare const chessPlayer: io.UnionC<[io.TypeC<{
    color: io.LiteralC<"black">;
    user: io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>;
}>, io.TypeC<{
    color: io.LiteralC<"white">;
    user: io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>;
}>]>;
export declare type ChessPlayer = io.TypeOf<typeof chessPlayer>;
export declare const chessPlayers: io.TypeC<{
    white: io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>;
    black: io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type ChessPlayers = io.TypeOf<typeof chessPlayers>;
export declare const chessColorWhite: io.KeyofC<{
    white: null;
}>;
export declare type ChessColorWhite = io.TypeOf<typeof chessColorWhite>;
export declare const chessColorBlack: io.KeyofC<{
    black: null;
}>;
export declare type ChessColorBlack = io.TypeOf<typeof chessColorBlack>;
export declare const chessGameColor: io.UnionC<[io.KeyofC<{
    white: null;
}>, io.KeyofC<{
    black: null;
}>]>;
export declare type ChessGameColor = io.TypeOf<typeof chessGameColor>;
export declare const chessPreferredColorOption: io.UnionC<[io.KeyofC<{
    black: null;
}>, io.KeyofC<{
    white: null;
}>, io.KeyofC<{
    random: null;
}>]>;
export declare type ChessPrefferedColorOption = io.TypeOf<typeof chessPreferredColorOption>;
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
export declare const chessPlayersBySide: io.UnionC<[io.TypeC<{
    home: io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>;
    away: io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>, io.TypeC<{
    home: io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>;
    away: io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>]>;
export declare type ChessPlayersBySide = io.TypeOf<typeof chessPlayersBySide>;
export declare const partialChessPlayersBySide: io.UnionC<[io.TypeC<{
    home: io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>;
    away: io.UndefinedC;
}>, io.TypeC<{
    home: io.UndefinedC;
    away: io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>;
}>]>;
export declare type PartialChessPlayersBySide = io.TypeOf<typeof partialChessPlayersBySide>;
export declare const chessGameDrawOffer: io.TypeC<{
    type: io.LiteralC<"draw">;
    content: io.TypeC<{
        by: io.UnionC<[io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            black: null;
        }>]>;
    }>;
}>;
export declare type ChessGameDrawOffer = io.TypeOf<typeof chessGameDrawOffer>;
export declare const chessGameRematchOffer: io.TypeC<{
    type: io.LiteralC<"rematch">;
    content: io.TypeC<{
        by: io.UnionC<[io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            black: null;
        }>]>;
    }>;
}>;
export declare type ChessGameRematchOffer = io.TypeOf<typeof chessGameRematchOffer>;
export declare const chessGameOffer: io.UnionC<[io.TypeC<{
    type: io.LiteralC<"draw">;
    content: io.TypeC<{
        by: io.UnionC<[io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            black: null;
        }>]>;
    }>;
}>, io.TypeC<{
    type: io.LiteralC<"rematch">;
    content: io.TypeC<{
        by: io.UnionC<[io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            black: null;
        }>]>;
    }>;
}>]>;
export declare type ChessGameOffer = io.TypeOf<typeof chessGameOffer>;
export declare const capturedPiecesRecord: io.TypeC<{
    white: io.RecordC<io.KeyofC<{
        p: undefined;
        n: undefined;
        b: undefined;
        r: undefined;
        q: undefined;
    }>, io.NumberC>;
    black: io.RecordC<io.KeyofC<{
        p: undefined;
        n: undefined;
        b: undefined;
        r: undefined;
        q: undefined;
    }>, io.NumberC>;
}>;
export declare type CapturedPiecesRecord = io.TypeOf<typeof capturedPiecesRecord>;
export declare const chessGameStateWaitingForOpponent: io.TypeC<{
    state: io.LiteralC<"waitingForOpponent">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    captured: io.UndefinedC;
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
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    captured: io.UndefinedC;
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
    players: io.UnionC<[io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>, io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    captured: io.UndefinedC;
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
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UndefinedC;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    captured: io.TypeC<{
        white: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
        black: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
    }>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
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
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UnionC<[io.UnionC<[io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        black: null;
    }>]>, io.LiteralC<"1/2">]>;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    captured: io.TypeC<{
        white: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
        black: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
    }>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
}>;
export declare type ChessGameStateFinished = io.TypeOf<typeof chessGameStateFinished>;
export declare const chessGameStateStopped: io.TypeC<{
    state: io.LiteralC<"stopped">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UnionC<[io.UnionC<[io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        black: null;
    }>]>, io.LiteralC<"1/2">]>;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    captured: io.TypeC<{
        white: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
        black: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
    }>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
}>;
export declare type ChessGameStateStopped = io.TypeOf<typeof chessGameStateStopped>;
export declare const chessGameState: io.UnionC<[io.TypeC<{
    state: io.LiteralC<"waitingForOpponent">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    captured: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>, io.TypeC<{
    state: io.LiteralC<"pending">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    captured: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>, io.TypeC<{
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    state: io.LiteralC<"started">;
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UndefinedC;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    captured: io.TypeC<{
        white: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
        black: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
    }>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
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
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UnionC<[io.UnionC<[io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        black: null;
    }>]>, io.LiteralC<"1/2">]>;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    captured: io.TypeC<{
        white: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
        black: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
    }>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
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
    players: io.UnionC<[io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>, io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    captured: io.UndefinedC;
    lastMoved: io.UndefinedC;
}>, io.TypeC<{
    state: io.LiteralC<"stopped">;
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    players: io.TupleC<[io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>, io.UnionC<[io.TypeC<{
        color: io.LiteralC<"black">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>, io.TypeC<{
        color: io.LiteralC<"white">;
        user: io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>;
    }>]>]>;
    timeLeft: io.TypeC<{
        white: io.NumberC;
        black: io.NumberC;
    }>;
    pgn: io.StringC;
    winner: io.UnionC<[io.UnionC<[io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        black: null;
    }>]>, io.LiteralC<"1/2">]>;
    lastMoveBy: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
    lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    captured: io.TypeC<{
        white: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
        black: io.RecordC<io.KeyofC<{
            p: undefined;
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>, io.NumberC>;
    }>;
    lastMoved: io.KeyofC<{
        white: io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
        black: io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>;
    }>;
}>]>;
export declare type ChessGameState = io.TypeOf<typeof chessGameState>;
