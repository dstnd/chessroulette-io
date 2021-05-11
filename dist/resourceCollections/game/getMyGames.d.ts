import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace GetMyGames {
    const resource: Resource<io.UnionC<[io.UndefinedC, io.NullC, io.VoidC, io.TypeC<{}>]>, io.ArrayC<io.IntersectionC<[io.UnionC<[io.TypeC<{
        state: io.LiteralC<"pending">;
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
        players: io.TupleC<[io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>]>;
        timeLeft: io.TypeC<{
            white: io.NumberC;
            black: io.NumberC;
        }>;
        pgn: io.UndefinedC;
        history: io.UndefinedC;
        winner: io.UndefinedC;
        lastMoveBy: io.UndefinedC;
        lastMoveAt: io.UndefinedC;
        startedAt: io.UndefinedC;
        lastActivityAt: io.UndefinedC;
    }>, io.TypeC<{
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
        state: io.LiteralC<"started">;
        players: io.TupleC<[io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>]>;
        timeLeft: io.TypeC<{
            white: io.NumberC;
            black: io.NumberC;
        }>;
        pgn: io.StringC;
        history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
            from: io.KeyofC<{
                a8: undefined;
                b8: undefined;
                c8: undefined;
                d8: undefined;
                e8: undefined;
                f8: undefined;
                g8: undefined;
                h8: undefined;
                a7: undefined;
                b7: undefined;
                c7: undefined;
                d7: undefined;
                e7: undefined;
                f7: undefined;
                g7: undefined;
                h7: undefined;
                a6: undefined;
                b6: undefined;
                c6: undefined;
                d6: undefined;
                e6: undefined;
                f6: undefined;
                g6: undefined;
                h6: undefined;
                a5: undefined;
                b5: undefined;
                c5: undefined;
                d5: undefined;
                e5: undefined;
                f5: undefined;
                g5: undefined;
                h5: undefined;
                a4: undefined;
                b4: undefined;
                c4: undefined;
                d4: undefined;
                e4: undefined;
                f4: undefined;
                g4: undefined;
                h4: undefined;
                a3: undefined;
                b3: undefined;
                c3: undefined;
                d3: undefined;
                e3: undefined;
                f3: undefined;
                g3: undefined;
                h3: undefined;
                a2: undefined;
                b2: undefined;
                c2: undefined;
                d2: undefined;
                e2: undefined;
                f2: undefined;
                g2: undefined;
                h2: undefined;
                a1: undefined;
                b1: undefined;
                c1: undefined;
                d1: undefined;
                e1: undefined;
                f1: undefined;
                g1: undefined;
                h1: undefined;
            }>;
            to: io.KeyofC<{
                a8: undefined;
                b8: undefined;
                c8: undefined;
                d8: undefined;
                e8: undefined;
                f8: undefined;
                g8: undefined;
                h8: undefined;
                a7: undefined;
                b7: undefined;
                c7: undefined;
                d7: undefined;
                e7: undefined;
                f7: undefined;
                g7: undefined;
                h7: undefined;
                a6: undefined;
                b6: undefined;
                c6: undefined;
                d6: undefined;
                e6: undefined;
                f6: undefined;
                g6: undefined;
                h6: undefined;
                a5: undefined;
                b5: undefined;
                c5: undefined;
                d5: undefined;
                e5: undefined;
                f5: undefined;
                g5: undefined;
                h5: undefined;
                a4: undefined;
                b4: undefined;
                c4: undefined;
                d4: undefined;
                e4: undefined;
                f4: undefined;
                g4: undefined;
                h4: undefined;
                a3: undefined;
                b3: undefined;
                c3: undefined;
                d3: undefined;
                e3: undefined;
                f3: undefined;
                g3: undefined;
                h3: undefined;
                a2: undefined;
                b2: undefined;
                c2: undefined;
                d2: undefined;
                e2: undefined;
                f2: undefined;
                g2: undefined;
                h2: undefined;
                a1: undefined;
                b1: undefined;
                c1: undefined;
                d1: undefined;
                e1: undefined;
                f1: undefined;
                g1: undefined;
                h1: undefined;
            }>;
        }>, io.PartialC<{
            promotion: io.KeyofC<{
                n: undefined;
                b: undefined;
                r: undefined;
                q: undefined;
            }>;
        }>]>, io.TypeC<{
            san: io.StringC;
            color: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
            clock: io.NumberC;
        }>]>>;
        winner: io.UndefinedC;
        lastMoveBy: io.KeyofC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    firstName: io.StringC;
                    lastName: io.StringC;
                    avatarId: io.StringC;
                    name: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    firstName: io.StringC;
                    lastName: io.StringC;
                    avatarId: io.StringC;
                    name: io.StringC;
                }>;
            }>;
        }>;
        lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>, io.TypeC<{
        state: io.LiteralC<"finished">;
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
        players: io.TupleC<[io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>]>;
        timeLeft: io.TypeC<{
            white: io.NumberC;
            black: io.NumberC;
        }>;
        pgn: io.StringC;
        history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
            from: io.KeyofC<{
                a8: undefined;
                b8: undefined;
                c8: undefined;
                d8: undefined;
                e8: undefined;
                f8: undefined;
                g8: undefined;
                h8: undefined;
                a7: undefined;
                b7: undefined;
                c7: undefined;
                d7: undefined;
                e7: undefined;
                f7: undefined;
                g7: undefined;
                h7: undefined;
                a6: undefined;
                b6: undefined;
                c6: undefined;
                d6: undefined;
                e6: undefined;
                f6: undefined;
                g6: undefined;
                h6: undefined;
                a5: undefined;
                b5: undefined;
                c5: undefined;
                d5: undefined;
                e5: undefined;
                f5: undefined;
                g5: undefined;
                h5: undefined;
                a4: undefined;
                b4: undefined;
                c4: undefined;
                d4: undefined;
                e4: undefined;
                f4: undefined;
                g4: undefined;
                h4: undefined;
                a3: undefined;
                b3: undefined;
                c3: undefined;
                d3: undefined;
                e3: undefined;
                f3: undefined;
                g3: undefined;
                h3: undefined;
                a2: undefined;
                b2: undefined;
                c2: undefined;
                d2: undefined;
                e2: undefined;
                f2: undefined;
                g2: undefined;
                h2: undefined;
                a1: undefined;
                b1: undefined;
                c1: undefined;
                d1: undefined;
                e1: undefined;
                f1: undefined;
                g1: undefined;
                h1: undefined;
            }>;
            to: io.KeyofC<{
                a8: undefined;
                b8: undefined;
                c8: undefined;
                d8: undefined;
                e8: undefined;
                f8: undefined;
                g8: undefined;
                h8: undefined;
                a7: undefined;
                b7: undefined;
                c7: undefined;
                d7: undefined;
                e7: undefined;
                f7: undefined;
                g7: undefined;
                h7: undefined;
                a6: undefined;
                b6: undefined;
                c6: undefined;
                d6: undefined;
                e6: undefined;
                f6: undefined;
                g6: undefined;
                h6: undefined;
                a5: undefined;
                b5: undefined;
                c5: undefined;
                d5: undefined;
                e5: undefined;
                f5: undefined;
                g5: undefined;
                h5: undefined;
                a4: undefined;
                b4: undefined;
                c4: undefined;
                d4: undefined;
                e4: undefined;
                f4: undefined;
                g4: undefined;
                h4: undefined;
                a3: undefined;
                b3: undefined;
                c3: undefined;
                d3: undefined;
                e3: undefined;
                f3: undefined;
                g3: undefined;
                h3: undefined;
                a2: undefined;
                b2: undefined;
                c2: undefined;
                d2: undefined;
                e2: undefined;
                f2: undefined;
                g2: undefined;
                h2: undefined;
                a1: undefined;
                b1: undefined;
                c1: undefined;
                d1: undefined;
                e1: undefined;
                f1: undefined;
                g1: undefined;
                h1: undefined;
            }>;
        }>, io.PartialC<{
            promotion: io.KeyofC<{
                n: undefined;
                b: undefined;
                r: undefined;
                q: undefined;
            }>;
        }>]>, io.TypeC<{
            san: io.StringC;
            color: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
            clock: io.NumberC;
        }>]>>;
        winner: io.UnionC<[io.UnionC<[io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            black: null;
        }>]>, io.LiteralC<"1/2">]>;
        lastMoveBy: io.KeyofC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    firstName: io.StringC;
                    lastName: io.StringC;
                    avatarId: io.StringC;
                    name: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    firstName: io.StringC;
                    lastName: io.StringC;
                    avatarId: io.StringC;
                    name: io.StringC;
                }>;
            }>;
        }>;
        lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>, io.TypeC<{
        state: io.LiteralC<"neverStarted">;
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
        players: io.TupleC<[io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>]>;
        timeLeft: io.TypeC<{
            white: io.NumberC;
            black: io.NumberC;
        }>;
        pgn: io.UndefinedC;
        history: io.UndefinedC;
        winner: io.UndefinedC;
        lastMoveBy: io.UndefinedC;
        lastMoveAt: io.UndefinedC;
        startedAt: io.UndefinedC;
        lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>, io.TypeC<{
        state: io.LiteralC<"stopped">;
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
        players: io.TupleC<[io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>, io.UnionC<[io.TypeC<{
            color: io.LiteralC<"black">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>, io.TypeC<{
            color: io.LiteralC<"white">;
            user: io.TypeC<{
                id: io.StringC;
                firstName: io.StringC;
                lastName: io.StringC;
                avatarId: io.StringC;
                name: io.StringC;
            }>;
        }>]>]>;
        timeLeft: io.TypeC<{
            white: io.NumberC;
            black: io.NumberC;
        }>;
        pgn: io.StringC;
        history: io.ArrayC<io.IntersectionC<[io.IntersectionC<[io.TypeC<{
            from: io.KeyofC<{
                a8: undefined;
                b8: undefined;
                c8: undefined;
                d8: undefined;
                e8: undefined;
                f8: undefined;
                g8: undefined;
                h8: undefined;
                a7: undefined;
                b7: undefined;
                c7: undefined;
                d7: undefined;
                e7: undefined;
                f7: undefined;
                g7: undefined;
                h7: undefined;
                a6: undefined;
                b6: undefined;
                c6: undefined;
                d6: undefined;
                e6: undefined;
                f6: undefined;
                g6: undefined;
                h6: undefined;
                a5: undefined;
                b5: undefined;
                c5: undefined;
                d5: undefined;
                e5: undefined;
                f5: undefined;
                g5: undefined;
                h5: undefined;
                a4: undefined;
                b4: undefined;
                c4: undefined;
                d4: undefined;
                e4: undefined;
                f4: undefined;
                g4: undefined;
                h4: undefined;
                a3: undefined;
                b3: undefined;
                c3: undefined;
                d3: undefined;
                e3: undefined;
                f3: undefined;
                g3: undefined;
                h3: undefined;
                a2: undefined;
                b2: undefined;
                c2: undefined;
                d2: undefined;
                e2: undefined;
                f2: undefined;
                g2: undefined;
                h2: undefined;
                a1: undefined;
                b1: undefined;
                c1: undefined;
                d1: undefined;
                e1: undefined;
                f1: undefined;
                g1: undefined;
                h1: undefined;
            }>;
            to: io.KeyofC<{
                a8: undefined;
                b8: undefined;
                c8: undefined;
                d8: undefined;
                e8: undefined;
                f8: undefined;
                g8: undefined;
                h8: undefined;
                a7: undefined;
                b7: undefined;
                c7: undefined;
                d7: undefined;
                e7: undefined;
                f7: undefined;
                g7: undefined;
                h7: undefined;
                a6: undefined;
                b6: undefined;
                c6: undefined;
                d6: undefined;
                e6: undefined;
                f6: undefined;
                g6: undefined;
                h6: undefined;
                a5: undefined;
                b5: undefined;
                c5: undefined;
                d5: undefined;
                e5: undefined;
                f5: undefined;
                g5: undefined;
                h5: undefined;
                a4: undefined;
                b4: undefined;
                c4: undefined;
                d4: undefined;
                e4: undefined;
                f4: undefined;
                g4: undefined;
                h4: undefined;
                a3: undefined;
                b3: undefined;
                c3: undefined;
                d3: undefined;
                e3: undefined;
                f3: undefined;
                g3: undefined;
                h3: undefined;
                a2: undefined;
                b2: undefined;
                c2: undefined;
                d2: undefined;
                e2: undefined;
                f2: undefined;
                g2: undefined;
                h2: undefined;
                a1: undefined;
                b1: undefined;
                c1: undefined;
                d1: undefined;
                e1: undefined;
                f1: undefined;
                g1: undefined;
                h1: undefined;
            }>;
        }>, io.PartialC<{
            promotion: io.KeyofC<{
                n: undefined;
                b: undefined;
                r: undefined;
                q: undefined;
            }>;
        }>]>, io.TypeC<{
            san: io.StringC;
            color: io.UnionC<[io.KeyofC<{
                white: null;
            }>, io.KeyofC<{
                black: null;
            }>]>;
            clock: io.NumberC;
        }>]>>;
        winner: io.UnionC<[io.UnionC<[io.KeyofC<{
            white: null;
        }>, io.KeyofC<{
            black: null;
        }>]>, io.LiteralC<"1/2">]>;
        lastMoveBy: io.KeyofC<{
            white: io.TypeC<{
                color: io.LiteralC<"white">;
                user: io.TypeC<{
                    id: io.StringC;
                    firstName: io.StringC;
                    lastName: io.StringC;
                    avatarId: io.StringC;
                    name: io.StringC;
                }>;
            }>;
            black: io.TypeC<{
                color: io.LiteralC<"black">;
                user: io.TypeC<{
                    id: io.StringC;
                    firstName: io.StringC;
                    lastName: io.StringC;
                    avatarId: io.StringC;
                    name: io.StringC;
                }>;
            }>;
        }>;
        lastMoveAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        startedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>, io.TypeC<{
        id: io.StringC;
        createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        updatedAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>>, io.TypeC<{
        type: io.LiteralC<"BadRequestError">;
        content: io.UndefinedC;
    }>, void | {} | null | undefined, (({
        state: "pending";
        timeLimit: "bullet30" | "bullet1" | "blitz2" | "blitz3" | "blitz5" | "rapid10" | "rapid15" | "rapid20" | "rapid30" | "rapid45" | "rapid60" | "untimed";
        players: [{
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }, {
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: undefined;
        history: undefined;
        winner: undefined;
        lastMoveBy: undefined;
        lastMoveAt: undefined;
        startedAt: undefined;
        lastActivityAt: undefined;
    } & {
        id: string;
        createdAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        updatedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    }) | ({
        timeLimit: "bullet30" | "bullet1" | "blitz2" | "blitz3" | "blitz5" | "rapid10" | "rapid15" | "rapid20" | "rapid30" | "rapid45" | "rapid60" | "untimed";
        state: "started";
        players: [{
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }, {
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: string;
        history: ({
            from: "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" | "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" | "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" | "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" | "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" | "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" | "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" | "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1";
            to: "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" | "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" | "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" | "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" | "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" | "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" | "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" | "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1";
        } & {
            promotion?: "n" | "b" | "r" | "q" | undefined;
        } & {
            san: string;
            color: "white" | "black";
            clock: number;
        })[];
        winner: undefined;
        lastMoveBy: "white" | "black";
        lastMoveAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        startedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        lastActivityAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    } & {
        id: string;
        createdAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        updatedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    }) | ({
        state: "finished";
        timeLimit: "bullet30" | "bullet1" | "blitz2" | "blitz3" | "blitz5" | "rapid10" | "rapid15" | "rapid20" | "rapid30" | "rapid45" | "rapid60" | "untimed";
        players: [{
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }, {
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: string;
        history: ({
            from: "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" | "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" | "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" | "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" | "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" | "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" | "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" | "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1";
            to: "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" | "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" | "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" | "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" | "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" | "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" | "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" | "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1";
        } & {
            promotion?: "n" | "b" | "r" | "q" | undefined;
        } & {
            san: string;
            color: "white" | "black";
            clock: number;
        })[];
        winner: "white" | "black" | "1/2";
        lastMoveBy: "white" | "black";
        lastMoveAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        startedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        lastActivityAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    } & {
        id: string;
        createdAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        updatedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    }) | ({
        state: "neverStarted";
        timeLimit: "bullet30" | "bullet1" | "blitz2" | "blitz3" | "blitz5" | "rapid10" | "rapid15" | "rapid20" | "rapid30" | "rapid45" | "rapid60" | "untimed";
        players: [{
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }, {
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: undefined;
        history: undefined;
        winner: undefined;
        lastMoveBy: undefined;
        lastMoveAt: undefined;
        startedAt: undefined;
        lastActivityAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    } & {
        id: string;
        createdAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        updatedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    }) | ({
        state: "stopped";
        timeLimit: "bullet30" | "bullet1" | "blitz2" | "blitz3" | "blitz5" | "rapid10" | "rapid15" | "rapid20" | "rapid30" | "rapid45" | "rapid60" | "untimed";
        players: [{
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }, {
            color: "white";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        } | {
            color: "black";
            user: {
                id: string;
                firstName: string;
                lastName: string;
                avatarId: string;
                name: string;
            };
        }];
        timeLeft: {
            white: number;
            black: number;
        };
        pgn: string;
        history: ({
            from: "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" | "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" | "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" | "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" | "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" | "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" | "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" | "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1";
            to: "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" | "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" | "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" | "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" | "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" | "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" | "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" | "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1";
        } & {
            promotion?: "n" | "b" | "r" | "q" | undefined;
        } & {
            san: string;
            color: "white" | "black";
            clock: number;
        })[];
        winner: "white" | "black" | "1/2";
        lastMoveBy: "white" | "black";
        lastMoveAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        startedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        lastActivityAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    } & {
        id: string;
        createdAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
        updatedAt: import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand;
    }))[], {
        type: "BadRequestError";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
