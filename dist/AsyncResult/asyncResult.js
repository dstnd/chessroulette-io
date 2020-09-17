"use strict";
// /* eslint-disable @typescript-eslint/no-use-before-define */
// /* eslint-disable @typescript-eslint/interface-name-prefix */
// /* eslint-disable import/export */
// /* eslint-disable @typescript-eslint/no-empty-interface */
// /* eslint-disable max-classes-per-file */
// import { Err, Ok, Result } from 'ts-results';
// export { Result, Err, Ok } from 'ts-results'
// const isResultTypeLike = <T, E>(v: unknown): v is Result<T, E> => {
//   return (
//     typeof v === 'object' &&
//     v !== null &&
//     'val' in v &&
//     'ok' in v &&
//     'map' in v &&
//     'mapErr' in v
//   );
// };
// const ResolverRejectedError = 'ResolverRejected';
// const isAsyncResultTypeLike = <T, E>(v: unknown): v is AsyncResult<T, E> => {
//   return isResultTypeLike(v) && 'isAsync' in v;
// }
// export const promiseAsAsyncResult = <T, E>(promise: Promise<AsyncResult<T, E>>): AsyncResult<T, E> => {
//   const vals = {
//     ok: promise.then((r) => r.ok).catch(() => false),
//     err: promise.then((r) => r.err).catch(() => true),
//     val: promise.then((r) => r.val as Promise<T | E>).catch(() => ResolverRejectedError),
//   }
//   const self = {
//     ...promise,
//     ...vals,
//     map: <T2>(mapper: (val: T) => T2): AsyncResult<T | T2, E> => {
//       const unwrappedPromise = promise
//         .then((r) => {
//           return r.ok.then((ok): Promise<AsyncResult<T | T2, E>> => {
//             if (!ok) {
//               return self as unknown as Promise<AsyncResult<T, E>>;
//             }
//             return (r as AsyncOk<T>).val
//               .then(mapper)
//               .then((mapped) => new AsyncOk(mapped));
//           });
//         });
//       return promiseAsAsyncResult(unwrappedPromise);
//     },
//     mapErr: <E2>(mapper: (e: E) => E2): AsyncResult<T, E | E2> => {
//       const unwrappedPromise = promise
//         .then((r) => {
//           return r.ok.then((ok): Promise<AsyncResult<T, E | E2>> => {
//             if (ok) {
//               return self as unknown as Promise<AsyncResult<T, E>>;
//             } else {
//               return (r as AsyncErr<E>).val
//                 .then(mapper)
//                 .then((mapped) => new AsyncErr(mapped));
//             }
//           })
//         });
//         return promiseAsAsyncResult(unwrappedPromise)
//     },
//     flatMap: <T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E | E2> => {
//       const unwrappedPromise = promise
//         .then((r) => {
//           return r.ok.then((ok): Promise<AsyncResult<T2, E | E2>> => {
//             if (ok) {
//               return (r as AsyncOk<T>).val.then(mapper);
//             } else {
//               return Promise.resolve(r as AsyncErr<E>);
//             }
//           });
//         })
//       return promiseAsAsyncResult(unwrappedPromise);
//     },
//     resolve: async (): Promise<Result<T, E>> => {
//       const unwrappedPromise = promise.then((r) => {
//         return Promise.all([
//           r.ok,
//           r.val,
//         ] as [Promise<boolean>, Promise<T | E>]).then(([ok, val]) => {
//           if (ok) {
//             return new Ok(val)
//           }
//           return new Err(val);
//         });
//       });
//       return unwrappedPromise as Promise<Result<T, E>>;
//     },
//   } as unknown as AsyncResult<T, E>;
//   return self as AsyncResult<T, E>;
// }
// interface BaseAsyncResult<T, E> {
//   readonly isAsync: true;
//   readonly ok: Promise<boolean>;
//   readonly err: Promise<boolean>;
//   readonly val: Promise<T> | Promise<E>;
// }
// export class AsyncOk<T> implements BaseAsyncResult<T, never> {
//   static readonly EMPTY = new AsyncOk<void>(undefined);
//   readonly isAsync = true;
//   readonly ok = Promise.resolve(true);
//   readonly err = Promise.resolve(false);
//   public val: Promise<T>;
//   constructor(valResolver: T | Promise<T>) {
//     this.val = Promise.resolve(valResolver);
//   }
//   map<T2>(mapper: (val: T) => T2): AsyncOk<T2> {
//     return new AsyncOk(
//       new Promise((resolve) => {
//         this.val.then((val) => resolve(mapper(val)));
//       })
//     );
//   }
//   mapErr<E2>(mapper: (err: never) => E2): AsyncOk<T> {
//     return this;
//   }
//   flatMap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E2> {
//     return promiseAsAsyncResult(this.val.then(mapper)) as AsyncResult<T2, E2>;
//   }
//   async resolve(): Promise<Result<T, typeof ResolverRejectedError>> {
//     return this.val
//       .then((val) => new Ok(val))
//       .catch(() => new Err(ResolverRejectedError))
//   }
//   fmap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E2> {
//     return promiseAsAsyncResult(this.val.then(mapper)) as AsyncResult<T2, E2>;
//     // return mapper(this.val);
//   }
// }
// export class AsyncErr<E> implements BaseAsyncResult<never, E> {
//   static readonly EMPTY = new AsyncErr<void>(undefined);
//   readonly isAsync = true;
//   readonly ok = Promise.resolve(false);
//   readonly err = Promise.resolve(true);
//   public val: Promise<E>;
//   constructor(valResolver: E | Promise<E>) {
//     this.val = Promise.resolve(valResolver);
//   }
//   map<T2>(mapper: (val: never) => T2): AsyncErr<E> {
//     return this;
//   }
//   mapErr<E2>(mapper: (err: E) => E2): AsyncErr<E2> {
//     return new AsyncErr(
//       new Promise((resolve) => {
//         this.val.then((val) => resolve(mapper(val)));
//       })
//     );
//   }
//   flatMap<T2, E2>(mapper: (val: any) => AsyncResult<T2, E2>): AsyncResult<never, E> {
//     return this as unknown as AsyncResult<never, E>;
//   }
//   async resolve(): Promise<Result<never, E | typeof ResolverRejectedError>> {
//     return this.val
//       .then((val) => new Err(val))
//       .catch(() => new Err(ResolverRejectedError))
//   }
//   fmap(mapper: (val: never) => AsyncResult<never, E>): AsyncResult<never, E> {
//     // TODO: This shouldnt be here and b/c of this issue other problems with the 
//     //  error types exists
//     return this as unknown as AsyncResult<never, E>;
//   }
// }
// // export class AsyncResultBox<T, E> {
// //   readonly isAsync = true;
// //   // readonly ok: Promise<boolean>;
// //   // readonly err: Promise<boolean>;
// //   readonly val: Promise<T> | Promise<E>;
// //   constructor(resolver: T) {
// //     this.val = Promise.resolve(resolver);
// //   }
// //   resolve(): Promise<Result<T, E>> {
// //   }
// // }
// export type AsyncResult<T, E> = (AsyncOk<T> | AsyncErr<E>) & {
//   map<T2>(mapper: (val: T) => T2): AsyncResult<T2, E>;
//   mapErr<E2>(mapper: (val: E) => E2): AsyncResult<T, E2>;
//   flatMap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E | E2>;
//   resolve(): Promise<Result<T, E | typeof ResolverRejectedError>>;
// };
// export type AsyncResultOkType<T extends AsyncResult<any, any>> = T extends AsyncResult<infer U, any> ? U : never;
// export type AsyncResultErrType<T extends AsyncResult<any, any>> = T extends AsyncResult<any, infer U> ? U : never;
// export type AsyncResultOkTypes<T extends AsyncResult<any, any>[]> = {
//     [key in keyof T]: T[key] extends AsyncResult<infer U, any> ? U : never;
// };
// export type AsyncResultErrTypes<T extends AsyncResult<any, any>[]> = {
//     [key in keyof T]: T[key] extends AsyncResult<any, infer U> ? U : never;
// };
// /**
//  * Parse a set of `Result`s, returning an array of all `Ok` values.
//  * Short circuits with the first `Err` found, if any
//  */
// export function allAsyncResults<T extends Array<AsyncResult<any, any>>>(
//   ...results: T
// ): AsyncResult<AsyncResultOkTypes<T>, AsyncResultErrTypes<T>[number]> {
//     const okResult = [];
//     for (let result of results) {
//         if (result.ok) {
//             okResult.push(result.val);
//         } else {
//             return result as AsyncErr<AsyncResultErrTypes<T>[number]>;
//         }
//     }
//     return new AsyncOk(okResult as AsyncResultOkTypes<T>);
// }
// export type AsyncResultResolverType<T extends any> = 
// T extends AsyncErr<infer E>
//   ? AsyncResult<never, E>
//   : T extends AsyncOk<infer U> 
//     ? AsyncResult<U, never>
//     : T extends Ok<infer RU>
//       ? AsyncResult<RU, never>
//       : T extends Err<infer RE>
//         ? AsyncResult<never, RE>
//         : T extends Promise<never>
//           ? AsyncResult<never, typeof ResolverRejectedError>
//           : T extends Promise<infer PU>
//             ? AsyncResult<PU, never>
//             : AsyncResult<T, never>;
// export function toAsyncResult<T, E>(
//   resolver: T | AsyncOk<T> | AsyncErr<E> | Ok<T> | Err<E> | PromiseLike<T>
// ): AsyncResultResolverType<T> {
//   const promise = (isAsyncResultTypeLike<T, E>(resolver)
//     ? Promise.resolve(resolver as AsyncResult<T, E>)
//     : isResultTypeLike<T, E>(resolver)
//       ? Promise.resolve(resolver.ok ? new AsyncOk(resolver.val as T) : new AsyncErr(resolver.val as E))
//       : Promise.resolve(resolver).then(
//         (val) => new AsyncOk(val as T),
//         () => new AsyncErr(ResolverRejectedError)
//       )
//     );
//   return promiseAsAsyncResult(promise) as AsyncResultResolverType<T>;
// }
//# sourceMappingURL=asyncResult.js.map