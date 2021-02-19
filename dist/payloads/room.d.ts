import * as io from 'io-ts';
export declare const createRoomRequest: io.IntersectionC<[io.TypeC<{
    userId: io.StringC;
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
}>, io.PartialC<{
    name: io.StringC;
    activity: io.TypeC<{
        type: io.LiteralC<"none">;
    }>;
}>]>;
export declare type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;
export declare const createRoomResponse: io.IntersectionC<[io.TypeC<{
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
        gameId: io.StringC;
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
}>]>]>;
export declare type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;
export declare const publicRoomResponsePayload: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
        gameId: io.StringC;
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
    type: io.LiteralC<"public">;
}>]>;
export declare type PublicRoomResponsePayload = io.TypeOf<typeof publicRoomResponsePayload>;
export declare const privateRoomResponsePayload: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
        gameId: io.StringC;
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
    type: io.LiteralC<"private">;
}>]>;
export declare type PrivateRoomResponsePayload = io.TypeOf<typeof privateRoomResponsePayload>;
export declare const publicRoomsResponsePayload: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
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
        gameId: io.StringC;
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
    type: io.LiteralC<"public">;
}>]>>;
export declare type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;
export declare const roomResponsePayload: io.IntersectionC<[io.TypeC<{
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
        gameId: io.StringC;
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
}>]>]>;
export declare type RoomResponsePayload = io.TypeOf<typeof roomResponsePayload>;
export declare const joinedRoomUpdatedPayload: io.TypeC<{
    kind: io.LiteralC<"joinedRoomUpdated">;
    content: io.IntersectionC<[io.TypeC<{
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
            gameId: io.StringC;
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
    }>]>]>;
}>;
export declare type JoinedRoomUpdatedPayload = io.TypeOf<typeof joinedRoomUpdatedPayload>;
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
                gameId: io.StringC;
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
        }>]>]>;
        me: io.IntersectionC<[io.TypeC<{
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
        }>]>]>;
    }>;
}>;
export declare type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;
export declare const joinRoomFailurePayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomFailure">;
    content: io.KeyofC<{
        WrongCode: null;
        InexistentRoom: null;
        InexistentPeer: null;
        OtherRoomAlreadyJoined: null;
    }>;
}>;
export declare type JoinRoomFailurePayload = io.TypeOf<typeof joinRoomFailurePayload>;
export declare const leaveRoomRequestPayload: io.TypeC<{
    kind: io.LiteralC<"leaveRoomRequest">;
    content: io.UndefinedC;
}>;
export declare type LeaveRoomRequestPayload = io.TypeOf<typeof leaveRoomRequestPayload>;
export declare const peerJoinedRoomPayload: io.TypeC<{
    kind: io.LiteralC<"peerJoinedRoom">;
    content: io.TypeC<{
        roomId: io.StringC;
        peerId: io.StringC;
    }>;
}>;
export declare type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>;
