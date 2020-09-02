import * as io from 'io-ts';
export declare const userInfoRecord: io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>;
export declare type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;
export declare const registeredUserRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<false>;
}>]>;
export declare type RegisterdUserRecord = io.TypeOf<typeof registeredUserRecord>;
export declare const guestUserRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>, io.TypeC<{
    isGuest: io.LiteralC<true>;
}>]>;
export declare type GuestUserRecord = io.TypeOf<typeof guestUserRecord>;
export declare const userRecord: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
export declare type UserRecord = io.TypeOf<typeof userRecord>;
