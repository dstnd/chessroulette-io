import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace UserRegistration {
    const resource: Resource<io.TypeC<{
        verificationToken: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
    }>, io.TypeC<{
        accessToken: io.StringC;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"InputValidationError">;
        content: io.TypeC<{
            fields: io.RecordC<io.KeyofC<{
                verificationToken: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
            }>, io.UnionC<[io.StringC, io.UndefinedC]>>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"ValidationErrors">;
        content: io.TypeC<{
            fields: io.RecordC<io.KeyofC<{
                verificationToken: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
            }>, io.UnionC<[io.StringC, io.UndefinedC]>>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"DuplicateUser">;
        content: io.UndefinedC;
    }>]>, {
        verificationToken: string;
        firstName: string;
        lastName: string;
    }, {
        accessToken: string;
    }, {
        type: "InputValidationError";
        content: {
            fields: {
                firstName: string | undefined;
                lastName: string | undefined;
                verificationToken: string | undefined;
            };
        };
    } | {
        type: "ValidationErrors";
        content: {
            fields: {
                firstName: string | undefined;
                lastName: string | undefined;
                verificationToken: string | undefined;
            };
        };
    } | {
        type: "DuplicateUser";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
