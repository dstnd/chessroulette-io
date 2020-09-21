import { IsExact } from 'conditional-type-checks';
export declare function isExactType<A, B>(x: IsExact<A, B>): void;
export declare const delay: (ms?: number) => Promise<unknown>;
export declare const traceAsyncErrors: <T>(fn: () => Promise<T>) => Promise<T>;
