import * as io from 'io-ts';
export declare const twitchAuthenticationRedirectUrlResponsePayload: io.TypeC<{
    redirectUrl: io.StringC;
}>;
export declare type TwitchAuthenticationRedirectUrlPayload = io.TypeOf<typeof twitchAuthenticationRedirectUrlResponsePayload>;
export declare const verifyTwitchUserRequestPayload: io.TypeC<{
    token: io.StringC;
}>;
export declare type VerifyTwitchUserRequestPayload = io.TypeOf<typeof verifyTwitchUserRequestPayload>;
export declare const verifyTwitchUserResponsePayload: io.TypeC<{
    user: io.TypeC<{
        id: io.StringC;
        email: io.StringC;
        firstName: io.UnionC<[io.StringC, io.UndefinedC]>;
        lastName: io.UnionC<[io.StringC, io.UndefinedC]>;
        name: io.UnionC<[io.StringC, io.UndefinedC]>;
    }>;
}>;
export declare type VerifyTwitchUserResponsePayload = io.TypeOf<typeof verifyTwitchUserResponsePayload>;
