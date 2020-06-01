import * as io from 'io-ts';
export declare const createUserRequestPayload: io.TypeC<{
    name: io.StringC;
}>;
export declare type CreateUserRequestPayload = io.TypeOf<typeof createUserRequestPayload>;
export declare const createUserResponsePayload: io.TypeC<{
    id: io.StringC;
    name: io.StringC;
}>;
export declare type CreateUserResponsePayload = io.TypeOf<typeof createUserResponsePayload>;
