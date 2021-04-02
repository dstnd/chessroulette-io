import * as io from 'io-ts';
export declare const gameJoinRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameJoinRequest">;
    content: io.UndefinedC;
}>;
export declare type GameJoinRequestPayload = io.TypeOf<typeof gameJoinRequestPayload>;
export declare const gameDrawOfferingRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameDrawOfferingRequest">;
    content: io.UndefinedC;
}>;
export declare type GameDrawOfferingRequestPayload = io.TypeOf<typeof gameDrawOfferingRequestPayload>;
export declare const gameDrawAcceptRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameDrawAcceptRequest">;
    content: io.UndefinedC;
}>;
export declare type GameDrawAcceptRequestPayload = io.TypeOf<typeof gameDrawAcceptRequestPayload>;
export declare const gameDrawDenyRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameDrawDenyRequest">;
    content: io.UndefinedC;
}>;
export declare type GameDrawDenyRequestPayload = io.TypeOf<typeof gameDrawDenyRequestPayload>;
export declare const gameResignationRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameResignationRequest">;
    content: io.UndefinedC;
}>;
export declare type GameResignationRequestPayload = io.TypeOf<typeof gameResignationRequestPayload>;
export declare const gameAbortionRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameAbortionRequest">;
    content: io.UndefinedC;
}>;
export declare type GameAbortionRequestPayload = io.TypeOf<typeof gameAbortionRequestPayload>;
export declare const gameMoveRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameMoveRequest">;
    content: io.IntersectionC<[io.TypeC<{
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
    }>]>;
}>;
export declare type GameMoveRequestPayload = io.TypeOf<typeof gameMoveRequestPayload>;
export declare const gameRematchOfferingRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameRematchOfferingRequest">;
    content: io.UndefinedC;
}>;
export declare type GameRematchOfferingRequestPayload = io.TypeOf<typeof gameRematchOfferingRequestPayload>;
export declare const gameRematchAcceptRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameRematchAcceptRequest">;
    content: io.UndefinedC;
}>;
export declare type GameRematchAcceptRequestPayload = io.TypeOf<typeof gameRematchAcceptRequestPayload>;
export declare const gameRematchDenyRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameRematchDenyRequest">;
    content: io.UndefinedC;
}>;
export declare type GameRematchDenyRequestPayload = io.TypeOf<typeof gameRematchDenyRequestPayload>;
export declare const gameOfferingCancelRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameOfferingCancelRequest">;
    content: io.UndefinedC;
}>;
export declare type GameOfferingCancelRequestPayload = io.TypeOf<typeof gameOfferingCancelRequestPayload>;
export declare const gameStatusCheckRequestPayload: io.TypeC<{
    kind: io.LiteralC<"gameStatusCheckRequest">;
    content: io.UndefinedC;
}>;
export declare type GameStatusCheckRequestPayload = io.TypeOf<typeof gameStatusCheckRequestPayload>;
export declare const gameActionRequestPayload: io.UnionC<[io.TypeC<{
    kind: io.LiteralC<"gameJoinRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameDrawAcceptRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameDrawDenyRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameDrawOfferingRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameResignationRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameAbortionRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameMoveRequest">;
    content: io.IntersectionC<[io.TypeC<{
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
    }>]>;
}>, io.TypeC<{
    kind: io.LiteralC<"gameRematchAcceptRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameRematchDenyRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameRematchOfferingRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameOfferingCancelRequest">;
    content: io.UndefinedC;
}>, io.TypeC<{
    kind: io.LiteralC<"gameStatusCheckRequest">;
    content: io.UndefinedC;
}>]>;
export declare type GameActionRequestPayload = io.TypeOf<typeof gameActionRequestPayload>;
export declare const joinedGameUpdatedPayload: io.TypeC<{
    kind: io.LiteralC<"joinedGameUpdated">;
    content: io.IntersectionC<[io.UnionC<[io.TypeC<{
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
        history: io.UndefinedC;
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
        history: io.UndefinedC;
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
    }>]>;
}>;
export declare type JoinedGameUpdatedPayload = io.TypeOf<typeof joinedGameUpdatedPayload>;
