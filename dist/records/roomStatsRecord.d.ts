import * as io from 'io-ts';
export declare const roomStatsRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<false>;
            email: io.StringC;
            profilePicUrl: io.UnionC<[io.StringC, io.UndefinedC]>;
        }>]>, io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<true>;
            sid: io.StringC;
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
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
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
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
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
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    peersCount: io.NumberC;
}>]>;
export declare type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
