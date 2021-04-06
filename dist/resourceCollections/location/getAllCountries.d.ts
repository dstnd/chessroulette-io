import * as io from 'io-ts';
import { Resource, RequestOf, ErrResponseOf, OkResponseOf, ResponseOf } from '../../sdk/resource';
export declare namespace GetAllCountries {
    const response: io.RecordC<io.StringC, io.TypeC<{
        name: io.StringC;
        languages: io.ArrayC<io.StringC>;
        flagEmoji: io.StringC;
        flagEmojiU: io.StringC;
        phone: io.StringC;
        currency: io.StringC;
    }>>;
    const resource: Resource<io.UnionC<[io.UndefinedC, io.NullC, io.VoidC, io.TypeC<{}>]>, io.RecordC<io.StringC, io.TypeC<{
        name: io.StringC;
        languages: io.ArrayC<io.StringC>;
        flagEmoji: io.StringC;
        flagEmojiU: io.StringC;
        phone: io.StringC;
        currency: io.StringC;
    }>>, io.TypeC<{
        type: io.LiteralC<"BadRequestError">;
        content: io.UndefinedC;
    }>, void | {} | null | undefined, {
        [x: string]: {
            name: string;
            languages: string[];
            flagEmoji: string;
            flagEmojiU: string;
            phone: string;
            currency: string;
        };
    }, {
        type: "BadRequestError";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
