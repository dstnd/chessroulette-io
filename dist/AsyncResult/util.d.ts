import { IsExact } from 'conditional-type-checks';
export declare function isExactType<A, B>(x: IsExact<A, B>): void;
export declare const delay: (ms?: number) => Promise<unknown>;
