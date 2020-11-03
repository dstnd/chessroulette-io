"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastChatMessagePayload = void 0;
var io = require("io-ts");
var chatRecords_1 = require("../records/chatRecords");
exports.broadcastChatMessagePayload = io.type({
    kind: io.literal('broadcastChatMessage'),
    content: chatRecords_1.chatMessageRecord,
});
//# sourceMappingURL=chat.js.map