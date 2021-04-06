import * as io from 'io-ts';
export declare const registerUserResponsePayload: io.UnionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    firstName: io.StringC;
    lastName: io.StringC;
    avatarId: io.StringC;
    name: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<false>;
    email: io.StringC;
    profilePicUrl: io.UnionC<[io.StringC, io.UndefinedC]>;
    externalAccounts: io.UnionC<[io.UndefinedC, io.TypeC<{
        facebook: io.UnionC<[io.UndefinedC, io.TypeC<{
            userId: io.UnionC<[io.UndefinedC, io.StringC]>;
        }>]>;
        lichess: io.UnionC<[io.UndefinedC, io.TypeC<{
            userId: io.UnionC<[io.UndefinedC, io.StringC]>;
        }>]>;
    }>]>;
    username: io.StringC;
    country: io.UnionC<[io.TypeC<{
        name: io.StringC;
        languages: io.ArrayC<io.StringC>;
        flagEmoji: io.StringC;
        flagEmojiU: io.StringC;
        phone: io.StringC;
        currency: io.StringC;
    }>, io.UndefinedC]>;
}>]>, io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    firstName: io.StringC;
    lastName: io.StringC;
    avatarId: io.StringC;
    name: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<true>;
    sid: io.StringC;
}>]>]>;
export declare type RegisterUserResponsePayload = io.TypeOf<typeof registerUserResponsePayload>;
