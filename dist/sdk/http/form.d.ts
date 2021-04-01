import * as io from 'io-ts';
export declare const formModel: <M extends {
    [key: string]: io.StringC | io.Mixed | io.NumberC;
}>(m: M) => M;
export declare type FormModelCodec = ReturnType<typeof formModel>;
export declare type FormModel = {
    [k: string]: string | number;
};
export declare type FormModelKeysMap = {
    [k: string]: unknown;
};
export declare const httpInputValidationError: <M extends {
    [key: string]: io.StringC | io.Mixed | io.NumberC;
}>(model: M) => io.TypeC<{
    type: io.LiteralC<"HttpInputValidationError">;
    invalidInput: io.RecordC<io.KeyofC<M>, io.UnionC<[io.StringC, io.UndefinedC]>>;
}>;
export declare const inputValidationError: <M extends {
    [key: string]: io.StringC | io.Mixed | io.NumberC;
}>(model: M) => io.TypeC<{
    type: io.LiteralC<"InputValidationError">;
    content: io.TypeC<{
        fields: io.RecordC<io.KeyofC<M>, io.UnionC<[io.StringC, io.UndefinedC]>>;
    }>;
}>;
export declare type HttpInputValidationErrorCodec = ReturnType<typeof httpInputValidationError>;
export declare type HttpInputValidationError = io.TypeOf<HttpInputValidationErrorCodec>;
