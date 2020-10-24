import * as io from 'io-ts';
export declare const authenticationRedirectUrlResponsePayload: io.TypeC<{
    redirectUrl: io.StringC;
}>;
export declare type AuthenticationRedirectUrlPayload = io.TypeOf<typeof authenticationRedirectUrlResponsePayload>;
export declare const getLichessUserRequestPayload: io.TypeC<{
    token: io.StringC;
}>;
export declare type GetLichessUserRequestPayload = io.TypeOf<typeof getLichessUserRequestPayload>;
export declare const getLichessUserResponsePayload: io.TypeC<{
    user: io.TypeC<{
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
export declare type GetLichessUserResponsePayload = io.TypeOf<typeof getLichessUserResponsePayload>;
export declare const authenticationViaExternalAccountRequestPayload: io.TypeC<{
    externalAccountType: io.KeyofC<{
        lichess: null;
    }>;
    externalAccountToken: io.StringC;
}>;
export declare type AuthenticationViaExternalAccountRequestPayload = io.TypeOf<typeof authenticationViaExternalAccountRequestPayload>;
export declare const authenticationViaExistentUserRequestPayload: io.TypeC<{
    userId: io.StringC;
}>;
export declare type AuthenticationViaExistentUserRequestPayload = io.TypeOf<typeof authenticationViaExistentUserRequestPayload>;
export declare const authenticationRequestPayload: io.UnionC<[io.TypeC<{
    externalAccountType: io.KeyofC<{
        lichess: null;
    }>;
    externalAccountToken: io.StringC;
}>, io.TypeC<{
    userId: io.StringC;
}>]>;
export declare type AuthenticationRequestPayload = io.TypeOf<typeof authenticationRequestPayload>;
export declare const authenticationResponsePayload: io.TypeC<{
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
}>;
export declare type AuthenticationResponsePayload = io.TypeOf<typeof authenticationResponsePayload>;
export declare const guestAuthenticationRequestPayload: io.TypeC<{
    guestUser: io.UnionC<[io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<true>;
        sid: io.StringC;
    }>]>, io.UndefinedC]>;
}>;
export declare type GuestAuthenticationRequestPayload = io.TypeOf<typeof guestAuthenticationRequestPayload>;
export declare const guestAuthenticationResponsePayload: io.TypeC<{
    guest: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<true>;
        sid: io.StringC;
    }>]>;
}>;
export declare type GuestAuthenticationResponsePayload = io.TypeOf<typeof guestAuthenticationResponsePayload>;
