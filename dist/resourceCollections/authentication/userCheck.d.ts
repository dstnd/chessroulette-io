import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace UserCheck {
    const resource: Resource<io.UnionC<[io.TypeC<{
        type: io.LiteralC<"internal">;
        email: io.StringC;
        verificationCode: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"external">;
        vendor: io.KeyofC<{
            facebook: null;
            lichess: null;
        }>;
        accessToken: io.StringC;
    }>]>, io.UnionC<[io.TypeC<{
        status: io.LiteralC<"InexistentUser">;
        external: io.UnionC<[io.UndefinedC, io.TypeC<{
            vendor: io.KeyofC<{
                facebook: null;
                lichess: null;
            }>;
            user: io.UnionC<[io.TypeC<{
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
            }>, io.TypeC<{
                id: io.StringC;
                email: io.StringC;
                firstName: io.UnionC<[io.StringC, io.UndefinedC]>;
                lastName: io.UnionC<[io.StringC, io.UndefinedC]>;
                name: io.UnionC<[io.StringC, io.UndefinedC]>;
            }>]>;
        }>]>;
    }>, io.TypeC<{
        status: io.LiteralC<"ExistentUser">;
        accessToken: io.StringC;
    }>]>, io.TypeC<{
        type: io.LiteralC<"VerificationFailed">;
        content: io.UndefinedC;
    }>, {
        type: "internal";
        email: string;
        verificationCode: string;
    } | {
        type: "external";
        vendor: "lichess" | "facebook";
        accessToken: string;
    }, {
        status: "InexistentUser";
        external: {
            vendor: "lichess" | "facebook";
            user: {
                email: string;
                id: string;
                username: string;
                perfs: {
                    blitz: {
                        games: number;
                        rating: number;
                    };
                    bullet: {
                        games: number;
                        rating: number;
                    };
                    classical: {
                        games: number;
                        rating: number;
                    };
                    correspondence: {
                        games: number;
                        rating: number;
                    };
                    puzzle: {
                        games: number;
                        rating: number;
                    };
                    rapid: {
                        games: number;
                        rating: number;
                    };
                };
            } | {
                id: string;
                email: string;
                firstName: string | undefined;
                lastName: string | undefined;
                name: string | undefined;
            };
        } | undefined;
    } | {
        status: "ExistentUser";
        accessToken: string;
    }, {
        type: "VerificationFailed";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
