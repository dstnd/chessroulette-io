import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace ConnectExternalAccount {
    const request: io.TypeC<{
        vendor: io.KeyofC<{
            facebook: null;
            lichess: null;
        }>;
        accessToken: io.StringC;
    }>;
    const response: io.IntersectionC<[io.TypeC<{
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
    }>]>;
    const resource: Resource<io.TypeC<{
        vendor: io.KeyofC<{
            facebook: null;
            lichess: null;
        }>;
        accessToken: io.StringC;
    }>, io.IntersectionC<[io.TypeC<{
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
    }>]>, io.TypeC<{
        type: io.LiteralC<"BadRequestError">;
        content: io.UndefinedC;
    }>, {
        vendor: "facebook" | "lichess";
        accessToken: string;
    }, {
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