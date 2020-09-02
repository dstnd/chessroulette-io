import * as io from 'io-ts';
export declare const registerUserResponsePayload: io.UnionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<false>;
}>]>, io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<true>;
}>]>]>;
export declare type RegisterUserResponsePayload = io.TypeOf<typeof registerUserResponsePayload>;
