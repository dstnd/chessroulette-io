import * as io from 'io-ts';
import { CreateRoomResponse } from './room';
export declare const gameInitConfig: io.TypeC<{
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    preferredColor: io.UnionC<[io.KeyofC<{
        black: null;
    }>, io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        random: null;
    }>]>;
}>;
export declare type GameInitConfig = io.TypeOf<typeof gameInitConfig>;
export declare const createChallengeRequest: io.TypeC<{
    peerId: io.StringC;
    game: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
}>;
export declare type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;
export declare const createChallengeResponse: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            avatarId: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<false>;
            email: io.StringC;
        }>, io.TypeC<{
            externalAccountType: io.LiteralC<"lichess">;
            externalAccountId: io.StringC;
            externalAccountInfo: io.TypeC<{
                email: io.StringC;
                id: io.StringC;
                username: io.StringC;
                perfs: io.TypeC<{
                    blitz: io.TypeC<{
                        games: io.NumberC;
                        rating: io.NumberC;
                    }>;
                    bullet: io.TypeC<{
                        games: io.NumberC;
                        rating: io.NumberC;
                    }>;
                    classical: io.TypeC<{
                        games: io.NumberC;
                        rating: io.NumberC;
                    }>;
                    correspondence: io.TypeC<{
                        games: io.NumberC;
                        rating: io.NumberC;
                    }>;
                    puzzle: io.TypeC<{
                        games: io.NumberC;
                        rating: io.NumberC;
                    }>;
                    rapid: io.TypeC<{
                        games: io.NumberC;
                        rating: io.NumberC;
                    }>;
                }>;
            }>;
        }>]>, io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            avatarId: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<true>;
        }>]>]>;
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.TypeC<{
        type: io.LiteralC<"play">;
        game: io.UnionC<[io.UnionC<[io.TypeC<{
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>]>, io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>]>, io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
                black: io.TypeC<{
                    color: io.LiteralC<"black">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
            }>;
            lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
            lastMoved: io.KeyofC<{
                white: io.TypeC<{
                    color: io.LiteralC<"white">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
                black: io.TypeC<{
                    color: io.LiteralC<"black">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>]>, io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
                black: io.TypeC<{
                    color: io.LiteralC<"black">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
            }>;
            lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
            lastMoved: io.KeyofC<{
                white: io.TypeC<{
                    color: io.LiteralC<"white">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
                black: io.TypeC<{
                    color: io.LiteralC<"black">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>]>, io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>]>]>, io.TupleC<[io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>]>, io.UnionC<[io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>, io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
                black: io.TypeC<{
                    color: io.LiteralC<"black">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
            }>;
            lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
            lastMoved: io.KeyofC<{
                white: io.TypeC<{
                    color: io.LiteralC<"white">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
                black: io.TypeC<{
                    color: io.LiteralC<"black">;
                    user: io.TypeC<{
                        id: io.StringC;
                        name: io.StringC;
                        avatarId: io.StringC;
                    }>;
                }>;
            }>;
        }>]>, io.UndefinedC]>;
        gameOffer: io.UnionC<[io.TypeC<{
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
        }>, io.UndefinedC]>;
    }>]>;
    game: io.UnionC<[io.TypeC<{
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
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
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
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
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
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
        }>;
        lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        lastMoved: io.KeyofC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
        }>;
        lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        lastMoved: io.KeyofC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
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
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>]>]>, io.TupleC<[io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
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
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
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
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
        }>;
        lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        lastMoved: io.KeyofC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>;
            }>;
        }>;
    }>]>;
    gameOffer: io.UnionC<[io.TypeC<{
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
    }>, io.UndefinedC]>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>;
export declare type CreateChallengeResponse = CreateRoomResponse;
export declare const iceServerRecord: io.TypeC<{
    url: io.StringC;
    urls: io.StringC;
    credential: io.UnionC<[io.StringC, io.UndefinedC]>;
    username: io.UnionC<[io.StringC, io.UndefinedC]>;
}>;
export declare type IceServerRecord = io.TypeOf<typeof iceServerRecord>;
export declare const iceServersResponse: io.ArrayC<io.TypeC<{
    url: io.StringC;
    urls: io.StringC;
    credential: io.UnionC<[io.StringC, io.UndefinedC]>;
    username: io.UnionC<[io.StringC, io.UndefinedC]>;
}>>;
export declare type IceServersResponse = io.TypeOf<typeof iceServersResponse>;
