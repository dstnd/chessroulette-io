import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace GetUser {
    const response: import("io-ts").IntersectionC<[import("io-ts").TypeC<{
        id: import("io-ts").StringC;
        firstName: import("io-ts").StringC;
        lastName: import("io-ts").StringC;
        avatarId: import("io-ts").StringC;
        name: import("io-ts").StringC;
    }>, import("io-ts").TypeC<{
        isGuest: import("io-ts").LiteralC<false>;
        email: import("io-ts").StringC;
        profilePicUrl: import("io-ts").UnionC<[import("io-ts").StringC, import("io-ts").UndefinedC]>;
        externalAccounts: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").TypeC<{
            facebook: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").TypeC<{
                userId: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").StringC]>;
            }>]>;
            lichess: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").TypeC<{
                userId: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").StringC]>;
            }>]>;
        }>]>;
    }>]>;
    const resource: Resource<import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").NullC, import("io-ts").VoidC, import("io-ts").TypeC<{}>]>, import("io-ts").IntersectionC<[import("io-ts").TypeC<{
        id: import("io-ts").StringC;
        firstName: import("io-ts").StringC;
        lastName: import("io-ts").StringC;
        avatarId: import("io-ts").StringC;
        name: import("io-ts").StringC;
    }>, import("io-ts").TypeC<{
        isGuest: import("io-ts").LiteralC<false>;
        email: import("io-ts").StringC;
        profilePicUrl: import("io-ts").UnionC<[import("io-ts").StringC, import("io-ts").UndefinedC]>;
        externalAccounts: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").TypeC<{
            facebook: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").TypeC<{
                userId: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").StringC]>;
            }>]>;
            lichess: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").TypeC<{
                userId: import("io-ts").UnionC<[import("io-ts").UndefinedC, import("io-ts").StringC]>;
            }>]>;
        }>]>;
    }>]>, import("io-ts").TypeC<{
        type: import("io-ts").LiteralC<"BadRequestError">;
        content: import("io-ts").UndefinedC;
    }>, void | {} | null | undefined, {
        id: string;
        firstName: string;
        lastName: string;
        avatarId: string;
        name: string;
    } & {
        isGuest: false;
        email: string;
        profilePicUrl: string | undefined;
        externalAccounts: {
            facebook: {
                userId: string | undefined;
            } | undefined;
            lichess: {
                userId: string | undefined;
            } | undefined;
        } | undefined;
    }, {
        type: "BadRequestError";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
