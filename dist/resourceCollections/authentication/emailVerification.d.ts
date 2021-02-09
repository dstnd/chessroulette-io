import * as io from 'io-ts';
import { Resource, RequestOf, ErrResponseOf, OkResponseOf, ResponseOf } from '../../sdk/resource';
export declare namespace EmailVerification {
    const resource: Resource<io.TypeC<{
        email: io.StringC;
    }>, io.UndefinedC, io.TypeC<{
        type: io.LiteralC<"ValidationErrors">;
        content: io.TypeC<{
            invalidFields: io.StringC;
        }>;
    }>, {
        email: string;
    }, undefined, {
        type: "ValidationErrors";
        content: {
            invalidFields: string;
        };
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
