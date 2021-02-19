import * as io from 'io-ts';
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
    captured: io.UndefinedC;
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
    captured: io.UndefinedC;
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
}>]>, io.TypeC<{
    id: io.StringC;
}>]>;
export declare type GameRecord = io.TypeOf<typeof gameRecord>;
