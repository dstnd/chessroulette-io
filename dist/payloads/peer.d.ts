import * as io from 'io-ts';
export declare const registerPeerRequestPayload: io.TypeC<{
    userInfo: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>;
}>;
export declare type RegisterPeerRequestPayload = io.TypeOf<typeof registerPeerRequestPayload>;
export declare const registerPeerResponsePayload: io.TypeC<{
    id: io.StringC;
    user: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>;
}>;
export declare type RegisterPeerResponsePayload = io.TypeOf<typeof registerPeerResponsePayload>;
