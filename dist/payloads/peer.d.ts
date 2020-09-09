import * as io from 'io-ts';
export declare const registerPeerRequestPayload: io.TypeC<{
    userId: io.StringC;
}>;
export declare type RegisterPeerRequestPayload = io.TypeOf<typeof registerPeerRequestPayload>;
export declare const registerPeerResponsePayload: io.TypeC<{
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
}>;
export declare type RegisterPeerResponsePayload = io.TypeOf<typeof registerPeerResponsePayload>;
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
    }>;
}>;
export declare type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;
