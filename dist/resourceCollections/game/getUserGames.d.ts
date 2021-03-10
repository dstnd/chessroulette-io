import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace GetUserGames {
    const resource: Resource<io.TypeC<{
        userId: io.StringC;
    }>, io.ArrayC<io.IntersectionC<[io.UnionC<[io.TypeC<{
        state: io.LiteralC<"pending">;
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
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
        winner: io.UndefinedC;
        lastMoveBy: io.UndefinedC;
        lastMoveAt: io.UndefinedC;
        startedAt: io.UndefinedC;
        lastActivityAt: io.UndefinedC;
    }>, io.TypeC<{
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
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
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
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
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
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
        winner: io.UndefinedC;
        lastMoveBy: io.UndefinedC;
        lastMoveAt: io.UndefinedC;
        startedAt: io.UndefinedC;
        lastActivityAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>, io.TypeC<{
        state: io.LiteralC<"stopped">;
        timeLimit: io.KeyofC<{
            bullet: null;
            untimed: null;
            blitz: null;
            rapid: null;
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
    }>, {
        userId: string;
    }, (({
        state: "pending";
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
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
        state: "neverStarted";
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
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
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
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
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
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
        state: "stopped";
        timeLimit: "bullet" | "untimed" | "blitz" | "rapid";
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
