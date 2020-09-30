import * as io from 'io-ts';
export declare const userIdentificationPayload: io.TypeC<{
    kind: io.LiteralC<"userIdentification">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>;
export declare type UserIdentificationPayload = io.TypeOf<typeof userIdentificationPayload>;
export declare const statsReaderIdentificationPayload: io.TypeC<{
    kind: io.LiteralC<"statsReaderIdentificationPayload">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>;
export declare type StatsReaderIdentificationPayload = io.TypeOf<typeof statsReaderIdentificationPayload>;
export declare const pingPayload: io.TypeC<{
    kind: io.LiteralC<"ping">;
    content: io.StringC;
}>;
export declare type PingPayload = io.TypeOf<typeof pingPayload>;
export declare const connectionOpenedPayload: io.TypeC<{
    kind: io.LiteralC<"connectionOpened">;
    content: io.TypeC<{
        me: io.IntersectionC<[io.TypeC<{
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
        }>]>]>;
    }>;
}>;
export declare type ConnectionOpenedPayload = io.TypeOf<typeof connectionOpenedPayload>;
export declare const whoAmIRequestPayload: io.TypeC<{
    kind: io.LiteralC<"whoami">;
    content: io.UnknownC;
}>;
export declare type WhoAmIRequestPayload = io.TypeOf<typeof whoAmIRequestPayload>;
export declare const genericFailureResponsePayload: io.TypeC<{
    kind: io.LiteralC<"genericRequestFailure">;
    content: io.UnknownC;
}>;
export declare type GenericFailureResponsePayload = io.TypeOf<typeof genericFailureResponsePayload>;
export declare const socketPayload: io.UnionC<[io.TypeC<{
    kind: io.LiteralC<"userIdentification">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"statsReaderIdentificationPayload">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"ping">;
    content: io.StringC;
}>, io.TypeC<{
    kind: io.LiteralC<"genericRequestFailure">;
    content: io.UnknownC;
}>, io.TypeC<{
    kind: io.LiteralC<"connectionOpened">;
    content: io.TypeC<{
        me: io.IntersectionC<[io.TypeC<{
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
        }>]>]>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"myStats">;
    content: io.IntersectionC<[io.TypeC<{
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
    }>]>]>;
}>, io.TypeC<{
    kind: io.LiteralC<"roomStats">;
    content: io.IntersectionC<[io.TypeC<{
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
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"public">;
        code: io.NullC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
        code: io.StringC;
    }>]>]>;
}>, io.TypeC<{
    kind: io.LiteralC<"peerJoinedRoom">;
    content: io.TypeC<{
        roomId: io.StringC;
        peerId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomRequest">;
    content: io.TypeC<{
        roomId: io.StringC;
        code: io.UnionC<[io.StringC, io.UndefinedC]>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomSuccess">;
    content: io.TypeC<{
        room: io.IntersectionC<[io.TypeC<{
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
        }>, io.UnionC<[io.TypeC<{
            type: io.LiteralC<"public">;
            code: io.NullC;
        }>, io.TypeC<{
            type: io.LiteralC<"private">;
            code: io.StringC;
        }>]>]>;
        me: io.IntersectionC<[io.TypeC<{
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
        }>]>]>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomFailure">;
    content: io.KeyofC<{
        WrongCode: null;
        InexistentRoom: null;
        InexistentPeer: null;
        OtherRoomAlreadyJoined: null;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"whoami">;
    content: io.UnknownC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameJoinRequest">;
    content: io.TypeC<{
        roomCredentials: io.TypeC<{
            roomId: io.StringC;
            code: io.UnionC<[io.StringC, io.UndefinedC]>;
        }>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"gameMoveRequest">;
    content: io.TypeC<{
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
        promotion: io.UnionC<[io.UndefinedC, io.KeyofC<{
            n: undefined;
            b: undefined;
            r: undefined;
            q: undefined;
        }>]>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"gameDrawOfferingRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameDrawAcceptRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameDrawDenyRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameResignationRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameAbortionRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameRematchOfferingRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameRematchAcceptRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameRematchDenyRequest">;
    content: io.UndefinedC;
}>, io.UnionC<[io.TypeC<{
    kind: io.LiteralC<"peersStats">;
    content: io.ArrayC<io.IntersectionC<[io.TypeC<{
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
}>, io.TypeC<{
    kind: io.LiteralC<"roomsStats">;
    content: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"public">;
        code: io.NullC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
        code: io.StringC;
    }>]>]>, io.TypeC<{
        peersCount: io.NumberC;
    }>]>>;
}>]>]>;
export declare type SocketPayload = io.TypeOf<typeof socketPayload>;
