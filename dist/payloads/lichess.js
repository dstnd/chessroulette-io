"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLichessUserResponsePayload = exports.verifyLichessUserRequestPayload = exports.lichessAuthenticationRedirectUrlResponsePayload = void 0;
var io = require("io-ts");
var lichessRecords_1 = require("../records/lichessRecords");
exports.lichessAuthenticationRedirectUrlResponsePayload = io.type({
    redirectUrl: io.string,
});
exports.verifyLichessUserRequestPayload = io.type({
    token: io.string,
});
exports.verifyLichessUserResponsePayload = io.type({
    user: lichessRecords_1.lichessUserRecord,
});
//# sourceMappingURL=lichess.js.map