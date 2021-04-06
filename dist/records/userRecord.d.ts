import * as io from "io-ts";
export declare const userInfoRecord: io.TypeC<{
    id: io.StringC;
    firstName: io.StringC;
    lastName: io.StringC;
    avatarId: io.StringC;
    name: io.StringC;
}>;
export declare type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;
export declare const userExternalAccountRecord: io.TypeC<{
    userId: io.UnionC<[io.UndefinedC, io.StringC]>;
}>;
export declare type UserExternalAccountRecord = io.TypeOf<typeof userExternalAccountRecord>;
export declare const userExternalAccountByVendorMap: io.TypeC<{
    facebook: io.UnionC<[io.UndefinedC, io.TypeC<{
        userId: io.UnionC<[io.UndefinedC, io.StringC]>;
    }>]>;
    lichess: io.UnionC<[io.UndefinedC, io.TypeC<{
        userId: io.UnionC<[io.UndefinedC, io.StringC]>;
    }>]>;
}>;
export declare type UserExternalAccountByVendorMap = io.TypeOf<typeof userExternalAccountByVendorMap>;
export declare const registeredUserRecord: io.IntersectionC<[io.TypeC<{
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
}>]>;
export declare type RegisteredUserRecord = io.TypeOf<typeof registeredUserRecord>;
export declare const guestUserRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    firstName: io.StringC;
    lastName: io.StringC;
    avatarId: io.StringC;
    name: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<true>;
    sid: io.StringC;
}>]>;
export declare type GuestUserRecord = io.TypeOf<typeof guestUserRecord>;
export declare const userRecord: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
export declare type UserRecord = io.TypeOf<typeof userRecord>;
