import * as io from 'io-ts';
export declare const baseCreateChallengeRequest: io.TypeC<{
    gameSpecs: io.TypeC<{
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
    userId: io.StringC;
}>;
export declare const createPublicChallengeRequest: io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
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
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        public: null;
    }>;
}>]>;
export declare type CreatePublicChallengeRequest = io.TypeOf<typeof createPublicChallengeRequest>;
export declare const createPrivateChallengeRequest: io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
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
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        private: null;
    }>;
}>]>;
export declare type CreatePrivateChallengeRequest = io.TypeOf<typeof createPrivateChallengeRequest>;
export declare const createChallengeRequest: io.UnionC<[io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
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
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        private: null;
    }>;
}>]>, io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
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
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        public: null;
    }>;
}>]>]>;
export declare type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;
export declare const createChallengeResponse: io.UnionC<[io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
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
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"public">;
}>]>, io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
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
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
}>]>]>;
export declare type CreateChallengeResponse = io.TypeOf<typeof createChallengeResponse>;
export declare const removeChallengeRequest: io.TypeC<{
    id: io.StringC;
    userId: io.StringC;
}>;
export declare const acceptChallengeRequest: io.TypeC<{
    id: io.StringC;
    userId: io.StringC;
}>;
export declare type AcceptChallengeRequest = io.TypeOf<typeof acceptChallengeRequest>;
export declare const quickPairingRequest: io.TypeC<{
    userId: io.StringC;
    gameSpecs: io.TypeC<{
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
export declare type QuickPairingRequest = io.TypeOf<typeof quickPairingRequest>;
export declare const quickPairingMatchedResponse: io.TypeC<{
    matched: io.LiteralC<true>;
    room: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        createdBy: io.StringC;
        slug: io.StringC;
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
        chatHistory: io.TypeC<{
            id: io.StringC;
            messages: io.ArrayC<io.TypeC<{
                content: io.StringC;
                fromUserId: io.StringC;
                sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
            }>>;
            usersInfo: io.RecordC<io.StringC, io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>>;
        }>;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"public">;
        code: io.NullC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
        code: io.StringC;
    }>]>]>;
}>;
export declare type QuickPairingMatchedResponse = io.TypeOf<typeof quickPairingMatchedResponse>;
export declare const quickPairingPendingResponse: io.TypeC<{
    matched: io.LiteralC<false>;
    challenge: io.UnionC<[io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
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
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"public">;
    }>]>, io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
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
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
    }>]>]>;
}>;
export declare type QuickPairingPendingResponse = io.TypeOf<typeof quickPairingPendingResponse>;
export declare const quickPairingResponse: io.UnionC<[io.TypeC<{
    matched: io.LiteralC<true>;
    room: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        createdBy: io.StringC;
        slug: io.StringC;
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
        chatHistory: io.TypeC<{
            id: io.StringC;
            messages: io.ArrayC<io.TypeC<{
                content: io.StringC;
                fromUserId: io.StringC;
                sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
            }>>;
            usersInfo: io.RecordC<io.StringC, io.TypeC<{
                id: io.StringC;
                name: io.StringC;
                avatarId: io.StringC;
            }>>;
        }>;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"public">;
        code: io.NullC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
        code: io.StringC;
    }>]>]>;
}>, io.TypeC<{
    matched: io.LiteralC<false>;
    challenge: io.UnionC<[io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
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
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"public">;
    }>]>, io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
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
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
    }>]>]>;
}>]>;
export declare type QuickPairingResponse = io.TypeOf<typeof quickPairingResponse>;
export declare const challengeAcceptedPayload: io.TypeC<{
    kind: io.LiteralC<"challengeAccepted">;
    content: io.TypeC<{
        id: io.StringC;
        userId: io.StringC;
        room: io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
            createdBy: io.StringC;
            slug: io.StringC;
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
            chatHistory: io.TypeC<{
                id: io.StringC;
                messages: io.ArrayC<io.TypeC<{
                    content: io.StringC;
                    fromUserId: io.StringC;
                    sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
                }>>;
                usersInfo: io.RecordC<io.StringC, io.TypeC<{
                    id: io.StringC;
                    name: io.StringC;
                    avatarId: io.StringC;
                }>>;
            }>;
        }>, io.UnionC<[io.TypeC<{
            type: io.LiteralC<"public">;
            code: io.NullC;
        }>, io.TypeC<{
            type: io.LiteralC<"private">;
            code: io.StringC;
        }>]>]>;
    }>;
}>;
export declare type ChallengeAcceptedPayload = io.TypeOf<typeof challengeAcceptedPayload>;
