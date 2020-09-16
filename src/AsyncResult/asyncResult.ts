/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable max-classes-per-file */
import { Err, Ok, Result } from 'ts-results';

export { Result, Err, Ok } from 'ts-results'

// type FlattenResults<T> = {
//   0: T;
//   1: T extends IResult<infer U, any> ? FlattenResults<U> : never;
// }[T extends IResult<any, any> ? 1 : 0];

// interface IResult<T, E> {
//   readonly ok: boolean;

//   readonly err: boolean;

//   readonly val: T | E;

//   map<T2>(mapper: (val: T) => T2): IResult<T2, E>;

//   flatMap<T2>(mapper: (val: T) => Result<T2, E>): IResult<FlattenResults<T2>, E>;

//   mapErr<E2>(mapper: (val: E) => E2): IResult<T, E2>;
// }

const isResultTypeLike = <T, E>(v: unknown): v is Result<T, E> => {
  return (
    typeof v === 'object' &&
    v !== null &&
    'val' in v &&
    'ok' in v &&
    'map' in v &&
    'mapErr' in v
  );
};

const isAsyncResultTypeLike = <T, E>(v: unknown): v is AsyncResult<T, E> => {
  return isResultTypeLike(v) && 'isAsync' in v;
}

// const x = {} as Result<number, string>;
// const x = {};

// if (isResultTypeLike<number, string>(x)) {
//   x.val
// }

// x.ok && x.val
// const x = {}
// if (isResultTypeLike<string, unknown>(x)) {
//   if (x.ok) {
//     x.val;
//   }
// }

// const recursiveUnwrap = <T, T2, E, E2>(r: Result<T | T2, E>): Result<T2, E> => {
//   // If Error just return it
//   if (!r.ok) {
//     return r;
//   }

//   const unwrapped = r.val;

//   // If not Result just return it with 1 layer of Result
//   if (!isResultType(unwrapped)) {
//     return new Ok(unwrapped) as Result<T2, E>;
//   }

//   return recursiveUnwrap<T, T2, E, E2>(unwrapped as Result<any, any>);
// }

// const isPromiseType = <T>(v: unknown): v is Promise<T> => {
//   return (
//     typeof v === 'object' &&
//     v !== null &&
//     'then' in v &&
//     'finally' in v &&
//     'catch' in v
//   );
// };

// export class Ok<T> implements IResult<T, unknown> {
//   readonly ok = true;

//   readonly err = false;

//   // eslint-disable-next-line no-useless-constructor
//   constructor(public val: T) {}

//   map<T2>(mapper: (val: T) => T2): Ok<T2> {
//     return new Ok(mapper(this.val));
//   }

//   // mapAsync<T2>(mapper: (val: T) => T2): Ok<T2> {
//   //   return new Ok(mapper(this.val));
//   // }

//   flatMap<T2, E>(
//     mapper: (val: T) => Result<T2, E>
//   ): Result<FlattenResults<T2>, E> {
//     return recursiveUnwrap(mapper(this.val)) as Result<
//       FlattenResults<T2>,
//       E
//     >;
//   }

//   mapErr<E2>(mapper: (err: never) => E2): Ok<T> {
//     // console.log('Ok mapErr');

//     return this;
//   }

//   // mapAsync<T2>(mapper: (val: T) => Result<T2, any>): Ok<T2> {
//   //   // Promise.resolve(this.val).then(mapper)

//   //   return new Ok();
//   // }

//   // mapErrAsync<E2>(mapper: (err: never) => E2): Ok<T> {
//   //   // console.log('Ok mapErr');

//   //   return this;
//   // }
// }

// export class Err<E> implements IResult<unknown, E> {
//   readonly ok = false;

//   readonly err = true;

//   readonly val: E;

//   constructor(val: E) {
//     this.val = val;
//   }

//   map<T2>(mapper: (val: never) => T2): Err<E> {
//     return this;
//   }

//   flatMap<T2>(mapper: (val: any) => Result<T2, E>): Result<FlattenResults<T2>, E> {
//     return (this as unknown) as Result<FlattenResults<T2>, E>;
//   }

//   mapErr<E2>(mapper: (err: E) => E2): Err<E2> {
//     return new Err(mapper(this.val));
//   }
// }

// export type Result<T, E> = (Ok<T> | Err<E>) & {
//   map<T2>(mapper: (val: T) => T2): Result<T2, E>;

//   mapErr<E2>(mapper: (val: E) => E2): Result<T, E2>;

//   flatMap<T2>(
//     mapper: (val: T | E) => Result<T2, E>
//   ): Result<FlattenResults<T2>, E>;
// };

// ----

// type FlattenAsyncResults<T> = {
//   0: T;
//   1: T extends IAsyncResult<infer U, any> ? FlattenAsyncResults<U> : never;
// }[T extends IAsyncResult<any, any> ? 1 : 0];

interface BaseAsyncResult<T, E> {
  readonly isAsync: true;

  readonly ok: Promise<boolean>;

  readonly err: Promise<boolean>;

  readonly val: Promise<T> | Promise<E>;

  // then<
  //   TResult1,
  //   TResult2 = never
  // >(
  //   // onfulfilled: ((value: AsyncResult<T, E>) => TResult1 | PromiseLike<TResult1>) | undefined | null,
  //   // onrejected: ((reason: 'ResolverRejected') => TResult2 | PromiseLike<TResult2>) | undefined | null
  //   onfulfilled: ((value: AsyncOk<T> | AsyncErr<E>) => TResult1 | PromiseLike<TResult1>),
  //   onrejected: ((reason: 'ResolverRejected') => TResult2 | PromiseLike<TResult2>)
  // ): PromiseLike<TResult1 | TResult2>;
  // then<
  //   TResult1 = E,
  //   TResult2 = never
  // >(
  //   onfulfilled?: ((value: E) => TResult1 | PromiseLike<TResult1>) | undefined | null,
  //   onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  // ): PromiseLike<TResult1 | AsyncResult<TResult2, 'ResolverRejected'>>;

  // map<T2>(mapper: (val: T) => T2): IAsyncResult<T2, E>;

  // fmap<T2>(
  //   mapper: (val: T) => IAsyncResult<T2, E>
  // ): IAsyncResult<FlattenAsyncResults<T2>, E>;

  // mapErr<E2>(mapper: (val: E) => E2): IAsyncResult<T, E2>;

  // map<T2>(mapper: (val: T) => T2): IAsyncResult<T2, E>;

  // mapErr<E2>(mapper: (val: E) => E2): IAsyncResult<T, E2>;

  // fmap<T2>(
  //   mapper: (val: T | E) => IAsyncResult<T2, E> | Result<T2, E>
  // ): IAsyncResult<FlattenAsyncResults<T2>, E>;
}

// const recursiveUnwrapAsync = <T2, E>(
//   r: AsyncResult<T2, E> | Result<T2, E>
//   // r: AsyncResult<T2, E>
// ): Promise<Result<T2, E>> => {
//   // console.log('recursive unwrap async error', r);

//   if (!r.ok) {
//     if ('isAsync' in r) {
//       return r.val.then((val) => new Err(val));
//     }

//     // return Promise.reject(r.val);
//     return Promise.resolve(new Err(r.val as E));
//   }

//   // console.log('recursive unwrap async', r);

//   return Promise.resolve(r.val).then((val) => {
//     if (!isResultType(val)) {
//       return new Ok(val);
//     }

//     return recursiveUnwrapAsync(val);
//   }) as Promise<Result<T2, E>>;
// }

export class AsyncOk<T> implements BaseAsyncResult<T, never> {
  static readonly EMPTY = new AsyncOk<void>(undefined);

  readonly isAsync = true;

  readonly ok = Promise.resolve(true);

  readonly err = Promise.resolve(false);

  public val: Promise<T>;

  constructor(valResolver: T | Promise<T>) {
    this.val = Promise.resolve(valResolver);
  }

  // then<
  //   TResult1,
  //   TResult2 = never
  // >(
  //   onfulfilled: ((value: AsyncOk<T>) => TResult1 | PromiseLike<TResult1>),
  //   onrejected: ((reason: 'ResolverRejected') => TResult2 | PromiseLike<TResult2>)
  // ): PromiseLike<TResult1 | TResult2> {
  //   return this.val
  //     .then(
  //       (val) => {
  //         return onfulfilled(new AsyncOk(val));
  //         // if (onfulfilled) {
  //         //   return onfulfilled(new AsyncOk(val));
  //         // }

  //         // return this.val;
  //       }, 
  //       () => {
  //         return onrejected('ResolverRejected');
  //         // if (onrejected) {
  //         //   return onrejected('ResolverRejected');
  //         // }

  //         // return Promise.reject('ResolverRejected');
  //       }
  //     ) as PromiseLike<TResult1 | TResult2>;
  // }

  // then<RR, RE>(
  //   resolve?: (val: AsyncResult<T, never>) => RR,
  //   reject?: (val: AsyncResult<never, 'ResolverRejected'>) => RE,
  // ): PromiseLike<AsyncResult<T, 'ResolverRejected'>> {
  //   return this.val.then(
  //     (v) => new AsyncOk(v),
  //     () => new AsyncErr('ResolverRejected'),
  //   );
  // }

  // unwrap() {
  //   return this.val;
  // }

  map<T2>(mapper: (val: T) => T2): AsyncOk<T2> {
    return new AsyncOk(
      new Promise((resolve) => {
        this.val.then((val) => resolve(mapper(val)));
      })
    );
  }

  mapErr<E2>(mapper: (err: never) => E2): AsyncOk<T> {
    return this;
  }

  // flatMap<T2, E>(
  //   // mapper: (val: T) => AsyncResult<T2, E> | Result<T2, E>
  //   // mapper: ((val: T) => AsyncResult<T2, E>) | ((val: T) => Result<T2, E>)
  //   mapper: (val: T) => AsyncResult<T2, E>
  // ): AsyncResult<FlattenAsyncResults<T2>, E> {
  //   // console.log('async fmap');

  //   return new AsyncOk(
  //     this.val.then(mapper).then((r) => recursiveUnwrapAsync<T2, E>(r))
  //   )
  //     .map((unwrappingResult) => {
  //       if (unwrappingResult.ok) {
  //         return new AsyncOk(unwrappingResult.val);
  //       }

  //       return new AsyncErr(unwrappingResult.val);
  //     })
  //     .map((v) => v.val) as AsyncResult<FlattenAsyncResults<T2>, E>;
  //   // .mapErr((v) => v.val) ;
  // }

  // flatMap<E2>(mapper: (val: T) => AsyncErr<E2>): AsyncErr<E2>;
	// flatMap<T2>(mapper: (val: T) => AsyncOk<T2>): AsyncOk<T2>;
	// flatMap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E2> {
  //   const promise = this.val.then(mapper);

  //   // const map: AsyncResult<any, any>['map'] = this.map

  //   const vals = {
  //     ok: promise.then((r) => r.ok),
  //     err: promise.then((r) => r.err),
  //     // This might create an issue;
  //     val: promise.then((r): Promise<T2 | E2> => r.val),
  //   }

  //   const getMap = <TMap, T2Map, EMap>(promise: Promise<AsyncResult<TMap, EMap>>) => 
  //     (mapper2: (val: TMap) => T2Map): AsyncResult<T2Map, EMap> => {
  //       const mapPromise = promise
  //         .then((r) => Promise.all([r.ok, r]))
  //         .then(([ok, r]) => {
  //           if (ok) {
  //             return new AsyncOk((r as AsyncOk<TMap>).val.then(mapper2));
  //           }

  //           return new AsyncErr(r.val as Promise<EMap>);
  //         }, () => {
  //           return new AsyncErr('ResolverRejected');
  //         });


  //       const mapVals = {
  //         ok: mapPromise.then((r) => r.ok),
  //         err: mapPromise.then((r) => r.err),
  //         val: mapPromise.then((r) => r.val as Promise<T2Map | EMap>),
  //       }

  //       return {
  //         // ...promiseAsAsyncResult,
  //         ...mapPromise,
  //         ...mapVals,

  //         // map: map.bind(mapVals),
  //         map: <T3Map>(mapper3: (val: T2Map) => T3Map): AsyncResult<T3Map, EMap> => {
  //           return getMap<T2Map, T3Map, EMap>(mapPromise as Promise<AsyncResult<T2Map, EMap>>)(mapper3);
  //         },
  //         mapErr: promiseAsAsyncResult.mapErr.bind(mapVals),
  //         flatMap: this.flatMap.bind(mapVals),

  //       } as unknown as AsyncResult<T2Map, EMap>;
  //     };

  //     const getMapErr = <TMap, EMap, E2Map>(promise: Promise<AsyncResult<TMap, EMap>>) => 
  //       (mapper2: (val: EMap) => E2Map): AsyncErr<E2Map> => {
  //         const mapPromise = promise
  //           .then((r) => Promise.all([r.ok, r]))
  //           .then(([ok, r]) => {
  //             if (!ok) {
  //               return new AsyncErr((r as AsyncErr<EMap>).val.then(mapper2));
  //             }

  //             return new AsyncErr(r.val as Promise<EMap>);
  //           }, () => {
  //             return new AsyncErr('ResolverRejected');
  //           });

  //         const mapVals = {
  //           ok: mapPromise.then((r) => r.ok),
  //           err: mapPromise.then((r) => r.err),
  //           val: mapPromise.then((r) => r.val as Promise<EMap>),
  //         }

  //         const mapErrorAsncResultAsPromise = {
  //           ...mapPromise,
  //           ...mapVals,

  //           // map: map.bind(mapVals),
  //           map: <T2Map>(mapper3: (val: never) => T2Map): AsyncErr<EMap> => {
  //             return mapErrorAsncResultAsPromise as AsyncErr<EMap>;
  //           },
  //           mapErr: promiseAsAsyncResult.mapErr.bind(mapVals),
  //           flatMap: this.flatMap.bind(mapVals),

  //         } as unknown as AsyncErr<EMap>;

  //         return mapErrorAsncResultAsPromise;
  //       };

  //     // mapErr<E2>(mapper: (err: E) => E2): AsyncErr<E2> {
  //     //   return new AsyncErr(
  //     //     new Promise((resolve) => {
  //     //       this.val.then((val) => resolve(mapper(val)));
  //     //     })
  //     //   );
  //     // }

  //   const promiseAsAsyncResult = {
  //     ...promise,
  //     ...vals,

  //     map: getMap<T, T2, E2>(promise as Promise<AsyncResult<T, E2>>),

  //     // map: (mapper: ()) => promise.then((v) => new AsyncOk(v)),
      
  //     mapErr: <E3>(mapper: (val: E2) => E3) => getMapErr<T, E2, E3>(promise as Promise<AsyncResult<T, E2>>)(mapper),
  //     flatMap: this.flatMap.bind(vals),
  //   } as unknown as AsyncResult<T2, E2>;

  //   return promiseAsAsyncResult;

  //   // return toAsyncResult(this.val.then(mapper)) as AsyncResult<T2, E2>;
  //   // return new AsyncOk(this.val.then(mapper)).map((res) => {
  //   //   if (res.ok) {
  //   //     return new AsyncOk(res.val);
  //   //   } {
  //   //     return new AsyncErr(res.val);
  //   //   }
  //   // })
  //     // .map((r) => r.val)
  //     // .mapErr((r) => r.) as unknown as AsyncResult<T2, E2>;
  // }
  flatMap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E2> {
    return promiseAsAsyncResult(this.val.then(mapper));
  }
  
}

export const promiseAsAsyncResult = <T, E>(promise: Promise<AsyncResult<T, E>>): AsyncResult<T, E> => {
  const vals = {
    ok: promise.then((r) => r.ok).catch(() => false),
    err: promise.then((r) => r.err).catch(() => true),
    val: promise.then((r) => r.val as Promise<T | E>).catch(() => 'ResolverRejected'),
  }

  const self = {
    ...promise,
    ...vals,

    // map: getMap<T, T2, E2>(promise as Promise<AsyncResult<T, E2>>),

    // map: (mapper: ()) => promise.then((v) => new AsyncOk(v)),
    map: <T2>(mapper: (val: T) => T2): AsyncResult<T | T2, E> => {
      const unwrappedPromise = promise
        .then((r) => {
          return r.ok.then((ok): Promise<AsyncResult<T | T2, E>> => {
            if (!ok) {
              return self as unknown as Promise<AsyncResult<T, E>>;
            }

            return (r as AsyncOk<T>).val
              .then(mapper)
              .then((mapped) => new AsyncOk(mapped));
          });
        });

      return promiseAsAsyncResult(unwrappedPromise);
    },
    
    mapErr: <E2>(mapper: (e: E) => E2): AsyncResult<T, E | E2> => {
      const unwrappedPromise = promise
        .then((r) => {
          return r.ok.then((ok): Promise<AsyncResult<T, E | E2>> => {
            if (ok) {
              return self as unknown as Promise<AsyncResult<T, E>>;
            } else {
              return (r as AsyncErr<E>).val
                .then(mapper)
                .then((mapped) => new AsyncErr(mapped));
            }
          })
        });

        return promiseAsAsyncResult(unwrappedPromise);

      // return new AsyncErr(unwrappedErrPromise);
    },

    flatMap: <T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E | E2> => {
      const unwrappedPromise = promise
        .then((r) => {
          return r.ok.then((ok): Promise<AsyncResult<T2, E | E2>> => {
            if (ok) {
              return (r as AsyncOk<T>).val.then(mapper);
            } else {
              return Promise.resolve(r as AsyncErr<E>);
            }
          });
        })

      return promiseAsAsyncResult(unwrappedPromise);
    },
    // flatMap: this.flatMap.bind(vals),
  } as unknown as AsyncResult<T, E>;


  return self as AsyncResult<T, E>;
}

export class AsyncErr<E> implements BaseAsyncResult<never, E> {
  static readonly EMPTY = new AsyncErr<void>(undefined);

  readonly isAsync = true;

  readonly ok = Promise.resolve(false);

  readonly err = Promise.resolve(true);

  // readonly fulfilled = true;

  public val: Promise<E>;

  constructor(valResolver: E | Promise<E>) {
    this.val = Promise.resolve(valResolver);
  }

  // then<
  //   TResult1,
  //   TResult2 = never
  // >(
  //   onfulfilled: ((value: AsyncErr<E>) => TResult1 | PromiseLike<TResult1>),
  //   onrejected: ((reason: 'ResolverRejected') => TResult2 | PromiseLike<TResult2>)
  // ): PromiseLike<TResult1 | TResult2> {
  //   return this.val
  //     .then(
  //       (val) => {
  //         return onfulfilled(new AsyncErr(val));
  //       }, 
  //       () => {
  //         return onrejected('ResolverRejected');
  //       }
  //     ) as PromiseLike<TResult1 | TResult2>;
  // }

  // then<
  //   TResult1 = E,
  //   TResult2 = never
  // >(
  //   onfulfilled?: ((value: E) => TResult1 | PromiseLike<TResult1>) | undefined | null,
  //   onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  // ): PromiseLike<TResult1 | TResult2> {
  //   return this.val.then(onfulfilled, onrejected);
  // }
  // then<Y>(resolve: () => Y) {
  //   return this.val.then(resolve);
  // }
  // then<TResolve, TReject>(
  //   resolve?: (val: AsyncResult<never, E>) => TResolve,
  //   reject?: (val: 'ResolverRejected') => TReject,
  // ): Promise<AsyncResult<never, E>> {
  //   return new Promise<AsyncResult<never, E>>((resolve, reject) => {
  //     this.val.then(
  //       (v) => resolve(new AsyncErr(v)),
  //       () => reject('ResolverRejected'),
  //     );
  //   });
  //     // .then(resolve, reject);

  //     const x: Promise<string>;

  //     x.then
  // }

  map<T2>(mapper: (val: never) => T2): AsyncErr<E> {
    return this;
  }

  mapErr<E2>(mapper: (err: E) => E2): AsyncErr<E2> {
    return new AsyncErr(
      new Promise((resolve) => {
        this.val.then((val) => resolve(mapper(val)));
      })
    );
  }

  // map<T2>(mapper: (val: never) => T2): Err<E> {
  //   return this;
  // }

  // flatMap<T2>(mapper: (val: any) => AsyncResult<T2, E>): AsyncErr<E>;
  // flatMap<T2, E2>(mapper: (val: any) => AsyncResult<T2, E2>): AsyncErr<E2>;
  flatMap<T2, E2>(mapper: (val: any) => AsyncResult<T2, E2>): AsyncErr<E> {
    return this;
  }

  // mapErr<E2>(mapper: (err: E) => E2): Err<E2> {
  //   return new Err(mapper(this.val));
  // }
}

export type AsyncResult<T, E> = (AsyncOk<T> | AsyncErr<E>) & {
  // readonly fullfilled: boolean;

  // readonly ok: Promise<boolean>;

  // readonly err: Promise<boolean>;

  map<T2>(mapper: (val: T) => T2): AsyncResult<T2, E>;

  mapErr<E2>(mapper: (val: E) => E2): AsyncResult<T, E2>;

  // flatMap<E2>(mapper: (val: T) => AsyncErr<E2>): AsyncErr<E2>;
	// flatMap<T2>(mapper: (val: T) => AsyncOk<T2>): AsyncOk<T2>;
	// flatMap<E2>(mapper: (val: T) => AsyncErr<E2>): AsyncErr<E2>;
	// flatMap<T2>(mapper: (val: T) => AsyncOk<T2>): AsyncOk<T2>;
	// flatMap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E2>;

  // flatMap<T2>(
  //   // mapper: (val: T | E) => AsyncResult<T2, E> | Result<T2, E>
  //   // mapper: ((val: T) => AsyncResult<T2, E>) | ((val: T) => Result<T2, E>)
  //   mapper: (val: T | E) => AsyncResult<T2, E>
  // ): AsyncResult<FlattenAsyncResults<T2>, E>;
  // flatMap<T2, E2>(mapper: (val: any) => AsyncResult<T2, E2>): AsyncResult<T2, E>;
  flatMap<T2, E2>(mapper: (val: T) => AsyncResult<T2, E2>): AsyncResult<T2, E | E2>;
  // flatMap<T2, E2>(mapper: (val: any) => AsyncResult<T2, E2>): AsyncErr<E2>;
  // flatMap<T2>(mapper: (val: any) => AsyncResult<T2, E>): AsyncErr<E> {

  // then<
  //   TResult1 = T extends never ? E : T,
  //   TResult2 = never
  // >(
  //   onfulfilled?: ((value: T | E) => TResult1 | PromiseLike<TResult1>) | undefined | null,
  //   onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  // ): PromiseLike<TResult1 | TResult2>;

  // then<
  //   TResult1,
  //   TResult2 = never
  // >(
  //   // onfulfilled: ((value: AsyncResult<T, E>) => TResult1 | PromiseLike<TResult1>) | undefined | null,
  //   // onrejected: ((reason: 'ResolverRejected') => TResult2 | PromiseLike<TResult2>) | undefined | null
  //   onfulfilled: ((value: AsyncOk<T> | AsyncErr<E>) => TResult1 | PromiseLike<TResult1>),
  //   onrejected: ((reason: 'ResolverRejected') => TResult2 | PromiseLike<TResult2>)
  // ): PromiseLike<TResult1 | TResult2>;
};

// export class UnfulfilledAsyncResult<T, E> implements BaseAsyncResult<T, E> {
//   readonly fulfilled = false;

//   readonly ok: unknown = undefined;

//   readonly err: unknown = undefined;

//   readonly val: Promise<T>;

//   constructor(valResolver: T | PromiseLike<T>) {
//     this.val = Promise.resolve(valResolver);
//   }

//   map<T2>(mapper: (val: T) => T2): AsyncResult<T2, E> {
  
//   }

//   mapErr<E2>(mapper: (val: E) => E2): AsyncResult<T, E2>;
// }

// export const toAsyncResult = <T, E>(r: Result<T, E> | AsyncResult<T, E>): AsyncResult<T, E> => {
//   if ('isAsync' in r) {
//     return r;
//   }

//   if (r.ok) {
//     return new AsyncOk(r.val);
//   } 

//   return new AsyncErr(r.val);
// } 

export type AsyncResultOkType<T extends AsyncResult<any, any>> = T extends AsyncResult<infer U, any> ? U : never;
export type AsyncResultErrType<T extends AsyncResult<any, any>> = T extends AsyncResult<any, infer U> ? U : never;

export type AsyncResultOkTypes<T extends AsyncResult<any, any>[]> = {
    [key in keyof T]: T[key] extends AsyncResult<infer U, any> ? U : never;
};
export type AsyncResultErrTypes<T extends AsyncResult<any, any>[]> = {
    [key in keyof T]: T[key] extends AsyncResult<any, infer U> ? U : never;
};

// const x = {} as AsyncResult<string[], false>;
// const y = {} as AsyncResult<number, string>;

// x.flatMap((s) => y).map((e) => e).map((s) => s.)

/**
 * Parse a set of `Result`s, returning an array of all `Ok` values.
 * Short circuits with the first `Err` found, if any
 */
export function allAsyncResults<T extends Array<AsyncResult<any, any>>>(
  ...results: T
): AsyncResult<AsyncResultOkTypes<T>, AsyncResultErrTypes<T>[number]> {
    const okResult = [];
    for (let result of results) {
        if (result.ok) {
            okResult.push(result.val);
        } else {
            return result as AsyncErr<AsyncResultErrTypes<T>[number]>;
        }
    }

    return new AsyncOk(okResult as AsyncResultOkTypes<T>);
}

// export type AsyncResultResolverType<T> = T extends AsyncResult<infer UnwrappedAsyncResultT, unknown>
//   ? AsyncOk<UnwrappedAsyncResultT>
//   : T extends AsyncResult<unknown, infer UnwrappedAsyncResultE>
//     ? AsyncErr<UnwrappedAsyncResultE>
//     : T extends Result<infer UnwrappedResultT, unknown>
//       ? AsyncOk<UnwrappedResultT>
//       : T extends Result<unknown, infer UnwrappedResultE>
//         ? AsyncErr<UnwrappedResultE>
//         : T extends PromiseLike<infer UnwrappedPromiseT>
//           ? AsyncResult<UnwrappedPromiseT, 'ResolverRejected'>
//           : AsyncOk<T>;

export type AsyncResultResolverType<T extends any> = 
T extends AsyncErr<infer E>
  ? AsyncResult<never, E>
  : T extends AsyncOk<infer U> 
    ? AsyncResult<U, never>
    : T extends Ok<infer RU>
      ? AsyncResult<RU, never>
      : T extends Err<infer RE>
        ? AsyncResult<never, RE>
        : T extends Promise<never>
          ? AsyncResult<never, 'ResolverRejected'>
          : T extends Promise<infer PU>
            ? AsyncResult<PU, never>
            : AsyncResult<T, never>;

// export type AsyncResultResolverType<T extends 
//   // | AsyncOk<any>
//   // | AsyncErr<any>
//   // | Ok<any>
//   // | Err<any>
//   // | Promise<any>
//   | any
// > = T extends AsyncOk<infer U>
//   ? AsyncResult<U, never>
//   : T extends AsyncErr<infer E> 
//     ? AsyncResult<never, E>
//     // : T extends Ok<infer RU>
//       // ? AsyncResult<RU, never>
//       // : T extends Err<infer RE>
//         // ? AsyncResult<never, RE>
//         // : T extends PromiseLike<'ResolverRejected'>
//         //   ? AsyncResult<never, 'ResolverRejected'>
//         //   : T extends PromiseLike<infer PU>
//         //     ? AsyncResult<PU, never>
//             : AsyncResult<T, never>;
  
  //   ? AsyncResult<UnwrappedAsyncResultT, UnwrappedAsyncResultE>
  // : T extends Result<infer UnwrappedResultT, infer UnwrappedResultE>
  //   ? AsyncResult<UnwrappedResultT, UnwrappedResultE>
  //   : T extends PromiseLike<infer UnwrappedPromiseT>
  //     ? AsyncResult<UnwrappedPromiseT, E | 'ResolverRejected'>
  //     : AsyncResult<T, E>;

// const x = {} as AsyncResultResolverType<number>

// x.mapErr((s) => s)


export function toAsyncResult<T, E>(
  resolver: T | AsyncOk<T> | AsyncErr<E> | Ok<T> | Err<E> | PromiseLike<T>
): AsyncResultResolverType<T> {
  // const r = Promise
  //   .resolve(resolver)
  //   .then(
  //     (r): AsyncResult<T, E> => {
  //       if ('isAsync' in r) {
  //         // Async Result
  //         return r;
        
  //       } else if (isResultTypeLike<T, E>(r)) {
  //         // Sync Result
  //         if (r.ok) {
  //           return new AsyncOk(r.val);
  //         } else {
  //           return new AsyncErr(r.val);
  //         }
  //       } else {
  //         // Unwrapped Value
  //         return new AsyncOk(r) as AsyncResult<T, E>;
  //       }
  //     }, 
  //   () => new AsyncErr('ResolverRejected')
  // );
  // if (isResultTypeLike(resolver)) {

  // }

  // const promise = instanceof

  const promise = (isAsyncResultTypeLike<T, E>(resolver)
    ? Promise.resolve(resolver as AsyncResult<T, E>)
    : isResultTypeLike<T, E>(resolver)
      ? Promise.resolve(resolver.ok ? new AsyncOk(resolver.val as T) : new AsyncErr(resolver.val as E))
      : Promise.resolve(resolver).then(
        (val) => new AsyncOk(val as T),
        () => new AsyncErr('ResolverRejected')
      )
    );

  // const promise = isResultTypeLike(resolver) 
  //   ? ('isAsync' in resolver) 
  //     ? Promise.resolve(resolver as AsyncResult<T, E>)
  //     : Promise.resolve(resolver.ok ? new AsyncOk(resolver) : new AsyncErr(resolver.val))
  // //   ? 'isAsync' in resolver 
  //     ? resolver.
  //   : Promise.resolve(resolver).then(new )


  // return new AsyncOk(r).map((s) => s.val) as AsyncResultResolverType<T, E>;
  // return new AsyncOk(r).map((s) => s.val);
  return promiseAsAsyncResult(promise) as AsyncResultResolverType<T>;
}

// toAsyncResult(new )

// export type Result<T, E> = (Ok<T> | Err<E>) & {
//   map<T2>(mapper: (val: T) => T2): Result<T2, E>;

//   mapErr<E2>(mapper: (val: E) => E2): Result<T, E2>;

//   fmap<T2>(
//     mapper: (val: T | E) => Result<T2, E>
//   ): Result<FlattenResults<T2>, E>;
// };

// type OkErr<T, E> = (OK<T> )

// export interface Result<T, E> extends (Ok<T> | Err<E>){

// }
// export interface R<T, E> extends Result<T, E> {}

// type UnwrappingResult<T> = T extends Result<infer U, any>
//   ? UnwrappingResult<U>
//   : T;

// export type Flatten<T> = T extends Plain<infer U> ? Flatten<U> : T;

// type Flatten<T> = {
//   0: T;
//   1: T extends Plain<infer U> ? Flatten<U> : never;
// }[T extends Plain<any> ? 1 : 0];

// export interface Plain<T> {}

// interface _Recursive<T> {}

// type Recursive<T> = T | Plain<_Recursive<T>> | Result<_Recursive<T>, any>;
// add any other types to unpack here

// export type Flatten<T> = T extends Recursive<infer R> ? R : never;

// type Flatten<T> = {
//   0: T;
//   1: T extends Plain<infer U> ? Flatten<U> : never;
// }[T extends Plain<any> ? 1 : 0];

// type UnwrapRef_<T> = T extends Result<infer V, any>
//   ? Plain<UnwrapRef_<V>>
//   : T extends Array<infer V>
//   ? Array<UnwrapRef_<V>>
//   : T;
// export type UnwrapRef<T> = Flatten<UnwrapRef_<T>>;

// type RecursivelyUnwrappingResult<T> = T extends Result<infer U, any>
//   ? T extends RecursivelyUnwrappingResult<T>
//   :
//   ? ;

// export interface Plain<T> {}

// type Recursive<T> = T | Plain<Recursive<T>> | Result<Recursive<T>, any>;
// // add any other types to unpack here

// export type Flatten<T> = T extends Recursive<infer R> ? R : never;

// type UnpackRecursion<T> = T extends Recurse<infer R> ? R : never;

// export type UnwrapRef<T> = T extends SomeType<infer V>
//   ? UnwrapRef<V>
//   : T extends Array<infer V>
//   ? Array<UnwrapRef<V>>
//   : T;

// type Recursive<T> = T | IResult<Recursive<T>, any>;
// add any other types to unpack here

// export type Flatten<T> = T extends Recursive<infer R> ? R : never;
// export type Flatten<T> = T extends Plain<infer U> ? Flatten<U> : T;
// type Flatten<T> = {
//   0: T;
//   1: T extends Plain<infer U> ? Flatten<U> : never;
// }[T extends Plain<any> ? 1 : 0];

// type UnwrapRef_<T> = T extends IResult<infer V, any> ? Plain<UnwrapRef_<V>> : T;
// export type UnwrapRef<T> = Flatten<UnwrapRef_<T>>;

// const x = new Ok(new Ok('string'));
// const y = new Ok('string');
// const u = new Ok(new Ok(new Ok(new Ok(new Err('asd')))));

// const xx: Flatten<typeof x>;
// const yy: Flatten<typeof y>;
// const zz: Flatten<'ssad'>;
// const uu: Flatten<typeof u>;

// uu.

// const uu: UnwrapRef<typeof x>;
// const vv: UnwrapRef<typeof y>;

// uu.
// xx.
// yy

// //

// type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

// type HypertextNode = string | [string, { [key: string]: any }, HypertextNode[]];
