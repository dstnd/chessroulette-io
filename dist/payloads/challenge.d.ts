import * as io from 'io-ts';
export declare const baseCreateChallengeRequest: io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    userId: io.StringC;
}>;
export declare const createPublicChallengeRequest: io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        public: null;
    }>;
}>]>;
export declare type CreatePublicChallengeRequest = io.TypeOf<typeof createPublicChallengeRequest>;
export declare const createPrivateChallengeRequest: io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        private: null;
    }>;
}>]>;
export declare type CreatePrivateChallengeRequest = io.TypeOf<typeof createPrivateChallengeRequest>;
export declare const createChallengeRequest: io.UnionC<[io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        private: null;
    }>;
}>]>, io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    userId: io.StringC;
}>, io.TypeC<{
    type: io.KeyofC<{
        public: null;
    }>;
}>]>]>;
export declare type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;
export declare const createChallengeResponse: io.UnionC<[io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"public">;
}>]>, io.IntersectionC<[io.TypeC<{
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
}>]>]>;
export declare type CreateChallengeResponse = io.TypeOf<typeof createChallengeResponse>;
export declare const removeChallengeRequest: io.TypeC<{
    id: io.StringC;
    userId: io.StringC;
}>;
export declare const acceptChallengeRequest: io.TypeC<{
    id: io.StringC;
    userId: io.StringC;
}>;
export declare type AcceptChallengeRequest = io.TypeOf<typeof acceptChallengeRequest>;
export declare const quickPairingRequest: io.TypeC<{
    userId: io.StringC;
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet30: null;
            bullet1: null;
            blitz2: null;
            blitz3: null;
            blitz5: null;
            rapid10: null;
            rapid15: null;
            rapid20: null;
            rapid30: null;
            rapid45: null;
            rapid60: null;
            untimed: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
}>;
export declare type QuickPairingRequest = io.TypeOf<typeof quickPairingRequest>;
export declare const quickPairingMatchedResponse: io.TypeC<{
    matched: io.LiteralC<true>;
    room: io.IntersectionC<[io.TypeC<{
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
                    gameSpecs: io.TypeC<{
                        timeLimit: io.KeyofC<{
                            bullet30: null;
                            bullet1: null;
                            blitz2: null;
                            blitz3: null;
                            blitz5: null;
                            rapid10: null;
                            rapid15: null;
                            rapid20: null;
                            rapid30: null;
                            rapid45: null;
                            rapid60: null;
                            untimed: null;
                        }>;
                        preferredColor: io.UnionC<[io.KeyofC<{
                            black: null;
                        }>, io.KeyofC<{
                            white: null;
                        }>, io.KeyofC<{
                            random: null;
                        }>]>;
                    }>;
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
}>;
export declare type QuickPairingMatchedResponse = io.TypeOf<typeof quickPairingMatchedResponse>;
export declare const quickPairingPendingResponse: io.TypeC<{
    matched: io.LiteralC<false>;
    challenge: io.UnionC<[io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
            timeLimit: io.KeyofC<{
                bullet30: null;
                bullet1: null;
                blitz2: null;
                blitz3: null;
                blitz5: null;
                rapid10: null;
                rapid15: null;
                rapid20: null;
                rapid30: null;
                rapid45: null;
                rapid60: null;
                untimed: null;
            }>;
            preferredColor: io.UnionC<[io.KeyofC<{
                black: null;
            }>, io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                random: null;
            }>]>;
        }>;
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"public">;
    }>]>, io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
            timeLimit: io.KeyofC<{
                bullet30: null;
                bullet1: null;
                blitz2: null;
                blitz3: null;
                blitz5: null;
                rapid10: null;
                rapid15: null;
                rapid20: null;
                rapid30: null;
                rapid45: null;
                rapid60: null;
                untimed: null;
            }>;
            preferredColor: io.UnionC<[io.KeyofC<{
                black: null;
            }>, io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                random: null;
            }>]>;
        }>;
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
    }>]>]>;
}>;
export declare type QuickPairingPendingResponse = io.TypeOf<typeof quickPairingPendingResponse>;
export declare const quickPairingResponse: io.UnionC<[io.TypeC<{
    matched: io.LiteralC<true>;
    room: io.IntersectionC<[io.TypeC<{
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
                    gameSpecs: io.TypeC<{
                        timeLimit: io.KeyofC<{
                            bullet30: null;
                            bullet1: null;
                            blitz2: null;
                            blitz3: null;
                            blitz5: null;
                            rapid10: null;
                            rapid15: null;
                            rapid20: null;
                            rapid30: null;
                            rapid45: null;
                            rapid60: null;
                            untimed: null;
                        }>;
                        preferredColor: io.UnionC<[io.KeyofC<{
                            black: null;
                        }>, io.KeyofC<{
                            white: null;
                        }>, io.KeyofC<{
                            random: null;
                        }>]>;
                    }>;
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
}>, io.TypeC<{
    matched: io.LiteralC<false>;
    challenge: io.UnionC<[io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
            timeLimit: io.KeyofC<{
                bullet30: null;
                bullet1: null;
                blitz2: null;
                blitz3: null;
                blitz5: null;
                rapid10: null;
                rapid15: null;
                rapid20: null;
                rapid30: null;
                rapid45: null;
                rapid60: null;
                untimed: null;
            }>;
            preferredColor: io.UnionC<[io.KeyofC<{
                black: null;
            }>, io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                random: null;
            }>]>;
        }>;
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"public">;
    }>]>, io.IntersectionC<[io.TypeC<{
        gameSpecs: io.TypeC<{
            timeLimit: io.KeyofC<{
                bullet30: null;
                bullet1: null;
                blitz2: null;
                blitz3: null;
                blitz5: null;
                rapid10: null;
                rapid15: null;
                rapid20: null;
                rapid30: null;
                rapid45: null;
                rapid60: null;
                untimed: null;
            }>;
            preferredColor: io.UnionC<[io.KeyofC<{
                black: null;
            }>, io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                random: null;
            }>]>;
        }>;
        id: io.StringC;
        createdBy: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        slug: io.StringC;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
    }>]>]>;
}>]>;
export declare type QuickPairingResponse = io.TypeOf<typeof quickPairingResponse>;
export declare const challengeAcceptedPayload: io.TypeC<{
    kind: io.LiteralC<"challengeAccepted">;
    content: io.TypeC<{
        id: io.StringC;
        userId: io.StringC;
        room: io.IntersectionC<[io.TypeC<{
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
                        gameSpecs: io.TypeC<{
                            timeLimit: io.KeyofC<{
                                bullet30: null;
                                bullet1: null;
                                blitz2: null;
                                blitz3: null;
                                blitz5: null;
                                rapid10: null;
                                rapid15: null;
                                rapid20: null;
                                rapid30: null;
                                rapid45: null;
                                rapid60: null;
                                untimed: null;
                            }>;
                            preferredColor: io.UnionC<[io.KeyofC<{
                                black: null;
                            }>, io.KeyofC<{
                                white: null;
                            }>, io.KeyofC<{
                                random: null;
                            }>]>;
                        }>;
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
    }>;
}>;
export declare type ChallengeAcceptedPayload = io.TypeOf<typeof challengeAcceptedPayload>;
