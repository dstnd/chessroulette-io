export declare class Err<E> {
    readonly val: E;
    static readonly EMPTY: Err<void>;
    readonly ok = false;
    readonly err = true;
    constructor(val: E);
    /**
     * If the result has a value returns that value.  Otherwise returns the passed in value.
     * @param val the value to replace the error with
     */
    else<T2>(val: T2): T2;
    expect(msg: string): never;
    unwrap(): never;
    map<T2>(mapper: (val: never) => T2): Err<E>;
    mapErr<E2>(mapper: (err: E) => E2): Err<E2>;
}
export declare class Ok<T> {
    readonly val: T;
    static readonly EMPTY: Ok<void>;
    readonly ok = true;
    readonly err = false;
    constructor(val: T);
    /**
     * If the result has a value returns that value.  Otherwise returns the passed in value.
     * @param val the value to replace the error with
     */
    else<T2>(val: T2): T;
    expect(msg: string): T;
    unwrap(): T;
    map<T2>(mapper: (val: T) => T2): Ok<T2>;
    mapErr<E2>(mapper: (err: never) => E2): Ok<T>;
}
export declare type Result<T, E> = (Ok<T> | Err<E>) & {
    map<T2>(mapper: (val: T) => T2): Result<T2, E>;
    mapErr<E2>(mapper: (val: E) => E2): Result<T, E2>;
};
export declare type ResultOkType<T extends Result<any, any>> = T extends Result<infer U, any> ? U : never;
export declare type ResultErrType<T extends Result<any, any>> = T extends Result<any, infer U> ? U : never;
export declare function Results<T1, E1, T2, E2>(result1: Result<T1, E1>, result2: Result<T2, E2>): Result<[T1, T2], E1 | E2>;
export declare function Results<T1, E1, T2, E2, T3, E3>(result1: Result<T1, E1>, result2: Result<T2, E2>, result3: Result<T3, E3>): Result<[T1, T2, T3], E1 | E2 | E3>;
export declare function Results<T1, E1, T2, E2, T3, E3, T4, E4>(result1: Result<T1, E1>, result2: Result<T2, E2>, result3: Result<T3, E3>, result4: Result<T4, E4>): Result<[T1, T2, T3, T4], E1 | E2 | E3 | E4>;
export declare function Results(...results: Result<any, any>[]): Result<any[], any>;
