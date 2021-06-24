"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCollaboratorsByPlatform = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var collaboratorRecord_1 = require("src/records/collaboratorRecord");
var GetCollaboratorsByPlatform;
(function (GetCollaboratorsByPlatform) {
    var request = io.type({
        platform: collaboratorRecord_1.collaboratorPlatform,
    });
    GetCollaboratorsByPlatform.response = io.array(collaboratorRecord_1.collaboratorRecord);
    GetCollaboratorsByPlatform.resource = new resource_1.Resource(request, GetCollaboratorsByPlatform.response);
})(GetCollaboratorsByPlatform = exports.GetCollaboratorsByPlatform || (exports.GetCollaboratorsByPlatform = {}));
//# sourceMappingURL=getCollaboratorsByPlatform.js.map