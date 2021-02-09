import { Resource } from '../Resource';
import * as io from 'io-ts';
export declare const emailVerificationResource: Resource<io.TypeC<{
    email: io.StringC;
}>, io.TypeC<{
    response: io.LiteralC<"works">;
}>, io.TypeC<{
    type: io.LiteralC<"MyCustomError">;
    content: io.TypeC<{
        myVal: io.NumberC;
    }>;
}>, {
    email: string;
}, {
    response: "works";
}, {
    type: "MyCustomError";
    content: {
        myVal: number;
    };
}>;
