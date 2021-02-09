import { ErrResponseOf, OkResponseOf, RequestOf, Resource } from 'src/sdk/resource';
import * as io from 'io-ts';
export declare namespace GuestAuthentication {
    const resource: Resource<io.TypeC<{
        guestUser: io.UnionC<[io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<true>;
            sid: io.StringC;
        }>]>, io.UndefinedC]>;
    }>, io.TypeC<{
        guest: io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<true>;
            sid: io.StringC;
        }>]>;
    }>, io.TypeC<{
        type: io.LiteralC<"BadRequest">;
        content: io.StringC;
    }>, {
        guestUser: ({
            id: string;
            firstName: string;
            lastName: string;
            avatarId: string;
            name: string;
        } & {
            isGuest: true;
            sid: string;
        }) | undefined;
    }, {
        guest: {
            id: string;
            firstName: string;
            lastName: string;
            avatarId: string;
            name: string;
        } & {
            isGuest: true;
            sid: string;
        };
    }, {
        type: "BadRequest";
        content: string;
    }>;
    type Request = RequestOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type Response = ErrResponse | OkResponse;
}
