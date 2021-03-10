import * as io from 'io-ts';
import { ChessGameState } from '../chessGame';
export declare const gameRecord: io.IntersectionC<[io.UnionC<[io.TypeC<{
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
    startedAt: io.UndefinedC;
    lastActivityAt: io.UndefinedC;
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"neverStarted">;
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
    startedAt: io.UndefinedC;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>, io.TypeC<{
    id: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>;
export declare type GameRecord = io.TypeOf<typeof gameRecord>;
export declare type GameRecordFromGameState<GameState extends ChessGameState> = GameRecord & GameState;
export declare const gameRecordWithoutPlayerInfo: io.IntersectionC<[io.IntersectionC<[io.UnionC<[io.TypeC<{
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
    startedAt: io.UndefinedC;
    lastActivityAt: io.UndefinedC;
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
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
    startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>, io.TypeC<{
    state: io.LiteralC<"neverStarted">;
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
    startedAt: io.UndefinedC;
    lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
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
