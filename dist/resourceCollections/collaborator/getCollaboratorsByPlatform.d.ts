import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace GetCollaboratorsByPlatform {
    const response: io.ArrayC<io.TypeC<{
        email: io.StringC;
        platform: io.KeyofC<{
            Twitch: boolean;
        }>;
        profileUrl: io.StringC;
        profilePicUrl: io.StringC;
        featuringRank: io.NumberC;
        extra: io.UnionC<[io.UndefinedC, io.TypeC<{}>]>;
    }>>;
    const resource: Resource<io.TypeC<{
        platform: io.KeyofC<{
            Twitch: boolean;
        }>;
    }>, io.ArrayC<io.TypeC<{
        email: io.StringC;
        platform: io.KeyofC<{
            Twitch: boolean;
        }>;
        profileUrl: io.StringC;
        profilePicUrl: io.StringC;
        featuringRank: io.NumberC;
        extra: io.UnionC<[io.UndefinedC, io.TypeC<{}>]>;
    }>>, io.TypeC<{
        type: io.LiteralC<"BadRequestError">;
        content: io.UndefinedC;
    }>, {
        platform: "Twitch";
    }, {
        email: string;
        platform: "Twitch";
        profileUrl: string;
        profilePicUrl: string;
        featuringRank: number;
        extra: {} | undefined;
    }[], {
        type: "BadRequestError";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
