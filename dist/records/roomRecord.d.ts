import * as io from 'io-ts';
export declare const roomActivityOption: io.KeyofC<{
    none: null;
    play: null;
}>;
export declare type RoomActivityOption = io.TypeOf<typeof roomActivityOption>;
export declare const roomNoActivityRecord: io.TypeC<{
    type: io.LiteralC<"none">;
}>;
export declare type RoomNoActivityRecord = io.TypeOf<typeof roomNoActivityRecord>;
export declare const roomPlayActivityRecord: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"play">;
    gameId: io.StringC;
}>, io.PartialC<{
    offer: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"draw">;
        content: io.TypeC<{
            by: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"rematch">;
        content: io.TypeC<{
            by: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
        }>;
    }>]>;
}>]>;
export declare type RoomPlayActivityRecord = io.TypeOf<typeof roomPlayActivityRecord>;
export declare const roomActivityRecord: io.UnionC<[io.TypeC<{
    type: io.LiteralC<"none">;
}>, io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"play">;
    gameId: io.StringC;
}>, io.PartialC<{
    offer: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"draw">;
        content: io.TypeC<{
            by: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"rematch">;
        content: io.TypeC<{
            by: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
        }>;
    }>]>;
}>]>]>;
export declare type RoomActivityRecord = io.TypeOf<typeof roomActivityRecord>;
export declare const roomType: io.KeyofC<{
    public: null;
    private: null;
}>;
export declare type RoomType = io.TypeOf<typeof roomType>;
export declare const roomRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
                twitch: io.UnionC<[io.UndefinedC, io.TypeC<{
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
                code: io.KeyofC<{
                    AD: null;
                    AE: null;
                    AF: null;
                    AG: null;
                    AI: null;
                    AL: null;
                    AM: null;
                    AO: null;
                    AQ: null;
                    AR: null;
                    AS: null;
                    AT: null;
                    AU: null;
                    AW: null;
                    AX: null;
                    AZ: null;
                    BA: null;
                    BB: null;
                    BD: null;
                    BE: null;
                    BF: null;
                    BG: null;
                    BH: null;
                    BI: null;
                    BJ: null;
                    BL: null;
                    BM: null;
                    BN: null;
                    BO: null;
                    BQ: null;
                    BR: null;
                    BS: null;
                    BT: null;
                    BV: null;
                    BW: null;
                    BY: null;
                    BZ: null;
                    CA: null;
                    CC: null;
                    CD: null;
                    CF: null;
                    CG: null;
                    CH: null;
                    CI: null;
                    CK: null;
                    CL: null;
                    CM: null;
                    CN: null;
                    CO: null;
                    CR: null;
                    CU: null;
                    CV: null;
                    CW: null;
                    CX: null;
                    CY: null;
                    CZ: null;
                    DE: null;
                    DJ: null;
                    DK: null;
                    DM: null;
                    DO: null;
                    DZ: null;
                    EC: null;
                    EE: null;
                    EG: null;
                    EH: null;
                    ER: null;
                    ES: null;
                    ET: null;
                    FI: null;
                    FJ: null;
                    FK: null;
                    FM: null;
                    FO: null;
                    FR: null;
                    GA: null;
                    GB: null;
                    GD: null;
                    GE: null;
                    GF: null;
                    GG: null;
                    GH: null;
                    GI: null;
                    GL: null;
                    GM: null;
                    GN: null;
                    GP: null;
                    GQ: null;
                    GR: null;
                    GS: null;
                    GT: null;
                    GU: null;
                    GW: null;
                    GY: null;
                    HK: null;
                    HM: null;
                    HN: null;
                    HR: null;
                    HT: null;
                    HU: null;
                    ID: null;
                    IE: null;
                    IL: null;
                    IM: null;
                    IN: null;
                    IO: null;
                    IQ: null;
                    IR: null;
                    IS: null;
                    IT: null;
                    JE: null;
                    JM: null;
                    JO: null;
                    JP: null;
                    KE: null;
                    KG: null;
                    KH: null;
                    KI: null;
                    KM: null;
                    KN: null;
                    KP: null;
                    KR: null;
                    KW: null;
                    KY: null;
                    KZ: null;
                    LA: null;
                    LB: null;
                    LC: null;
                    LI: null;
                    LK: null;
                    LR: null;
                    LS: null;
                    LT: null;
                    LU: null;
                    LV: null;
                    LY: null;
                    MA: null;
                    MC: null;
                    MD: null;
                    ME: null;
                    MF: null;
                    MG: null;
                    MH: null;
                    MK: null;
                    ML: null;
                    MM: null;
                    MN: null;
                    MO: null;
                    MP: null;
                    MQ: null;
                    MR: null;
                    MS: null;
                    MT: null;
                    MU: null;
                    MV: null;
                    MW: null;
                    MX: null;
                    MY: null;
                    MZ: null;
                    NA: null;
                    NC: null;
                    NE: null;
                    NF: null;
                    NG: null;
                    NI: null;
                    NL: null;
                    NO: null;
                    NP: null;
                    NR: null;
                    NU: null;
                    NZ: null;
                    OM: null;
                    PA: null;
                    PE: null;
                    PF: null;
                    PG: null;
                    PH: null;
                    PK: null;
                    PL: null;
                    PM: null;
                    PN: null;
                    PR: null;
                    PS: null;
                    PT: null;
                    PW: null;
                    PY: null;
                    QA: null;
                    RE: null;
                    RO: null;
                    RS: null;
                    RU: null;
                    RW: null;
                    SA: null;
                    SB: null;
                    SC: null;
                    SD: null;
                    SE: null;
                    SG: null;
                    SH: null;
                    SI: null;
                    SJ: null;
                    SK: null;
                    SL: null;
                    SM: null;
                    SN: null;
                    SO: null;
                    SR: null;
                    SS: null;
                    ST: null;
                    SV: null;
                    SX: null;
                    SY: null;
                    SZ: null;
                    TC: null;
                    TD: null;
                    TF: null;
                    TG: null;
                    TH: null;
                    TJ: null;
                    TK: null;
                    TL: null;
                    TM: null;
                    TN: null;
                    TO: null;
                    TR: null;
                    TT: null;
                    TV: null;
                    TW: null;
                    TZ: null;
                    UA: null;
                    UG: null;
                    UM: null;
                    US: null;
                    UY: null;
                    UZ: null;
                    VA: null;
                    VC: null;
                    VE: null;
                    VG: null;
                    VI: null;
                    VN: null;
                    VU: null;
                    WF: null;
                    WS: null;
                    XK: null;
                    YE: null;
                    YT: null;
                    ZA: null;
                    ZM: null;
                    ZW: null;
                }>;
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
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>;
export declare type RoomRecord = io.TypeOf<typeof roomRecord>;
export declare const publicRoomRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
                twitch: io.UnionC<[io.UndefinedC, io.TypeC<{
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
                code: io.KeyofC<{
                    AD: null;
                    AE: null;
                    AF: null;
                    AG: null;
                    AI: null;
                    AL: null;
                    AM: null;
                    AO: null;
                    AQ: null;
                    AR: null;
                    AS: null;
                    AT: null;
                    AU: null;
                    AW: null;
                    AX: null;
                    AZ: null;
                    BA: null;
                    BB: null;
                    BD: null;
                    BE: null;
                    BF: null;
                    BG: null;
                    BH: null;
                    BI: null;
                    BJ: null;
                    BL: null;
                    BM: null;
                    BN: null;
                    BO: null;
                    BQ: null;
                    BR: null;
                    BS: null;
                    BT: null;
                    BV: null;
                    BW: null;
                    BY: null;
                    BZ: null;
                    CA: null;
                    CC: null;
                    CD: null;
                    CF: null;
                    CG: null;
                    CH: null;
                    CI: null;
                    CK: null;
                    CL: null;
                    CM: null;
                    CN: null;
                    CO: null;
                    CR: null;
                    CU: null;
                    CV: null;
                    CW: null;
                    CX: null;
                    CY: null;
                    CZ: null;
                    DE: null;
                    DJ: null;
                    DK: null;
                    DM: null;
                    DO: null;
                    DZ: null;
                    EC: null;
                    EE: null;
                    EG: null;
                    EH: null;
                    ER: null;
                    ES: null;
                    ET: null;
                    FI: null;
                    FJ: null;
                    FK: null;
                    FM: null;
                    FO: null;
                    FR: null;
                    GA: null;
                    GB: null;
                    GD: null;
                    GE: null;
                    GF: null;
                    GG: null;
                    GH: null;
                    GI: null;
                    GL: null;
                    GM: null;
                    GN: null;
                    GP: null;
                    GQ: null;
                    GR: null;
                    GS: null;
                    GT: null;
                    GU: null;
                    GW: null;
                    GY: null;
                    HK: null;
                    HM: null;
                    HN: null;
                    HR: null;
                    HT: null;
                    HU: null;
                    ID: null;
                    IE: null;
                    IL: null;
                    IM: null;
                    IN: null;
                    IO: null;
                    IQ: null;
                    IR: null;
                    IS: null;
                    IT: null;
                    JE: null;
                    JM: null;
                    JO: null;
                    JP: null;
                    KE: null;
                    KG: null;
                    KH: null;
                    KI: null;
                    KM: null;
                    KN: null;
                    KP: null;
                    KR: null;
                    KW: null;
                    KY: null;
                    KZ: null;
                    LA: null;
                    LB: null;
                    LC: null;
                    LI: null;
                    LK: null;
                    LR: null;
                    LS: null;
                    LT: null;
                    LU: null;
                    LV: null;
                    LY: null;
                    MA: null;
                    MC: null;
                    MD: null;
                    ME: null;
                    MF: null;
                    MG: null;
                    MH: null;
                    MK: null;
                    ML: null;
                    MM: null;
                    MN: null;
                    MO: null;
                    MP: null;
                    MQ: null;
                    MR: null;
                    MS: null;
                    MT: null;
                    MU: null;
                    MV: null;
                    MW: null;
                    MX: null;
                    MY: null;
                    MZ: null;
                    NA: null;
                    NC: null;
                    NE: null;
                    NF: null;
                    NG: null;
                    NI: null;
                    NL: null;
                    NO: null;
                    NP: null;
                    NR: null;
                    NU: null;
                    NZ: null;
                    OM: null;
                    PA: null;
                    PE: null;
                    PF: null;
                    PG: null;
                    PH: null;
                    PK: null;
                    PL: null;
                    PM: null;
                    PN: null;
                    PR: null;
                    PS: null;
                    PT: null;
                    PW: null;
                    PY: null;
                    QA: null;
                    RE: null;
                    RO: null;
                    RS: null;
                    RU: null;
                    RW: null;
                    SA: null;
                    SB: null;
                    SC: null;
                    SD: null;
                    SE: null;
                    SG: null;
                    SH: null;
                    SI: null;
                    SJ: null;
                    SK: null;
                    SL: null;
                    SM: null;
                    SN: null;
                    SO: null;
                    SR: null;
                    SS: null;
                    ST: null;
                    SV: null;
                    SX: null;
                    SY: null;
                    SZ: null;
                    TC: null;
                    TD: null;
                    TF: null;
                    TG: null;
                    TH: null;
                    TJ: null;
                    TK: null;
                    TL: null;
                    TM: null;
                    TN: null;
                    TO: null;
                    TR: null;
                    TT: null;
                    TV: null;
                    TW: null;
                    TZ: null;
                    UA: null;
                    UG: null;
                    UM: null;
                    US: null;
                    UY: null;
                    UZ: null;
                    VA: null;
                    VC: null;
                    VE: null;
                    VG: null;
                    VI: null;
                    VN: null;
                    VU: null;
                    WF: null;
                    WS: null;
                    XK: null;
                    YE: null;
                    YT: null;
                    ZA: null;
                    ZM: null;
                    ZW: null;
                }>;
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
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    type: io.LiteralC<"public">;
}>]>;
export declare type PublicRoomRecord = io.TypeOf<typeof publicRoomRecord>;
export declare const privateRoomRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
                twitch: io.UnionC<[io.UndefinedC, io.TypeC<{
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
                code: io.KeyofC<{
                    AD: null;
                    AE: null;
                    AF: null;
                    AG: null;
                    AI: null;
                    AL: null;
                    AM: null;
                    AO: null;
                    AQ: null;
                    AR: null;
                    AS: null;
                    AT: null;
                    AU: null;
                    AW: null;
                    AX: null;
                    AZ: null;
                    BA: null;
                    BB: null;
                    BD: null;
                    BE: null;
                    BF: null;
                    BG: null;
                    BH: null;
                    BI: null;
                    BJ: null;
                    BL: null;
                    BM: null;
                    BN: null;
                    BO: null;
                    BQ: null;
                    BR: null;
                    BS: null;
                    BT: null;
                    BV: null;
                    BW: null;
                    BY: null;
                    BZ: null;
                    CA: null;
                    CC: null;
                    CD: null;
                    CF: null;
                    CG: null;
                    CH: null;
                    CI: null;
                    CK: null;
                    CL: null;
                    CM: null;
                    CN: null;
                    CO: null;
                    CR: null;
                    CU: null;
                    CV: null;
                    CW: null;
                    CX: null;
                    CY: null;
                    CZ: null;
                    DE: null;
                    DJ: null;
                    DK: null;
                    DM: null;
                    DO: null;
                    DZ: null;
                    EC: null;
                    EE: null;
                    EG: null;
                    EH: null;
                    ER: null;
                    ES: null;
                    ET: null;
                    FI: null;
                    FJ: null;
                    FK: null;
                    FM: null;
                    FO: null;
                    FR: null;
                    GA: null;
                    GB: null;
                    GD: null;
                    GE: null;
                    GF: null;
                    GG: null;
                    GH: null;
                    GI: null;
                    GL: null;
                    GM: null;
                    GN: null;
                    GP: null;
                    GQ: null;
                    GR: null;
                    GS: null;
                    GT: null;
                    GU: null;
                    GW: null;
                    GY: null;
                    HK: null;
                    HM: null;
                    HN: null;
                    HR: null;
                    HT: null;
                    HU: null;
                    ID: null;
                    IE: null;
                    IL: null;
                    IM: null;
                    IN: null;
                    IO: null;
                    IQ: null;
                    IR: null;
                    IS: null;
                    IT: null;
                    JE: null;
                    JM: null;
                    JO: null;
                    JP: null;
                    KE: null;
                    KG: null;
                    KH: null;
                    KI: null;
                    KM: null;
                    KN: null;
                    KP: null;
                    KR: null;
                    KW: null;
                    KY: null;
                    KZ: null;
                    LA: null;
                    LB: null;
                    LC: null;
                    LI: null;
                    LK: null;
                    LR: null;
                    LS: null;
                    LT: null;
                    LU: null;
                    LV: null;
                    LY: null;
                    MA: null;
                    MC: null;
                    MD: null;
                    ME: null;
                    MF: null;
                    MG: null;
                    MH: null;
                    MK: null;
                    ML: null;
                    MM: null;
                    MN: null;
                    MO: null;
                    MP: null;
                    MQ: null;
                    MR: null;
                    MS: null;
                    MT: null;
                    MU: null;
                    MV: null;
                    MW: null;
                    MX: null;
                    MY: null;
                    MZ: null;
                    NA: null;
                    NC: null;
                    NE: null;
                    NF: null;
                    NG: null;
                    NI: null;
                    NL: null;
                    NO: null;
                    NP: null;
                    NR: null;
                    NU: null;
                    NZ: null;
                    OM: null;
                    PA: null;
                    PE: null;
                    PF: null;
                    PG: null;
                    PH: null;
                    PK: null;
                    PL: null;
                    PM: null;
                    PN: null;
                    PR: null;
                    PS: null;
                    PT: null;
                    PW: null;
                    PY: null;
                    QA: null;
                    RE: null;
                    RO: null;
                    RS: null;
                    RU: null;
                    RW: null;
                    SA: null;
                    SB: null;
                    SC: null;
                    SD: null;
                    SE: null;
                    SG: null;
                    SH: null;
                    SI: null;
                    SJ: null;
                    SK: null;
                    SL: null;
                    SM: null;
                    SN: null;
                    SO: null;
                    SR: null;
                    SS: null;
                    ST: null;
                    SV: null;
                    SX: null;
                    SY: null;
                    SZ: null;
                    TC: null;
                    TD: null;
                    TF: null;
                    TG: null;
                    TH: null;
                    TJ: null;
                    TK: null;
                    TL: null;
                    TM: null;
                    TN: null;
                    TO: null;
                    TR: null;
                    TT: null;
                    TV: null;
                    TW: null;
                    TZ: null;
                    UA: null;
                    UG: null;
                    UM: null;
                    US: null;
                    UY: null;
                    UZ: null;
                    VA: null;
                    VC: null;
                    VE: null;
                    VG: null;
                    VI: null;
                    VN: null;
                    VU: null;
                    WF: null;
                    WS: null;
                    XK: null;
                    YE: null;
                    YT: null;
                    ZA: null;
                    ZM: null;
                    ZW: null;
                }>;
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
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    type: io.LiteralC<"private">;
}>]>;
export declare type PrivateRoomRecord = io.TypeOf<typeof privateRoomRecord>;
export declare const roomWithPlayActivityRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
                twitch: io.UnionC<[io.UndefinedC, io.TypeC<{
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
                code: io.KeyofC<{
                    AD: null;
                    AE: null;
                    AF: null;
                    AG: null;
                    AI: null;
                    AL: null;
                    AM: null;
                    AO: null;
                    AQ: null;
                    AR: null;
                    AS: null;
                    AT: null;
                    AU: null;
                    AW: null;
                    AX: null;
                    AZ: null;
                    BA: null;
                    BB: null;
                    BD: null;
                    BE: null;
                    BF: null;
                    BG: null;
                    BH: null;
                    BI: null;
                    BJ: null;
                    BL: null;
                    BM: null;
                    BN: null;
                    BO: null;
                    BQ: null;
                    BR: null;
                    BS: null;
                    BT: null;
                    BV: null;
                    BW: null;
                    BY: null;
                    BZ: null;
                    CA: null;
                    CC: null;
                    CD: null;
                    CF: null;
                    CG: null;
                    CH: null;
                    CI: null;
                    CK: null;
                    CL: null;
                    CM: null;
                    CN: null;
                    CO: null;
                    CR: null;
                    CU: null;
                    CV: null;
                    CW: null;
                    CX: null;
                    CY: null;
                    CZ: null;
                    DE: null;
                    DJ: null;
                    DK: null;
                    DM: null;
                    DO: null;
                    DZ: null;
                    EC: null;
                    EE: null;
                    EG: null;
                    EH: null;
                    ER: null;
                    ES: null;
                    ET: null;
                    FI: null;
                    FJ: null;
                    FK: null;
                    FM: null;
                    FO: null;
                    FR: null;
                    GA: null;
                    GB: null;
                    GD: null;
                    GE: null;
                    GF: null;
                    GG: null;
                    GH: null;
                    GI: null;
                    GL: null;
                    GM: null;
                    GN: null;
                    GP: null;
                    GQ: null;
                    GR: null;
                    GS: null;
                    GT: null;
                    GU: null;
                    GW: null;
                    GY: null;
                    HK: null;
                    HM: null;
                    HN: null;
                    HR: null;
                    HT: null;
                    HU: null;
                    ID: null;
                    IE: null;
                    IL: null;
                    IM: null;
                    IN: null;
                    IO: null;
                    IQ: null;
                    IR: null;
                    IS: null;
                    IT: null;
                    JE: null;
                    JM: null;
                    JO: null;
                    JP: null;
                    KE: null;
                    KG: null;
                    KH: null;
                    KI: null;
                    KM: null;
                    KN: null;
                    KP: null;
                    KR: null;
                    KW: null;
                    KY: null;
                    KZ: null;
                    LA: null;
                    LB: null;
                    LC: null;
                    LI: null;
                    LK: null;
                    LR: null;
                    LS: null;
                    LT: null;
                    LU: null;
                    LV: null;
                    LY: null;
                    MA: null;
                    MC: null;
                    MD: null;
                    ME: null;
                    MF: null;
                    MG: null;
                    MH: null;
                    MK: null;
                    ML: null;
                    MM: null;
                    MN: null;
                    MO: null;
                    MP: null;
                    MQ: null;
                    MR: null;
                    MS: null;
                    MT: null;
                    MU: null;
                    MV: null;
                    MW: null;
                    MX: null;
                    MY: null;
                    MZ: null;
                    NA: null;
                    NC: null;
                    NE: null;
                    NF: null;
                    NG: null;
                    NI: null;
                    NL: null;
                    NO: null;
                    NP: null;
                    NR: null;
                    NU: null;
                    NZ: null;
                    OM: null;
                    PA: null;
                    PE: null;
                    PF: null;
                    PG: null;
                    PH: null;
                    PK: null;
                    PL: null;
                    PM: null;
                    PN: null;
                    PR: null;
                    PS: null;
                    PT: null;
                    PW: null;
                    PY: null;
                    QA: null;
                    RE: null;
                    RO: null;
                    RS: null;
                    RU: null;
                    RW: null;
                    SA: null;
                    SB: null;
                    SC: null;
                    SD: null;
                    SE: null;
                    SG: null;
                    SH: null;
                    SI: null;
                    SJ: null;
                    SK: null;
                    SL: null;
                    SM: null;
                    SN: null;
                    SO: null;
                    SR: null;
                    SS: null;
                    ST: null;
                    SV: null;
                    SX: null;
                    SY: null;
                    SZ: null;
                    TC: null;
                    TD: null;
                    TF: null;
                    TG: null;
                    TH: null;
                    TJ: null;
                    TK: null;
                    TL: null;
                    TM: null;
                    TN: null;
                    TO: null;
                    TR: null;
                    TT: null;
                    TV: null;
                    TW: null;
                    TZ: null;
                    UA: null;
                    UG: null;
                    UM: null;
                    US: null;
                    UY: null;
                    UZ: null;
                    VA: null;
                    VC: null;
                    VE: null;
                    VG: null;
                    VI: null;
                    VN: null;
                    VU: null;
                    WF: null;
                    WS: null;
                    XK: null;
                    YE: null;
                    YT: null;
                    ZA: null;
                    ZM: null;
                    ZW: null;
                }>;
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
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    activity: io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>;
}>]>;
export declare type RoomWithPlayActivityRecord = io.TypeOf<typeof roomWithPlayActivityRecord>;
export declare const roomWithNoActivityRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
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
                twitch: io.UnionC<[io.UndefinedC, io.TypeC<{
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
                code: io.KeyofC<{
                    AD: null;
                    AE: null;
                    AF: null;
                    AG: null;
                    AI: null;
                    AL: null;
                    AM: null;
                    AO: null;
                    AQ: null;
                    AR: null;
                    AS: null;
                    AT: null;
                    AU: null;
                    AW: null;
                    AX: null;
                    AZ: null;
                    BA: null;
                    BB: null;
                    BD: null;
                    BE: null;
                    BF: null;
                    BG: null;
                    BH: null;
                    BI: null;
                    BJ: null;
                    BL: null;
                    BM: null;
                    BN: null;
                    BO: null;
                    BQ: null;
                    BR: null;
                    BS: null;
                    BT: null;
                    BV: null;
                    BW: null;
                    BY: null;
                    BZ: null;
                    CA: null;
                    CC: null;
                    CD: null;
                    CF: null;
                    CG: null;
                    CH: null;
                    CI: null;
                    CK: null;
                    CL: null;
                    CM: null;
                    CN: null;
                    CO: null;
                    CR: null;
                    CU: null;
                    CV: null;
                    CW: null;
                    CX: null;
                    CY: null;
                    CZ: null;
                    DE: null;
                    DJ: null;
                    DK: null;
                    DM: null;
                    DO: null;
                    DZ: null;
                    EC: null;
                    EE: null;
                    EG: null;
                    EH: null;
                    ER: null;
                    ES: null;
                    ET: null;
                    FI: null;
                    FJ: null;
                    FK: null;
                    FM: null;
                    FO: null;
                    FR: null;
                    GA: null;
                    GB: null;
                    GD: null;
                    GE: null;
                    GF: null;
                    GG: null;
                    GH: null;
                    GI: null;
                    GL: null;
                    GM: null;
                    GN: null;
                    GP: null;
                    GQ: null;
                    GR: null;
                    GS: null;
                    GT: null;
                    GU: null;
                    GW: null;
                    GY: null;
                    HK: null;
                    HM: null;
                    HN: null;
                    HR: null;
                    HT: null;
                    HU: null;
                    ID: null;
                    IE: null;
                    IL: null;
                    IM: null;
                    IN: null;
                    IO: null;
                    IQ: null;
                    IR: null;
                    IS: null;
                    IT: null;
                    JE: null;
                    JM: null;
                    JO: null;
                    JP: null;
                    KE: null;
                    KG: null;
                    KH: null;
                    KI: null;
                    KM: null;
                    KN: null;
                    KP: null;
                    KR: null;
                    KW: null;
                    KY: null;
                    KZ: null;
                    LA: null;
                    LB: null;
                    LC: null;
                    LI: null;
                    LK: null;
                    LR: null;
                    LS: null;
                    LT: null;
                    LU: null;
                    LV: null;
                    LY: null;
                    MA: null;
                    MC: null;
                    MD: null;
                    ME: null;
                    MF: null;
                    MG: null;
                    MH: null;
                    MK: null;
                    ML: null;
                    MM: null;
                    MN: null;
                    MO: null;
                    MP: null;
                    MQ: null;
                    MR: null;
                    MS: null;
                    MT: null;
                    MU: null;
                    MV: null;
                    MW: null;
                    MX: null;
                    MY: null;
                    MZ: null;
                    NA: null;
                    NC: null;
                    NE: null;
                    NF: null;
                    NG: null;
                    NI: null;
                    NL: null;
                    NO: null;
                    NP: null;
                    NR: null;
                    NU: null;
                    NZ: null;
                    OM: null;
                    PA: null;
                    PE: null;
                    PF: null;
                    PG: null;
                    PH: null;
                    PK: null;
                    PL: null;
                    PM: null;
                    PN: null;
                    PR: null;
                    PS: null;
                    PT: null;
                    PW: null;
                    PY: null;
                    QA: null;
                    RE: null;
                    RO: null;
                    RS: null;
                    RU: null;
                    RW: null;
                    SA: null;
                    SB: null;
                    SC: null;
                    SD: null;
                    SE: null;
                    SG: null;
                    SH: null;
                    SI: null;
                    SJ: null;
                    SK: null;
                    SL: null;
                    SM: null;
                    SN: null;
                    SO: null;
                    SR: null;
                    SS: null;
                    ST: null;
                    SV: null;
                    SX: null;
                    SY: null;
                    SZ: null;
                    TC: null;
                    TD: null;
                    TF: null;
                    TG: null;
                    TH: null;
                    TJ: null;
                    TK: null;
                    TL: null;
                    TM: null;
                    TN: null;
                    TO: null;
                    TR: null;
                    TT: null;
                    TV: null;
                    TW: null;
                    TZ: null;
                    UA: null;
                    UG: null;
                    UM: null;
                    US: null;
                    UY: null;
                    UZ: null;
                    VA: null;
                    VC: null;
                    VE: null;
                    VG: null;
                    VI: null;
                    VN: null;
                    VU: null;
                    WF: null;
                    WS: null;
                    XK: null;
                    YE: null;
                    YT: null;
                    ZA: null;
                    ZM: null;
                    ZW: null;
                }>;
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
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    activity: io.TypeC<{
        type: io.LiteralC<"none">;
    }>;
}>]>;
export declare type RoomWithNoActivityRecord = io.TypeOf<typeof roomWithNoActivityRecord>;
