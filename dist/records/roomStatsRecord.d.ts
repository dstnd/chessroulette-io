import * as io from 'io-ts';
export declare const roomStatsRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            avatarId: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<false>;
        }>]>, io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            avatarId: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<true>;
        }>]>]>;
    }>>;
    game: io.UnionC<[io.TypeC<{
        state: io.LiteralC<"waitingForOpponent">;
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
        }>;
        players: io.UnionC<[io.TypeC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
            black: io.UndefinedC;
        }>, io.TypeC<{
            white: io.UndefinedC;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>]>;
        playersBySide: io.UnionC<[io.TypeC<{
            home: io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>]>;
            away: io.UndefinedC;
        }>, io.TypeC<{
            home: io.UndefinedC;
            away: io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>]>;
        }>]>;
        homeColor: io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>;
        timeLeft: io.UndefinedC;
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
        playersBySide: io.UnionC<[io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>]>;
        homeColor: io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>;
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
        playersBySide: io.UnionC<[io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>]>;
        homeColor: io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>;
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
        playersBySide: io.UnionC<[io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>]>;
        homeColor: io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>;
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
        playersBySide: io.UnionC<[io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            home: io.TypeC<{
                color: io.LiteralC<"black">;
                id: io.StringC;
                name: io.StringC;
            }>;
            away: io.TypeC<{
                color: io.LiteralC<"white">;
                id: io.StringC;
                name: io.StringC;
            }>;
        }>]>;
        homeColor: io.UnionC<[io.LiteralC<"white">, io.LiteralC<"black">]>;
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
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>;
export declare type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
export declare const roomType: io.KeyofC<{
    public: null;
    private: null;
}>;
export declare type RoomType = io.TypeOf<typeof roomType>;
