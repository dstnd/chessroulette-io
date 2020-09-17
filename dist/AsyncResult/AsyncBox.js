"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncResult = exports.AsyncErr = exports.AsyncOk = exports.AsyncResultWrapper = void 0;
var ts_results_1 = require("ts-results");
var resolutionError = 'ResolutionError';
// export type MergedErrors<E> = E | AsyncResultErrors;
var AsyncResultWrapper = /** @class */ (function () {
    function AsyncResultWrapper(result) {
        this.isAsync = true;
        this.result = Promise.resolve(result);
    }
    AsyncResultWrapper.prototype.resolve = function () {
        return this.result;
    };
    AsyncResultWrapper.prototype.map = function (mapper) {
        var mapped = this.result.then(function (r) { return (r.ok ? new ts_results_1.Ok(mapper(r.val)) : r); });
        return new AsyncResultWrapper(mapped);
    };
    AsyncResultWrapper.prototype.mapErr = function (mapper) {
        var mapped = this.result.then(function (r) { return (r.ok ? r : new ts_results_1.Err(mapper(r.val))); });
        return new AsyncResultWrapper(mapped);
    };
    AsyncResultWrapper.prototype.flatMap = function (mapper) {
        var mapped = this.result.then(function (r) {
            if (!r.ok) {
                return r;
            }
            var newRes = mapper(r.val);
            if (newRes instanceof AsyncResultWrapper) {
                return newRes.result;
            }
            return newRes;
        });
        return new AsyncResultWrapper(mapped);
    };
    AsyncResultWrapper.prototype.flatMapErr = function (mapper) {
        var mapped = this.result.then(function (r) {
            if (r.ok) {
                return r;
            }
            var newRes = mapper(r.val);
            if (newRes instanceof AsyncResultWrapper) {
                return newRes.result;
            }
            return newRes;
        });
        return new AsyncResultWrapper(mapped);
    };
    return AsyncResultWrapper;
}());
exports.AsyncResultWrapper = AsyncResultWrapper;
var AsyncOk = /** @class */ (function (_super) {
    __extends(AsyncOk, _super);
    function AsyncOk(resolver) {
        return _super.call(this, Promise.resolve(resolver).then(function (val) { return new ts_results_1.Ok(val); })) || this;
    }
    AsyncOk.EMPTY = new AsyncOk(undefined);
    return AsyncOk;
}(AsyncResultWrapper));
exports.AsyncOk = AsyncOk;
var AsyncErr = /** @class */ (function (_super) {
    __extends(AsyncErr, _super);
    function AsyncErr(resolver) {
        return _super.call(this, Promise.resolve(resolver).then(function (val) { return new ts_results_1.Err(val); })) || this;
    }
    AsyncErr.EMPTY = new AsyncErr(undefined);
    return AsyncErr;
}(AsyncResultWrapper));
exports.AsyncErr = AsyncErr;
var AsyncResult;
(function (AsyncResult) {
    /**
     * Parse a set of `Result`s, returning an array of all `Ok` values.
     * Short circuits with the first `Err` found, if any
     */
    function all() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var resolver = Promise
            .all(results.map(function (r) { return r.resolve(); }))
            .then(function (results) { return ts_results_1.Result.all.apply(ts_results_1.Result, results); });
        return new AsyncResultWrapper(resolver);
    }
    AsyncResult.all = all;
})(AsyncResult = exports.AsyncResult || (exports.AsyncResult = {}));
;
//# sourceMappingURL=AsyncBox.js.map