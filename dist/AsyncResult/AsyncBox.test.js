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
var ts_results_1 = require("ts-results");
var AsyncBox_1 = require("./AsyncBox");
var util_1 = require("./util");
describe('map', function () {
    test('runs on OkResult with primitives', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test('runs on OkResult with complex types', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok([2, 3, 5]));
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith([2, 3, 5]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('does NOT run on ErrResult', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err([2, 3, 5]));
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).not.toHaveBeenCalledWith([2, 3, 5]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('multiple chained maps run correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    res
                        .map(function (v) { return v + 2; })
                        .map(function (v) { return v * 10; })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(40);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('mapErr', function () {
    test('runs on ErrResult', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    spy = jest.fn();
                    res.mapErr(function (e) {
                        util_1.isExactType(true);
                        spy(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith('SimpleError');
                    return [2 /*return*/];
            }
        });
    }); });
    test('does NOT run on OkResult', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok([2, 3, 5]));
                    spy = jest.fn();
                    res.mapErr(function (e) {
                        util_1.isExactType(true);
                        spy(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).not.toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
    test('runs with multiple mapErr chained', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    spy = jest.fn();
                    res
                        .mapErr(function (e) { return e + 1; })
                        .mapErr(function (e) { return e + 2; })
                        .mapErr(function (e) { return e + 3; })
                        .mapErr(function (e) {
                        util_1.isExactType(true);
                        spy(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith('SimpleError123');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('flatMap', function () {
    test('runs on OkResult with primitives returning other OkResult', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    res
                        .flatMap(function (v) { return new ts_results_1.Ok(v + 2); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(4);
                    return [2 /*return*/];
            }
        });
    }); });
    test('runs on OkResult returning an ErrResult', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy, errorSpy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    errorSpy = jest.fn();
                    res
                        .flatMap(function (v) { return new ts_results_1.Err('SimpleError'); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    })
                        .mapErr(function (e) {
                        util_1.isExactType(true);
                        errorSpy(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).not.toHaveBeenCalled();
                    expect(errorSpy).toHaveBeenCalledWith('SimpleError');
                    return [2 /*return*/];
            }
        });
    }); });
    test('runs correctly with multiple flatmaps chained', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy, errorSpy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    errorSpy = jest.fn();
                    res
                        .flatMap(function (v) { return new ts_results_1.Ok(v + 2); })
                        .flatMap(function (v) { return new ts_results_1.Ok(v * 10); })
                        .flatMap(function (v) { return new ts_results_1.Ok(v * 12); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    })
                        .mapErr(function (e) {
                        errorSpy(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(480);
                    expect(errorSpy).not.toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
    test('can return an AsyncResultWrapper of Ok', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    res
                        .flatMap(function (v) { return new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(v + 2)); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(4);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can return an AsyncResultWrapper of Err', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy, spyErr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spy = jest.fn();
                    spyErr = jest.fn();
                    res
                        .flatMap(function (v) { return new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError')); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    })
                        .mapErr(function (e) {
                        // isExactType<typeof e, string>(true);
                        spyErr(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).not.toHaveBeenCalled();
                    expect(spyErr).toHaveBeenCalledWith('SimpleError');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('flatMapErr', function () {
    test('runs on ErrResult returning an OkResult', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    spy = jest.fn();
                    res
                        .flatMapErr(function (v) { return new ts_results_1.Ok(2); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test('runs on ErrResult returning an OkResult and doesnt call map before', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, beforeSpy, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    beforeSpy = jest.fn();
                    spy = jest.fn();
                    res
                        .map(function (v) {
                        beforeSpy(v);
                        return v;
                    })
                        .flatMapErr(function (v) { return new ts_results_1.Ok(2); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(beforeSpy).not.toHaveBeenCalled();
                    expect(spy).toHaveBeenCalledWith(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test('gets called with the error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    spy = jest.fn();
                    res.flatMapErr(spy);
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith('SimpleError');
                    return [2 /*return*/];
            }
        });
    }); });
    test('gets called with the previous error in a mix', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    spy = jest.fn();
                    res
                        .flatMapErr(function (e) { return new ts_results_1.Ok(e + "1"); })
                        .flatMap(function (v) { return new ts_results_1.Err(v); })
                        .flatMapErr(function (e) { return new ts_results_1.Ok(e + "2"); })
                        .flatMap(function (v) { return new ts_results_1.Err(v); })
                        .mapErr(spy);
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith('SimpleError12');
                    return [2 /*return*/];
            }
        });
    }); });
    test('combination of flatMap returning AsyncErr and flatMapErr returnign AsyncOk', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, mapErrSpy, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    mapErrSpy = jest.fn();
                    spy = jest.fn();
                    res
                        .flatMap(function () { return new ts_results_1.Err('FirstError'); })
                        .mapErr(function (e) {
                        mapErrSpy(e);
                        return e;
                    })
                        .flatMapErr(function (v) { return new ts_results_1.Ok(3); })
                        .map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(mapErrSpy).toHaveBeenCalledWith('FirstError');
                    expect(spy).toHaveBeenCalledWith(3);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Resolve', function () {
    test('works with OkResult and sync resolver', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    return [4 /*yield*/, res.resolve()];
                case 1:
                    r = _a.sent();
                    expect(r.ok).toBe(true);
                    if (r.ok) {
                        util_1.isExactType(true);
                    }
                    else {
                        throw 'This should never occur!';
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    test('works with ErrResult and sync resolver', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Err('SimpleError'));
                    return [4 /*yield*/, res.resolve()];
                case 1:
                    r = _a.sent();
                    expect(r.ok).toBe(false);
                    if (!r.ok) {
                        util_1.isExactType(true);
                    }
                    else {
                        throw 'This should never occur!';
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    test('works with a long chain of maps, mapErr and flatMap', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spyErr, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(2));
                    spyErr = jest.fn();
                    return [4 /*yield*/, res
                            .map(function (v) { return v + 2; })
                            .map(function (v) { return v + 10; })
                            .flatMap(function (v) { return new ts_results_1.Ok(v + 6); })
                            .flatMap(function (v) { return new AsyncBox_1.AsyncResultWrapper(new ts_results_1.Ok(v * 2)); })
                            .mapErr(spyErr)
                            .resolve()];
                case 1:
                    r = _a.sent();
                    expect(r.ok).toBe(true);
                    expect(r.val).toBe(40);
                    expect(spyErr).not.toHaveBeenCalled();
                    if (r.ok) {
                        util_1.isExactType(true);
                    }
                    else {
                        throw 'This should never occur!';
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    test.skip('fails with resolution error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy, spyErr, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncOk(Promise.reject());
                    spy = jest.fn();
                    spyErr = jest.fn();
                    return [4 /*yield*/, res
                            .map(spy)
                            .mapErr(spyErr)
                            .resolve()];
                case 1:
                    r = _a.sent();
                    expect(spyErr).toHaveBeenCalledWith('ResolutionError');
                    expect(spy).not.toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('AsyncOk', function () {
    test('works from primitives', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncOk(2);
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test('works from complex types', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncOk([2, 3]);
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith([2, 3]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('works from Promises', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncOk(Promise.resolve([2, 3]));
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith([2, 3]);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('AsyncErr', function () {
    test('works from String Errors', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncErr('SimpleError');
                    spy = jest.fn();
                    res.mapErr(function (e) {
                        util_1.isExactType(true);
                        spy(e);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith('SimpleError');
                    return [2 /*return*/];
            }
        });
    }); });
    test('it adds the default Resolution Error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            res = new AsyncBox_1.AsyncErr((Math.random() < 1)
                ? 'SimpleError'
                : 'AnotherError');
            res.mapErr(function (e) {
                // isExactType<typeof e, 'SimpleError' | 'AnotherError' | 'ResolutionError'>(true);
            });
            return [2 /*return*/];
        });
    }); });
});
describe('AsyncResultWrapper', function () {
    test('works with Promises primitives', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = new AsyncBox_1.AsyncResultWrapper(Promise.resolve(new ts_results_1.Ok(4)));
                    spy = jest.fn();
                    res.map(function (v) {
                        util_1.isExactType(true);
                        spy(v);
                    });
                    return [4 /*yield*/, util_1.delay()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith(4);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('AsyncResult.all', function () {
    test('it works with multiple ok results', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allResult, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allResult = AsyncBox_1.AsyncResult.all(new AsyncBox_1.AsyncOk(2), new AsyncBox_1.AsyncOk('a string'));
                    spy = jest.fn();
                    return [4 /*yield*/, allResult
                            .map(spy)
                            .resolve()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith([2, 'a string']);
                    return [2 /*return*/];
            }
        });
    }); });
    test('When there is an error it just return an AsyncErr with the error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allResult, spyErr, spy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allResult = AsyncBox_1.AsyncResult.all(new AsyncBox_1.AsyncOk(2), new AsyncBox_1.AsyncOk('a string'), new AsyncBox_1.AsyncErr('SimpleError'));
                    spyErr = jest.fn();
                    spy = jest.fn();
                    return [4 /*yield*/, allResult
                            .mapErr(spyErr)
                            .map(spy)
                            .resolve()];
                case 1:
                    _a.sent();
                    expect(spy).not.toHaveBeenCalled();
                    expect(spyErr).toHaveBeenCalledWith('SimpleError');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=AsyncBox.test.js.map