import * as io from 'io-ts';
export declare const broadcastChatMessagePayload: io.TypeC<{
    kind: io.LiteralC<"broadcastChatMessage">;
    content: io.TypeC<{
        content: io.StringC;
        fromUserId: io.StringC;
        sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>;
}>;
export declare type BroadcastChatMessagePayload = io.TypeOf<typeof broadcastChatMessagePayload>;
