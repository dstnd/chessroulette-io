import * as io from 'io-ts';
import { Resource, RequestOf, ErrResponseOf, OkResponseOf, ResponseOf } from '../../sdk/resource';
export declare namespace EmailVerification {
    const resource: Resource<io.TypeC<{
        email: io.StringC;
    }>, io.UndefinedC, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"ValidationErrors">;
        content: io.TypeC<{
            fields: io.PartialC<Record<"email", io.UnionC<[io.StringC, io.UndefinedC]>>>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"EmailCantSendError">;
        content: io.UndefinedC;
    }>]>, {
        email: string;
    }, undefined, {
        type: "ValidationErrors";
        content: {
            fields: {
                email?: string | undefined;
            };
        };
    } | {
        type: "EmailCantSendError";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
