import { Resource, RequestOf, ErrResponseOf, OkResponseOf } from '../../sdk/resource';
import * as io from 'io-ts';
export declare namespace EmailVerification {
    const resource: Resource<io.TypeC<{
        email: io.StringC;
    }>, io.TypeC<{
        response: io.LiteralC<"works">;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"MyCustomError">;
        content: io.TypeC<{
            myVal: io.NumberC;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"ValidationErrors">;
        content: io.TypeC<{
            invalidFields: io.StringC;
        }>;
    }>]>, {
        email: string;
    }, {
        response: "works";
    }, {
        type: "MyCustomError";
        content: {
            myVal: number;
        };
    } | {
        type: "ValidationErrors";
        content: {
            invalidFields: string;
        };
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = OkResponse | ErrResponse;
}
