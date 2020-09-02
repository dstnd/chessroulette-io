import * as io from 'io-ts';
export declare const userIdentificationPayload: io.TypeC<{
    kind: io.LiteralC<"userIdentification">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>;
export declare type UserIdentificationPayload = io.TypeOf<typeof userIdentificationPayload>;
export declare const pingPayload: io.TypeC<{
    kind: io.LiteralC<"ping">;
    content: io.StringC;
}>;
export declare type PingPayload = io.TypeOf<typeof pingPayload>;
export declare const myStatsPayload: io.TypeC<{
    kind: io.LiteralC<"myStats">;
    content: io.TypeC<{
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
    }>;
}>;
export declare type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;
export declare const roomStatsPayload: io.TypeC<{
    kind: io.LiteralC<"roomStats">;
    content: io.IntersectionC<[io.TypeC<{
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
}>;
export declare type RoomStatsPayload = io.TypeOf<typeof roomStatsPayload>;
export declare const connectionOpenedPayload: io.TypeC<{
    kind: io.LiteralC<"connectionOpened">;
    content: io.TypeC<{
        me: io.TypeC<{
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
        }>;
    }>;
}>;
export declare type ConnectionOpenedPayload = io.TypeOf<typeof connectionOpenedPayload>;
export declare const peerJoinedRoomPayload: io.TypeC<{
    kind: io.LiteralC<"peerJoinedRoom">;
    content: io.TypeC<{
        roomId: io.StringC;
        peerId: io.StringC;
    }>;
}>;
export declare type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>;
export declare const joinRoomRequestPayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomRequest">;
    content: io.TypeC<{
        roomId: io.StringC;
        code: io.UnionC<[io.StringC, io.UndefinedC]>;
    }>;
}>;
export declare type JoinRoomRequestPayload = io.TypeOf<typeof joinRoomRequestPayload>;
export declare const joinRoomSuccessPayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomSuccess">;
    content: io.TypeC<{
        room: io.IntersectionC<[io.TypeC<{
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
        me: io.TypeC<{
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
        }>;
    }>;
}>;
export declare type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;
export declare const joinRoomFailurePayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomFailure">;
    content: io.KeyofC<{
        WrongCode: null;
        InexistentRoom: null;
        InexistentPeer: null;
    }>;
}>;
export declare type JoinRoomFailurePayload = io.TypeOf<typeof joinRoomFailurePayload>;
export declare const whoAmIRequestPayload: io.TypeC<{
    kind: io.LiteralC<"whoami">;
    content: io.UnknownC;
}>;
export declare type WhoAmIRequestPayload = io.TypeOf<typeof whoAmIRequestPayload>;
export declare const socketPayload: io.UnionC<[io.TypeC<{
    kind: io.LiteralC<"userIdentification">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"ping">;
    content: io.StringC;
}>, io.TypeC<{
    kind: io.LiteralC<"connectionOpened">;
    content: io.TypeC<{
        me: io.TypeC<{
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
        }>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"myStats">;
    content: io.TypeC<{
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
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"roomStats">;
    content: io.IntersectionC<[io.TypeC<{
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
        me: io.TypeC<{
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
        }>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomFailure">;
    content: io.KeyofC<{
        WrongCode: null;
        InexistentRoom: null;
        InexistentPeer: null;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"whoami">;
    content: io.UnknownC;
}>]>;
export declare type SocketPayload = io.TypeOf<typeof socketPayload>;
