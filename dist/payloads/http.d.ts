import * as io from 'io-ts';
export declare const publicRoomsResponsePayload: io.ArrayC<io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
}>>;
export declare type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;
export declare const createRoomRequest: io.TypeC<{
    nickname: io.UnionC<[io.StringC, io.UndefinedC]>;
    peerId: io.StringC;
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
}>;
export declare type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;
export declare const createRoomResponse: io.UnionC<[io.TypeC<{
    id: io.StringC;
    type: io.LiteralC<"private">;
    code: io.StringC;
}>, io.TypeC<{
    id: io.StringC;
    type: io.LiteralC<"public">;
}>]>;
export declare type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;
export declare const createChallengeRequest: io.TypeC<{
    peerId: io.StringC;
}>;
export declare type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;
export declare const createChallengeResponse: io.UnionC<[io.TypeC<{
    id: io.StringC;
    type: io.LiteralC<"private">;
    code: io.StringC;
}>, io.TypeC<{
    id: io.StringC;
    type: io.LiteralC<"public">;
}>]>;
export declare type CreateChallengeResponse = CreateRoomResponse;
