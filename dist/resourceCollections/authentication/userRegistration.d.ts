import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace UserRegistration {
    const resource: Resource<io.TypeC<{
        email: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        external: io.UnionC<[io.UndefinedC, io.TypeC<{
            vendor: io.KeyofC<{
                facebook: null;
                lichess: null;
            }>;
            accessToken: io.StringC;
        }>]>;
    }>, io.TypeC<{
        accessToken: io.StringC;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"InputValidationError">;
        content: io.TypeC<{
            fields: io.RecordC<io.KeyofC<{
                email: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                external: io.UnionC<[io.UndefinedC, io.TypeC<{
                    vendor: io.KeyofC<{
                        facebook: null;
                        lichess: null;
                    }>;
                    accessToken: io.StringC;
                }>]>;
            }>, io.UnionC<[io.StringC, io.UndefinedC]>>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"ValidationErrors">;
        content: io.TypeC<{
            fields: io.RecordC<io.KeyofC<{
                email: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                external: io.UnionC<[io.UndefinedC, io.TypeC<{
                    vendor: io.KeyofC<{
                        facebook: null;
                        lichess: null;
                    }>;
                    accessToken: io.StringC;
                }>]>;
            }>, io.UnionC<[io.StringC, io.UndefinedC]>>;
        }>;
    }>]>, {
        email: string;
        firstName: string;
        lastName: string;
        external: {
            vendor: "lichess" | "facebook";
            accessToken: string;
        } | undefined;
    }, {
        accessToken: string;
    }, {
        type: "InputValidationError";
        content: {
            fields: {
                firstName: string | undefined;
                lastName: string | undefined;
                email: string | undefined;
                external: string | undefined;
            };
        };
    } | {
        type: "ValidationErrors";
        content: {
            fields: {
                firstName: string | undefined;
                lastName: string | undefined;
                email: string | undefined;
                external: string | undefined;
            };
        };
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
