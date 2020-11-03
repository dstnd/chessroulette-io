import * as io from 'io-ts';
export declare const chatMessageRecord: io.TypeC<{
    content: io.StringC;
    fromUserId: io.StringC;
    sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>;
export declare type ChatMessageRecord = io.TypeOf<typeof chatMessageRecord>;
export declare const chatHistoryRecord: io.TypeC<{
    id: io.StringC;
    messages: io.ArrayC<io.TypeC<{
        content: io.StringC;
        fromUserId: io.StringC;
        sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>>;
    usersInfo: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>>;
}>;
export declare type ChatHistoryRecord = io.TypeOf<typeof chatHistoryRecord>;
