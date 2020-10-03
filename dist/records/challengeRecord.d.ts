import * as io from 'io-ts';
export declare const gameSpecsRecord: io.TypeC<{
    timeLimit: io.KeyofC<{
        bullet: null;
        untimed: null;
        blitz: null;
        rapid: null;
    }>;
    preferredColor: io.UnionC<[io.KeyofC<{
        black: null;
    }>, io.KeyofC<{
        white: null;
    }>, io.KeyofC<{
        random: null;
    }>]>;
}>;
export declare type GameSpecsRecord = io.TypeOf<typeof gameSpecsRecord>;
export declare const baseChallengeRecord: io.TypeC<{
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
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
export declare const challengeRecord: io.IntersectionC<[io.TypeC<{
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
}>, io.TypeC<{
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>]>;
export declare type ChallengeRecord = io.TypeOf<typeof challengeRecord>;
export declare const publicChallengeRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
}>, io.TypeC<{
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>]>, io.TypeC<{
    type: io.LiteralC<"public">;
}>]>;
export declare type PublicChallengeRecord = io.TypeOf<typeof publicChallengeRecord>;
export declare const privateChallengeRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
    gameSpecs: io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
        }>;
        preferredColor: io.UnionC<[io.KeyofC<{
            black: null;
        }>, io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            random: null;
        }>]>;
    }>;
}>, io.TypeC<{
    id: io.StringC;
    createdBy: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    slug: io.StringC;
}>]>, io.TypeC<{
    type: io.LiteralC<"private">;
}>]>;
export declare type PrivateChallengeRecord = io.TypeOf<typeof privateChallengeRecord>;
