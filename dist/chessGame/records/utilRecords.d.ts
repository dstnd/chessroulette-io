import * as io from 'io-ts';
/**
 * - "p" for Pawn
 * - "n" for Knight
 * - "b" for Bishop
 * - "r" for Rook
 * - "q" for Queen
 * - "k" for King
 */
export declare const chessPieceType: io.KeyofC<{
    p: undefined;
    n: undefined;
    b: undefined;
    r: undefined;
    q: undefined;
    k: undefined;
}>;
export declare type ChessPieceType = io.TypeOf<typeof chessPieceType>;
export declare const promotionalChessPieceType: io.KeyofC<{
    n: undefined;
    b: undefined;
    r: undefined;
    q: undefined;
}>;
export declare type PromotionalChessPieceType = io.TypeOf<typeof promotionalChessPieceType>;
export declare const capturableChessPieceType: io.KeyofC<{
    p: undefined;
    n: undefined;
    b: undefined;
    r: undefined;
    q: undefined;
}>;
export declare type CapturableChessPieceType = io.TypeOf<typeof capturableChessPieceType>;
export declare const chessSquare: io.KeyofC<{
    a8: undefined;
    b8: undefined;
    c8: undefined;
    d8: undefined;
    e8: undefined;
    f8: undefined;
    g8: undefined;
    h8: undefined;
    a7: undefined;
    b7: undefined;
    c7: undefined;
    d7: undefined;
    e7: undefined;
    f7: undefined;
    g7: undefined;
    h7: undefined;
    a6: undefined;
    b6: undefined;
    c6: undefined;
    d6: undefined;
    e6: undefined;
    f6: undefined;
    g6: undefined;
    h6: undefined;
    a5: undefined;
    b5: undefined;
    c5: undefined;
    d5: undefined;
    e5: undefined;
    f5: undefined;
    g5: undefined;
    h5: undefined;
    a4: undefined;
    b4: undefined;
    c4: undefined;
    d4: undefined;
    e4: undefined;
    f4: undefined;
    g4: undefined;
    h4: undefined;
    a3: undefined;
    b3: undefined;
    c3: undefined;
    d3: undefined;
    e3: undefined;
    f3: undefined;
    g3: undefined;
    h3: undefined;
    a2: undefined;
    b2: undefined;
    c2: undefined;
    d2: undefined;
    e2: undefined;
    f2: undefined;
    g2: undefined;
    h2: undefined;
    a1: undefined;
    b1: undefined;
    c1: undefined;
    d1: undefined;
    e1: undefined;
    f1: undefined;
    g1: undefined;
    h1: undefined;
}>;
export declare type ChessSquare = io.TypeOf<typeof chessSquare>;
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
    bullet30: null;
    bullet1: null;
    blitz2: null;
    blitz3: null;
    blitz5: null;
    rapid10: null;
    rapid15: null;
    rapid20: null;
    rapid30: null;
    rapid45: null;
    rapid60: null;
    untimed: null;
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
export declare const activePiecesRecord: io.TypeC<{
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
export declare type ActivePiecesRecord = io.TypeOf<typeof activePiecesRecord>;
export declare const chessMove: io.IntersectionC<[io.TypeC<{
    from: io.KeyofC<{
        a8: undefined;
        b8: undefined;
        c8: undefined;
        d8: undefined;
        e8: undefined;
        f8: undefined;
        g8: undefined;
        h8: undefined;
        a7: undefined;
        b7: undefined;
        c7: undefined;
        d7: undefined;
        e7: undefined;
        f7: undefined;
        g7: undefined;
        h7: undefined;
        a6: undefined;
        b6: undefined;
        c6: undefined;
        d6: undefined;
        e6: undefined;
        f6: undefined;
        g6: undefined;
        h6: undefined;
        a5: undefined;
        b5: undefined;
        c5: undefined;
        d5: undefined;
        e5: undefined;
        f5: undefined;
        g5: undefined;
        h5: undefined;
        a4: undefined;
        b4: undefined;
        c4: undefined;
        d4: undefined;
        e4: undefined;
        f4: undefined;
        g4: undefined;
        h4: undefined;
        a3: undefined;
        b3: undefined;
        c3: undefined;
        d3: undefined;
        e3: undefined;
        f3: undefined;
        g3: undefined;
        h3: undefined;
        a2: undefined;
        b2: undefined;
        c2: undefined;
        d2: undefined;
        e2: undefined;
        f2: undefined;
        g2: undefined;
        h2: undefined;
        a1: undefined;
        b1: undefined;
        c1: undefined;
        d1: undefined;
        e1: undefined;
        f1: undefined;
        g1: undefined;
        h1: undefined;
    }>;
    to: io.KeyofC<{
        a8: undefined;
        b8: undefined;
        c8: undefined;
        d8: undefined;
        e8: undefined;
        f8: undefined;
        g8: undefined;
        h8: undefined;
        a7: undefined;
        b7: undefined;
        c7: undefined;
        d7: undefined;
        e7: undefined;
        f7: undefined;
        g7: undefined;
        h7: undefined;
        a6: undefined;
        b6: undefined;
        c6: undefined;
        d6: undefined;
        e6: undefined;
        f6: undefined;
        g6: undefined;
        h6: undefined;
        a5: undefined;
        b5: undefined;
        c5: undefined;
        d5: undefined;
        e5: undefined;
        f5: undefined;
        g5: undefined;
        h5: undefined;
        a4: undefined;
        b4: undefined;
        c4: undefined;
        d4: undefined;
        e4: undefined;
        f4: undefined;
        g4: undefined;
        h4: undefined;
        a3: undefined;
        b3: undefined;
        c3: undefined;
        d3: undefined;
        e3: undefined;
        f3: undefined;
        g3: undefined;
        h3: undefined;
        a2: undefined;
        b2: undefined;
        c2: undefined;
        d2: undefined;
        e2: undefined;
        f2: undefined;
        g2: undefined;
        h2: undefined;
        a1: undefined;
        b1: undefined;
        c1: undefined;
        d1: undefined;
        e1: undefined;
        f1: undefined;
        g1: undefined;
        h1: undefined;
    }>;
}>, io.PartialC<{
    promotion: io.KeyofC<{
        n: undefined;
        b: undefined;
        r: undefined;
        q: undefined;
    }>;
}>]>;
export declare type ChessMove = io.TypeOf<typeof chessMove>;
export declare const chessHistoryMove: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    from: io.KeyofC<{
        a8: undefined;
        b8: undefined;
        c8: undefined;
        d8: undefined;
        e8: undefined;
        f8: undefined;
        g8: undefined;
        h8: undefined;
        a7: undefined;
        b7: undefined;
        c7: undefined;
        d7: undefined;
        e7: undefined;
        f7: undefined;
        g7: undefined;
        h7: undefined;
        a6: undefined;
        b6: undefined;
        c6: undefined;
        d6: undefined;
        e6: undefined;
        f6: undefined;
        g6: undefined;
        h6: undefined;
        a5: undefined;
        b5: undefined;
        c5: undefined;
        d5: undefined;
        e5: undefined;
        f5: undefined;
        g5: undefined;
        h5: undefined;
        a4: undefined;
        b4: undefined;
        c4: undefined;
        d4: undefined;
        e4: undefined;
        f4: undefined;
        g4: undefined;
        h4: undefined;
        a3: undefined;
        b3: undefined;
        c3: undefined;
        d3: undefined;
        e3: undefined;
        f3: undefined;
        g3: undefined;
        h3: undefined;
        a2: undefined;
        b2: undefined;
        c2: undefined;
        d2: undefined;
        e2: undefined;
        f2: undefined;
        g2: undefined;
        h2: undefined;
        a1: undefined;
        b1: undefined;
        c1: undefined;
        d1: undefined;
        e1: undefined;
        f1: undefined;
        g1: undefined;
        h1: undefined;
    }>;
    to: io.KeyofC<{
        a8: undefined;
        b8: undefined;
        c8: undefined;
        d8: undefined;
        e8: undefined;
        f8: undefined;
        g8: undefined;
        h8: undefined;
        a7: undefined;
        b7: undefined;
        c7: undefined;
        d7: undefined;
        e7: undefined;
        f7: undefined;
        g7: undefined;
        h7: undefined;
        a6: undefined;
        b6: undefined;
        c6: undefined;
        d6: undefined;
        e6: undefined;
        f6: undefined;
        g6: undefined;
        h6: undefined;
        a5: undefined;
        b5: undefined;
        c5: undefined;
        d5: undefined;
        e5: undefined;
        f5: undefined;
        g5: undefined;
        h5: undefined;
        a4: undefined;
        b4: undefined;
        c4: undefined;
        d4: undefined;
        e4: undefined;
        f4: undefined;
        g4: undefined;
        h4: undefined;
        a3: undefined;
        b3: undefined;
        c3: undefined;
        d3: undefined;
        e3: undefined;
        f3: undefined;
        g3: undefined;
        h3: undefined;
        a2: undefined;
        b2: undefined;
        c2: undefined;
        d2: undefined;
        e2: undefined;
        f2: undefined;
        g2: undefined;
        h2: undefined;
        a1: undefined;
        b1: undefined;
        c1: undefined;
        d1: undefined;
        e1: undefined;
        f1: undefined;
        g1: undefined;
        h1: undefined;
    }>;
}>, io.PartialC<{
    promotion: io.KeyofC<{
        n: undefined;
        b: undefined;
        r: undefined;
        q: undefined;
    }>;
}>]>, io.TypeC<{
    san: io.StringC;
    color: io.UnionC<[io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        black: null;
    }>]>;
    clock: io.NumberC;
}>]>;
export declare type ChessHistoryMove = io.TypeOf<typeof chessHistoryMove>;
export declare const chessHistory: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    from: io.KeyofC<{
        a8: undefined;
        b8: undefined;
        c8: undefined;
        d8: undefined;
        e8: undefined;
        f8: undefined;
        g8: undefined;
        h8: undefined;
        a7: undefined;
        b7: undefined;
        c7: undefined;
        d7: undefined;
        e7: undefined;
        f7: undefined;
        g7: undefined;
        h7: undefined;
        a6: undefined;
        b6: undefined;
        c6: undefined;
        d6: undefined;
        e6: undefined;
        f6: undefined;
        g6: undefined;
        h6: undefined;
        a5: undefined;
        b5: undefined;
        c5: undefined;
        d5: undefined;
        e5: undefined;
        f5: undefined;
        g5: undefined;
        h5: undefined;
        a4: undefined;
        b4: undefined;
        c4: undefined;
        d4: undefined;
        e4: undefined;
        f4: undefined;
        g4: undefined;
        h4: undefined;
        a3: undefined;
        b3: undefined;
        c3: undefined;
        d3: undefined;
        e3: undefined;
        f3: undefined;
        g3: undefined;
        h3: undefined;
        a2: undefined;
        b2: undefined;
        c2: undefined;
        d2: undefined;
        e2: undefined;
        f2: undefined;
        g2: undefined;
        h2: undefined;
        a1: undefined;
        b1: undefined;
        c1: undefined;
        d1: undefined;
        e1: undefined;
        f1: undefined;
        g1: undefined;
        h1: undefined;
    }>;
    to: io.KeyofC<{
        a8: undefined;
        b8: undefined;
        c8: undefined;
        d8: undefined;
        e8: undefined;
        f8: undefined;
        g8: undefined;
        h8: undefined;
        a7: undefined;
        b7: undefined;
        c7: undefined;
        d7: undefined;
        e7: undefined;
        f7: undefined;
        g7: undefined;
        h7: undefined;
        a6: undefined;
        b6: undefined;
        c6: undefined;
        d6: undefined;
        e6: undefined;
        f6: undefined;
        g6: undefined;
        h6: undefined;
        a5: undefined;
        b5: undefined;
        c5: undefined;
        d5: undefined;
        e5: undefined;
        f5: undefined;
        g5: undefined;
        h5: undefined;
        a4: undefined;
        b4: undefined;
        c4: undefined;
        d4: undefined;
        e4: undefined;
        f4: undefined;
        g4: undefined;
        h4: undefined;
        a3: undefined;
        b3: undefined;
        c3: undefined;
        d3: undefined;
        e3: undefined;
        f3: undefined;
        g3: undefined;
        h3: undefined;
        a2: undefined;
        b2: undefined;
        c2: undefined;
        d2: undefined;
        e2: undefined;
        f2: undefined;
        g2: undefined;
        h2: undefined;
        a1: undefined;
        b1: undefined;
        c1: undefined;
        d1: undefined;
        e1: undefined;
        f1: undefined;
        g1: undefined;
        h1: undefined;
    }>;
}>, io.PartialC<{
    promotion: io.KeyofC<{
        n: undefined;
        b: undefined;
        r: undefined;
        q: undefined;
    }>;
}>]>, io.TypeC<{
    san: io.StringC;
    color: io.UnionC<[io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        black: null;
    }>]>;
    clock: io.NumberC;
}>]>>;
export declare type ChessHistory = io.TypeOf<typeof chessHistory>;
