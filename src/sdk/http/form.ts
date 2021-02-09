import * as io from 'io-ts';


// Add More Possible Input Types here as needed
export const formModel = <M extends { [key: string]: io.StringC | io.NumberC | io.Mixed }>(m: M) => m;

type FormModel = ReturnType<typeof formModel>;

const getInvalidInputTypeFromModel = <M extends FormModel>(model: M) =>
  io.record(io.keyof(model), io.union([io.string, io.undefined]));

export const httpInputValidationError = <M extends FormModel>(model: M) => io.type({
  type: io.literal('HttpInputValidationError'),
  invalidInput: getInvalidInputTypeFromModel(model),
});

export const inputValidationError = <M extends FormModel>(model: M) => io.type({
  type: io.literal('InputValidationError'),
  content: io.type({
    fields: getInvalidInputTypeFromModel(model),
  }),
});

export type HttpInputValidationErrorCodec = ReturnType<typeof httpInputValidationError>;
export type HttpInputValidationError = io.TypeOf<HttpInputValidationErrorCodec>;
