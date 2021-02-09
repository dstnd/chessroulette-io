import * as io from 'io-ts';
export declare const formModel: <M extends {
    [key: string]: io.NumberC | io.StringC;
}>(m: M) => M;
export declare const httpInputValidationError: <M extends {
    [key: string]: io.NumberC | io.StringC;
}>(model: M) => io.TypeC<{
    type: io.LiteralC<"HttpInputValidationError">;
    invalidInput: io.RecordC<io.KeyofC<M>, io.UnionC<[io.StringC, io.UndefinedC]>>;
}>;
declare type HttpInputValidationErrorType = ReturnType<typeof httpInputValidationError>;
export declare type HttpInputValidationError = io.TypeOf<HttpInputValidationErrorType>;
export {};
