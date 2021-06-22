import * as io from 'io-ts';
export declare const lichessAuthenticationRedirectUrlResponsePayload: io.TypeC<{
    redirectUrl: io.StringC;
}>;
export declare type LichessAuthenticationRedirectUrlPayload = io.TypeOf<typeof lichessAuthenticationRedirectUrlResponsePayload>;
export declare const verifyLichessUserRequestPayload: io.TypeC<{
    token: io.StringC;
}>;
export declare type VerifyLichessUserRequestPayload = io.TypeOf<typeof verifyLichessUserRequestPayload>;
export declare const verifyLichessUserResponsePayload: io.TypeC<{
    user: io.TypeC<{
        email: io.StringC;
        id: io.StringC;
        username: io.StringC;
        perfs: io.PartialC<{
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
        vendor: io.LiteralC<"lichess">;
    }>;
}>;
export declare type VerifyLichessUserResponsePayload = io.TypeOf<typeof verifyLichessUserResponsePayload>;
