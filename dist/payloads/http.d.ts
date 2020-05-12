import * as io from 'io-ts';
export declare const publicRoomResponsePayload: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    type: io.LiteralC<"public">;
}>]>;
export declare type PublicRoomResponsePayload = io.TypeOf<typeof publicRoomResponsePayload>;
export declare const publicRoomsResponsePayload: io.ArrayC<io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>>;
export declare type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;
export declare const privateRoomResponsePayload: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    type: io.LiteralC<"private">;
}>]>;
export declare type PrivateRoomResponsePayload = io.TypeOf<typeof privateRoomResponsePayload>;
export declare const createRoomRequest: io.TypeC<{
    nickname: io.UnionC<[io.StringC, io.UndefinedC]>;
    peerId: io.StringC;
    type: io.KeyofC<{
        public: null;
        private: null;
    }>;
}>;
export declare type CreateRoomRequest = io.TypeOf<typeof createRoomRequest>;
export declare const createRoomResponse: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>;
export declare type CreateRoomResponse = io.TypeOf<typeof createRoomResponse>;
export declare const createChallengeRequest: io.TypeC<{
    peerId: io.StringC;
}>;
export declare type CreateChallengeRequest = io.TypeOf<typeof createChallengeRequest>;
export declare const createChallengeResponse: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>;
export declare type CreateChallengeResponse = CreateRoomResponse;
