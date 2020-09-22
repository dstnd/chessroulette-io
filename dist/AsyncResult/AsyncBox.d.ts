import { Result } from 'ts-results';
declare const resolutionError = "ResolutionError";
declare type ResolutionError = typeof resolutionError;
export declare type AsyncResultErrors = ResolutionError;
export declare class AsyncResultWrapper<T, E> {
    readonly isAsync = true;
    private readonly result;
    constructor(result: Result<T, E> | Promise<Result<T, E>> | (() => Promise<Result<T, E>>) | (() => Result<T, E>));
    resolve(): Promise<Result<T, E>>;
    map<T2>(mapper: (val: T) => T2): AsyncResultWrapper<T2, E>;
    mapErr<E2>(mapper: (val: E) => E2): AsyncResultWrapper<T, E2>;
    flatMap<T2, E2>(mapper: (val: T) => Result<T2, E2> | AsyncResultWrapper<T2, E | E2>): AsyncResultWrapper<T2, E | E2>;
    flatMapErr<T2, E2>(mapper: (val: E) => Result<T2, E2> | AsyncResultWrapper<T2, E2>): AsyncResultWrapper<T | T2, E2>;
}
export declare class AsyncOk<T> extends AsyncResultWrapper<T, never> {
    static readonly EMPTY: AsyncOk<void>;
    constructor(resolver: T | Promise<T>);
}
export declare class AsyncErr<E> extends AsyncResultWrapper<never, E> {
    static readonly EMPTY: AsyncErr<void>;
    constructor(resolver: E | Promise<E>);
}
export declare type AsyncResult<T, E> = AsyncResultWrapper<T, E>;
export declare type AsyncResultOkType<T extends AsyncResult<any, any>> = T extends AsyncResult<infer U, any> ? U : never;
export declare type AsyncResultErrType<T extends AsyncResult<any, any>> = T extends AsyncResult<any, infer U> ? U : never;
export declare type AsyncResultOkTypes<T extends AsyncResult<any, any>[]> = {
    [key in keyof T]: T[key] extends AsyncResult<infer U, any> ? U : never;
};
export declare type AsyncResultErrTypes<T extends AsyncResult<any, any>[]> = {
    [key in keyof T]: T[key] extends AsyncResult<any, infer U> ? U : never;
};
export declare namespace AsyncResult {
    /**
     * Parse a set of `Result`s, returning an array of all `Ok` values.
     * Short circuits with the first `Err` found, if any
     */
    function all<T extends AsyncResult<any, any>[]>(...results: T): AsyncResult<AsyncResultOkTypes<T>, AsyncResultErrTypes<T>[number]>;
    function toAsyncResult<T, E = unknown>(result: Result<T, E> | Promise<Result<T, E>> | (() => Promise<Result<T, E>>) | (() => Result<T, E>)): AsyncResultWrapper<T, E>;
    function passThrough<T>(fn: (item: T) => unknown): (item: T) => T;
}
export {};
