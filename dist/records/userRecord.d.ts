import * as io from "io-ts";
export declare const userInfoRecord: io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>;
export declare type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;
export declare const userExternalAccountOpts: io.TypeC<{
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
}>;
export declare type UserExternalAccountOpts = io.TypeOf<typeof userExternalAccountOpts>;
export declare const registeredUserRecord: io.IntersectionC<[io.TypeC<{
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
}>]>;
export declare type RegisteredUserRecord = io.TypeOf<typeof registeredUserRecord>;
export declare const guestUserRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<true>;
}>]>;
export declare type GuestUserRecord = io.TypeOf<typeof guestUserRecord>;
export declare const userRecord: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
export declare type UserRecord = io.TypeOf<typeof userRecord>;
