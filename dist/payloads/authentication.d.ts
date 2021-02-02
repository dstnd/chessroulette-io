import * as io from 'io-ts';
export declare const externalVendor: io.KeyofC<{
    facebook: null;
    lichess: null;
}>;
export declare const userCheckInternalAccountRequestPayload: io.TypeC<{
    type: io.LiteralC<"internal">;
    email: io.StringC;
    verificationCode: io.StringC;
}>;
export declare type UserCheckInternalAccountRequestPayload = io.TypeOf<typeof userCheckInternalAccountRequestPayload>;
export declare const userCheckExternalAccountRequestPayload: io.TypeC<{
    type: io.LiteralC<"external">;
    externalVendor: io.KeyofC<{
        facebook: null;
        lichess: null;
    }>;
    externalUserId: io.StringC;
}>;
export declare type UserCheckExternalAccountRequestPayload = io.TypeOf<typeof userCheckExternalAccountRequestPayload>;
export declare const userCheckRequestPayload: io.UnionC<[io.TypeC<{
    type: io.LiteralC<"internal">;
    email: io.StringC;
    verificationCode: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"external">;
    externalVendor: io.KeyofC<{
        facebook: null;
        lichess: null;
    }>;
    externalUserId: io.StringC;
}>]>;
export declare type UserCheckRequestPayload = io.TypeOf<typeof userCheckRequestPayload>;
export declare const userCheckVerificationFailedResponsePayload: io.TypeC<{
    status: io.LiteralC<"BadVerficationCode">;
}>;
export declare type UserCheckVerificationFailedResponsePayload = io.TypeOf<typeof userCheckVerificationFailedResponsePayload>;
export declare const userCheckInexitentUserResponsePayload: io.TypeC<{
    status: io.LiteralC<"InexistentUser">;
}>;
export declare type UserCheckInexitentUserResponsePayload = io.TypeOf<typeof userCheckInexitentUserResponsePayload>;
export declare const userCheckExistentUserResponsePayload: io.TypeC<{
    status: io.LiteralC<"ExistentUser">;
    accessToken: io.StringC;
}>;
export declare type UserCheckExistentUserResponsePayload = io.TypeOf<typeof userCheckExistentUserResponsePayload>;
export declare const userCheckResponsePayload: io.UnionC<[io.TypeC<{
    status: io.LiteralC<"BadVerficationCode">;
}>, io.TypeC<{
    status: io.LiteralC<"InexistentUser">;
}>, io.TypeC<{
    status: io.LiteralC<"ExistentUser">;
    accessToken: io.StringC;
}>]>;
export declare type UserCheckResponsePayload = io.TypeOf<typeof userCheckResponsePayload>;
export declare const verifyEmailRequestPayload: io.TypeC<{
    email: io.StringC;
}>;
export declare type VerifyEmailRequestPayload = io.TypeOf<typeof verifyEmailRequestPayload>;
export declare const verifyEmailResponsePayload: io.UndefinedC;
export declare type VerifyEmailResponsePayload = io.TypeOf<typeof verifyEmailResponsePayload>;
export declare const createUserAccountRequestPayload: io.TypeC<{
    email: io.StringC;
    firstName: io.StringC;
    lastName: io.StringC;
    external: io.ArrayC<io.TypeC<{
        externalVendor: io.KeyofC<{
            facebook: null;
            lichess: null;
        }>;
        externalUserId: io.StringC;
    }>>;
}>;
export declare type CreateUserAccountRequestPayload = io.TypeOf<typeof createUserAccountRequestPayload>;
export declare const createUserAccountResponsePayload: io.TypeC<{
    accessToken: io.StringC;
}>;
export declare type CreateUserAccountResponsePayload = io.TypeOf<typeof createUserAccountResponsePayload>;
export declare const guestAuthenticationRequestPayload: io.TypeC<{
    guestUser: io.UnionC<[io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<true>;
        sid: io.StringC;
    }>]>, io.UndefinedC]>;
}>;
export declare type GuestAuthenticationRequestPayload = io.TypeOf<typeof guestAuthenticationRequestPayload>;
export declare const guestAuthenticationResponsePayload: io.TypeC<{
    guest: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<true>;
        sid: io.StringC;
    }>]>;
}>;
export declare type GuestAuthenticationResponsePayload = io.TypeOf<typeof guestAuthenticationResponsePayload>;
