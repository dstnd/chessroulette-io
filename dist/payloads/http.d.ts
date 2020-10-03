import * as io from 'io-ts';
export declare const iceServerRecord: io.TypeC<{
    url: io.StringC;
    urls: io.StringC;
    credential: io.UnionC<[io.StringC, io.UndefinedC]>;
    username: io.UnionC<[io.StringC, io.UndefinedC]>;
}>;
export declare type IceServerRecord = io.TypeOf<typeof iceServerRecord>;
export declare const iceServersResponse: io.ArrayC<io.TypeC<{
    url: io.StringC;
    urls: io.StringC;
    credential: io.UnionC<[io.StringC, io.UndefinedC]>;
    username: io.UnionC<[io.StringC, io.UndefinedC]>;
}>>;
export declare type IceServersResponse = io.TypeOf<typeof iceServersResponse>;
