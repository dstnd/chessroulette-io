"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
var io = require("io-ts");
var AsyncBox_1 = require("../AsyncResult/AsyncBox");
var io_1 = require("../sdk/io");
var ts_results_1 = require("ts-results");
// export const responseErrorCodec = <
//   TErrContent extends io.Mixed,
//   TErrorTypeValue extends string,
//   // TErrType extends io.LiteralType<TErrorTypeValue>,
//   >(
//     type: TErrorTypeValue,
//     content: TErrContent,
// ) => io.type({
//   type: io.literal(type),
//   content: content,
// });
// export const responseErrorCodec2 = <
//   TErrContent extends io.Props,
//   TErrorTypeValue extends string,
//   // TErrType extends io.LiteralType<TErrorTypeValue>,
//   >(
//     type: TErrorTypeValue,
//     content: TErrContent,
// ) => io.type({
//   type: io.string,
//   content: io.type(content),
// });
// type ResponseErrorCodec = ReturnType<typeof responseErrorCodec>;
var responseAsOkResult = function (data) { return io.type({
    ok: io.literal(true),
    data: data,
}); };
var badRequestError = io.type({
    type: io.literal('BadRequest'),
    content: io.string,
});
var badResponseError = io.type({
    type: io.literal('BadResponse'),
    content: io.string,
});
var serverError = io.type({
    type: io.literal('ServerError'),
    content: io.unknown,
});
var badEncodingError = io.type({
    type: io.literal('BadEncoding'),
    content: io.number,
});
var networkError = io.type({
    type: io.literal('NetworkError'),
    content: io.undefined,
});
var badErrorEncoding = io.type({
    type: io.literal('BadErrorEncoding'),
    content: io.type({
        reason: io.string,
    }),
});
// const customError = () => 
var commonErrorsPayload = io.union([
    badRequestError,
    badEncodingError,
    badResponseError,
    networkError,
    badErrorEncoding,
    serverError,
]);
var responseAsErrResult = function (error) { return io.type({
    ok: io.literal(false),
    error: error,
}); };
var responseAsResult = function (ok, customErr) { return io.union([
    ok,
    io.union([
        responseAsErrResult(commonErrorsPayload),
        customErr,
    ]),
]); };
var Resource = /** @class */ (function () {
    function Resource(requestPayloadCodec, responseOkPayloadCodec, responseErrPayloadCodec) {
        if (responseErrPayloadCodec === void 0) { responseErrPayloadCodec = badRequestError; }
        this.requestPayloadCodec = requestPayloadCodec;
        this.responseOkPayloadCodec = responseOkPayloadCodec;
        this.responseErrPayloadCodec = responseErrPayloadCodec;
    }
    Resource.prototype.request = function (requestPayload, senderFn) {
        var _this = this;
        return new AsyncBox_1.AsyncResultWrapper(function () { return __awaiter(_this, void 0, void 0, function () {
            var data, responseAsResultCodec, result, customErrorResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, senderFn(requestPayload)];
                    case 1:
                        data = (_a.sent()).data;
                        responseAsResultCodec = responseAsResult(io.type({
                            ok: io.literal(true),
                            data: this.responseOkPayloadCodec,
                        }), io.type({
                            ok: io.literal(false),
                            error: this.responseErrPayloadCodec,
                        }));
                        result = io_1.toResult(responseAsResultCodec.decode(data));
                        if (!result.ok) {
                            return [2 /*return*/, new ts_results_1.Err({
                                    type: 'BadEncoding',
                                    content: 2,
                                })];
                        }
                        if (!result.val.ok) {
                            customErrorResult = io_1.toResult(this.responseErrPayloadCodec.decode(result.val.error));
                            if (!customErrorResult.ok) {
                                return [2 /*return*/, new ts_results_1.Err({
                                        type: 'BadErrorEncoding',
                                        content: {
                                            reason: 'asd',
                                        },
                                    })];
                            }
                            // TODO: Not supposed to be here
                            return [2 /*return*/, new ts_results_1.Err({
                                    type: 'BadErrorEncoding',
                                    content: {
                                        reason: 'asda',
                                    },
                                })];
                        }
                        return [2 /*return*/, new ts_results_1.Ok(result.val.data)];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, new ts_results_1.Err({
                                type: 'BadRequest',
                                content: '',
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Resource.prototype.parseRequest = function (data) {
        return new AsyncBox_1.AsyncResultWrapper(io_1.toResult(this.requestPayloadCodec.decode(data))
            .mapErr(function () { return ({
            type: 'BadEncoding',
            content: 3,
        }); }));
    };
    Resource.prototype.respond = function (data, senderFn) {
        // TODO: Should we serialize/encode the data before sending?
        senderFn({
            ok: true,
            data: data,
        });
    };
    Resource.prototype.fail = function (error, senderFn) {
        // TODO: Should we serialize/encode the data before sending?
        senderFn({
            ok: false,
            error: error,
        });
    };
    return Resource;
}());
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map