import * as io from 'io-ts';
export declare const formModel: <M extends {
    [key: string]: io.StringC | io.NumberC | io.Mixed;
}>(m: M) => M;
export declare const httpInputValidationError: <M extends {
    [key: string]: io.StringC | io.NumberC | io.Mixed;
}>(model: M) => io.TypeC<{
    type: io.LiteralC<"HttpInputValidationError">;
    invalidInput: io.RecordC<io.KeyofC<M>, io.UnionC<[io.StringC, io.UndefinedC]>>;
}>;
export declare const inputValidationError: <M extends {
    [key: string]: io.StringC | io.NumberC | io.Mixed;
}>(model: M) => io.TypeC<{
    type: io.LiteralC<"InputValidationError">;
    content: io.TypeC<{
        fields: io.RecordC<io.KeyofC<M>, io.UnionC<[io.StringC, io.UndefinedC]>>;
    }>;
}>;
export declare type HttpInputValidationErrorCodec = ReturnType<typeof httpInputValidationError>;
export declare type HttpInputValidationError = io.TypeOf<HttpInputValidationErrorCodec>;
