import * as io from 'io-ts';
import { ChessGameState } from '../chessGame';
export declare const gameRecord: io.IntersectionC<[io.UnionC<[io.TypeC<{
    state: io.LiteralC<"pending">;
    timeLimit: io.KeyofC<{
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
    history: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    startedAt: io.UndefinedC;
    lastActivityAt: io.UndefinedC;
}>, io.TypeC<{
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"finished">;
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"neverStarted">;
    timeLimit: io.KeyofC<{
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
    history: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    startedAt: io.UndefinedC;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"stopped">;
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecord = io.TypeOf<typeof gameRecord>;
export declare const gameRecordFromGameState: <TCodec extends io.Mixed>(gameStateCodec: TCodec) => io.IntersectionC<[TCodec, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecordFromGameState<GameState extends ChessGameState> = GameRecord & GameState;
export declare const gameRecordPending: io.IntersectionC<[io.TypeC<{
    state: io.LiteralC<"pending">;
    timeLimit: io.KeyofC<{
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
    history: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    startedAt: io.UndefinedC;
    lastActivityAt: io.UndefinedC;
}>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecordPending = io.TypeOf<typeof gameRecordPending>;
export declare const gameRecordStarted: io.IntersectionC<[io.TypeC<{
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecordStarted = io.TypeOf<typeof gameRecordStarted>;
export declare const gameRecordNeverStarted: io.IntersectionC<[io.TypeC<{
    state: io.LiteralC<"neverStarted">;
    timeLimit: io.KeyofC<{
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
    history: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    startedAt: io.UndefinedC;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecordNeverStarted = io.TypeOf<typeof gameRecordNeverStarted>;
export declare const gameRecordStopped: io.IntersectionC<[io.TypeC<{
    state: io.LiteralC<"stopped">;
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecordStopped = io.TypeOf<typeof gameRecordStopped>;
export declare const gameRecordFinished: io.IntersectionC<[io.TypeC<{
    state: io.LiteralC<"finished">;
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecordFinished = io.TypeOf<typeof gameRecordFinished>;
export declare const gameRecordWithoutPlayerInfo: io.IntersectionC<[io.IntersectionC<[io.UnionC<[io.TypeC<{
    state: io.LiteralC<"pending">;
    timeLimit: io.KeyofC<{
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
    history: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    startedAt: io.UndefinedC;
    lastActivityAt: io.UndefinedC;
}>, io.TypeC<{
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"finished">;
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"neverStarted">;
    timeLimit: io.KeyofC<{
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
    history: io.UndefinedC;
    winner: io.UndefinedC;
    lastMoveBy: io.UndefinedC;
    lastMoveAt: io.UndefinedC;
    startedAt: io.UndefinedC;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"stopped">;
    timeLimit: io.KeyofC<{
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
    history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>, io.TypeC<{
    players: io.StringC;
}>]>;
export declare type GameRecordWithoutPlayerInfo = io.TypeOf<typeof gameRecordWithoutPlayerInfo>;
