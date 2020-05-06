import * as io from 'io-ts';
export declare const publicRoomsResponsePayload: io.ArrayC<io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
}>>;
export declare type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;
