"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Err = /** @class */ (function () {
    function Err(val) {
        this.val = val;
        this.ok = false;
        this.err = true;
    }
    /**
     * If the result has a value returns that value.  Otherwise returns the passed in value.
     * @param val the value to replace the error with
     */
    Err.prototype.else = function (val) {
        return val;
    };
    Err.prototype.expect = function (msg) {
        var value = String(this.val);
        if (value === '[object Object]') {
            try {
                value = JSON.stringify(value);
            }
            catch (e) {
            }
        }
        throw new Error(msg + " - Error: " + value);
    };
    Err.prototype.unwrap = function () {
        var value = String(this.val);
        if (value === '[object Object]') {
            try {
                value = JSON.stringify(value);
            }
            catch (e) {
            }
        }
        throw new Error("Tried to unwrap Error: " + value);
    };
    Err.prototype.map = function (mapper) {
        return this;
    };
    Err.prototype.mapErr = function (mapper) {
        return new Err(mapper(this.val));
    };
    Err.EMPTY = new Err(undefined);
    return Err;
}());
exports.Err = Err;
var Ok = /** @class */ (function () {
    function Ok(val) {
        this.val = val;
        this.ok = true;
        this.err = false;
    }
    /**
     * If the result has a value returns that value.  Otherwise returns the passed in value.
     * @param val the value to replace the error with
     */
    Ok.prototype.else = function (val) {
        return this.val;
    };
    Ok.prototype.expect = function (msg) {
        return this.val;
    };
    Ok.prototype.unwrap = function () {
        return this.val;
    };
    Ok.prototype.map = function (mapper) {
        return new Ok(mapper(this.val));
    };
    Ok.prototype.mapErr = function (mapper) {
        return this;
    };
    Ok.EMPTY = new Ok(undefined);
    return Ok;
}());
exports.Ok = Ok;
function Results() {
    var results = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        results[_i] = arguments[_i];
    }
    var okResult = [];
    for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
        var result = results_1[_a];
        if (result.ok) {
            okResult.push(result.val);
        }
        else {
            return new Err(result.val);
        }
    }
    return new Ok(okResult);
}
exports.Results = Results;
//# sourceMappingURL=index.js.map