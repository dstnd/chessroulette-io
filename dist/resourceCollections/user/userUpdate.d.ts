import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace UserUpdate {
    const resource: Resource<io.TypeC<{
        firstName: io.StringC;
        lastName: io.StringC;
        countryCode: io.StringC;
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
        username: io.StringC;
        country: io.UnionC<[io.TypeC<{
            name: io.StringC;
            languages: io.ArrayC<io.StringC>;
            flagEmoji: io.StringC;
            flagEmojiU: io.StringC;
            phone: io.StringC;
            currency: io.StringC;
        }>, io.UndefinedC]>;
    }>]>, io.TypeC<{
        type: io.LiteralC<"BadRequestError">;
        content: io.UndefinedC;
    }>, {
        firstName: string;
        lastName: string;
        countryCode: string;
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
        username: string;
        country: {
            name: string;
            languages: string[];
            flagEmoji: string;
            flagEmojiU: string;
            phone: string;
            currency: string;
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
