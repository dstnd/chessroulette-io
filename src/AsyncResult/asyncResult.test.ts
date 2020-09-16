import { 
  AsyncErr,
  AsyncOk,
  toAsyncResult,
  AsyncResult,
  AsyncResultResolverType,
  Ok,
  Err,
  Result,
} from './asyncResult';
import { delay, isExactType } from './util';

// chai.use(spies);

describe('Sync Values', () => {
  test('Sync values nested with eventual error does NOT unwrap nested Result', () => {
    const r = new Ok(3);

    r.map((v) => v * 2)
      .map(() => new Err('SimpleErr'))
      .map((v) => expect(v).toEqual(new Err('SimpleErr')));
  });

  test('FlatMap values UNWRAPS 1 nested Result', () => {
    const r = new Ok(3);

    r.map((v) => v * 2)
      .flatMap(() => new Ok('NestedValue'))
      .map((s) => expect(s).toBe('NestedValue'));
  });

  test('FlatMap works with deeply nested Ok Results', () => {
    const r = new Ok(3);

    r.map((v) => v * 2)
      .flatMap(() => new Ok(new Ok(new Ok('DeeplyNestedValue'))))
      .map((v) => expect(v).toBe('DeeplyNestedValue'));
  });

  test('FlatMap works with deeply nested Ok Results and multiple FlatMaps', () => {
    const r = new Ok(3);

    r.map((v) => v * 2)
      .flatMap(() => new Ok(new Ok(new Ok('DeeplyNestedValue'))))
      .map((v) => expect(v).toBe('DeeplyNestedValue'))
      .flatMap(() => new Ok(2))
      .map((v) => expect(v).toBe(2))
      .flatMap(() => new Ok('Deeply nested and multiple fmaps'))
      .flatMap((v) => new Ok(new Ok(new Ok(v))))
      .map((v) => expect(v).toBe('Deeply nested and multiple fmaps'));
  });

  test('FlatMap values UNWRAPS 1 nested Error Result', () => {
    const r = new Ok(3);

    r.map((v) => v * 2)
      .flatMap(() => new Err('SimpleError'))
      .mapErr((s) => expect(s).toBe('SimpleError'));
  });

  test('FlatMap UNWRAPS multiple nested Results until it reaches an error. With error in the last position', () => {
    const r = new Ok(3);

    r.map((v) => v * 2)
      .flatMap(() => new Ok(new Ok(new Err('SimpleError'))))
      .mapErr((s) => expect(s).toBe('SimpleError'));
  });

  test('FlatMap does NOT UNWRAP multiple nested Errors Results', () => {
    const r = new Ok(3);

    const nestedError = new Err('NestedError');

    r.map((v) => v * 2)
      .flatMap(() => new Err(nestedError))
      .mapErr((s) => expect(s).toBe(nestedError));
  });

  // test('FlatMap on Err fails with the error', () => {
  //   const r = new Err('SomeError');

  //   r.flatMap((x) => x).mapErr((e) => expect(e).toBe('SomeError'));
  // });

  test('Sync Vals mapErr', () => {
    const e = new Err('SimpleError');

    e.mapErr((error) => {
      expect(error).toBe('SimpleError');
    });
  });
});

describe('AsyncResult', () => {
  test('Ok works with Async Val', () => {
    const r = new AsyncOk(Promise.resolve(3));

    r.map((v) => expect(v).toBe(3));
  });

  test('Ok works with multiple maps', async () => {
    const r = new AsyncOk(Promise.resolve(3));

    r.map((v) => v * 2)
      .map((v2) => v2 + 100)
      .map((v) => expect(v).toBe(106));
  });

  test('Err works with single error', () => {
    const r = new AsyncErr(Promise.resolve('SingleError'));

    r.mapErr((e) => expect(e).toBe('SingleError'));
  });

  test('Err works with multiple mapErrors', () => {
    const r = new AsyncErr(Promise.resolve('InitialError'));

    r.mapErr((e) => `${e}2`)
      .mapErr((e) => `${e}3`)
      .mapErr((e) => expect(e).toBe('InitialError23'));
  });

  test('AsyncOk can be constructed with another Result', () => {
    const nestedResult = new Ok(2);
    const r = new AsyncOk(nestedResult);

    r.map((v) => expect(v).toEqual(nestedResult));
  });

  // // TODO: uncomment this when fmap is done
  test('Async fmap with single level result', () => {
    const r = new AsyncOk(2);
    const nested = new AsyncOk(3);

    // expect.assertions(1);

    r.flatMap((v) => new AsyncOk(5)).map((v) => expect(v).toEqual(5));
  });

  test('Async flat map with multiple level AsyncResults only unwraps the 1st', async () => {
    const nested = new AsyncOk(new AsyncOk(2));
    const r = new AsyncOk(nested);

    // expect.assertions(1);

    r.flatMap(() => nested).map((v) => expect(v).toEqual(nested));
  });

  test('Async flat map with multiple level AsyncResults unwraps the error correctly', async () => {
    const r = (new AsyncOk(2)).flatMap(() => new AsyncErr('SimpleError'));

    const mapperSpy = jest.fn();

      r
        .map(mapperSpy)
        .mapErr((v) => expect(v).toEqual('SimpleError'));

      expect(mapperSpy).toBeCalledTimes(0);
  });

  test('flatMap called on AsyncErrResult', () => {
    const r = new AsyncErr('SimpleError');

    r.flatMap((v) => new AsyncOk(v)).mapErr((v) =>
      expect(v).toBe('SimpleError')
    );
  });

  test('mapErr called when flatMap returns an AsyncErrResult', () => {
    const r = new AsyncOk(2);

    r.flatMap((v) => new AsyncErr('FlatMapErr')).mapErr((v) =>
      expect(v).toBe('FlatMapErr')
    );
  });

  test('mapErr called when flatMap returns an nested AsyncErrResult', () => {
    const r = new AsyncOk(2);
    const errorResult = new AsyncErr('FlatMapErr');

    r.flatMap((v) => new AsyncErr(errorResult)).mapErr((v) =>
      expect(v).toEqual(errorResult)
    );
  });

  test('map is not called when flatMap returns an nested AsyncErrResult', () => {
    const r = new AsyncOk(2);
    const errorResult = new AsyncErr('FlatMapErr');

    const mapperSpy = jest.fn();

    r.flatMap((v) => new AsyncErr(errorResult))
      .map(mapperSpy)
      .mapErr((v) =>expect(v).toEqual(errorResult));

    expect(mapperSpy).toBeCalledTimes(0);
  });

  test('map is not called when flatMap returns a simple AsyncErrResult', () => {
    const r = new AsyncOk(2);

    const mapperSpy = jest.fn();

    r.flatMap((v) => new AsyncErr('SimpleError'))
      .map(mapperSpy)
      .mapErr((v) =>expect(v).toEqual('SimpleError'));

    expect(mapperSpy).toBeCalledTimes(0);
  });

  test('mapErr is not called when flatMap returns a simple AsyncOkResult', () => {
    const r = new AsyncOk(2);

    const mapperErrorSpy = jest.fn();

    r.flatMap((v) => new AsyncOk('SimpleVal'))
      .map((v) => expect(v).toBe('SimpleVal'))
      .mapErr(mapperErrorSpy);

    expect(mapperErrorSpy).toBeCalledTimes(0);
  });

  test('mapErr is not called when flatMap returns a nested AsyncOkResult', () => {
    const r = new AsyncOk(2);
    const nested = new AsyncOk(new AsyncOk('NestedVal'));

    const mapperErrorSpy = jest.fn();

    r.flatMap((v) => nested)
      .map((v) => expect(v).toEqual(nested))
      .mapErr(mapperErrorSpy);

    expect(mapperErrorSpy).toBeCalledTimes(0);
  });

  // test('Async fmap with multiple levels and an error at the end', () => {
  //   const r = new AsyncOk(new AsyncOk(new AsyncErr('NestedError')));

  //   r.flatMap((v) => new AsyncOk(v)).mapErr((v) =>
  //     expect(v).toBe('NestedError2')
  //   );
  // });

  describe('Async/Await', () => {
    // test('The asyncResult is not blocking', () => {
    //   const orderSpyCall: string[] = [];
    //   const r = new AsyncOk(new AsyncOk(new AsyncOk('Simple')));

    //   // const nestedSpy = chai.spy(/
    //   const push = (s: string) => {
    //     orderSpyCall.push(s);
    //   };

    //   const res = r
    //     .flatMap((v) => new AsyncOk(v))
    //     .map(() => {
    //       push('nested');
    //     });

    //   push('root');

    //   res.map(() => {
    //     expect(orderSpyCall).toEqual(['root', 'nested']);
    //   });
    // });

    // test('The asyncResult can waiti with "async/awayt"', async () => {
    //   const orderSpyCall: string[] = [];
    //   const r = new AsyncOk(new AsyncOk(new AsyncOk('Simple')));

    //   // const nestedSpy = chai.spy(/
    //   const push = (s: string) => {
    //     orderSpyCall.push(s);
    //   };

    //   const res = await Promise.resolve(
    //     r
    //       .flatMap((v) => new AsyncOk(v))
    //       .map(() => {
    //         push('nested');
    //       })
    //   ).then((c) => {
    //     push('end of promise');

    //     return c;
    //   });

    //   push('root');

    //   res.map(() => {
    //     expect(orderSpyCall).toEqual(['nested', 'end of promise', 'root']);
    //   });
    // });
  });

  test('AsyncResult and Result interop, with Async at the top', () => {
    const r = new AsyncOk(2);

    const f = r.flatMap((v) => toAsyncResult(new Ok(`${v}3`)));

    f.map((v) => expect(v).toBe('23'));
  });

  // test('AsyncResult and Result interop, with Result at the top', () => {
  //   const r = new Ok(2);

  //   const nestedAsyncResult = new AsyncOk(`3`);

  //   r.map(() => nestedAsyncResult)
  //     .flatMap((v) => {
  //       return toAsyncResult(new Ok(v));
  //     })
  //     .map((v) => expect(v).toBe(nestedAsyncResult));
  // });

  // test('FMap Ok works', () => {
  //   const r = new AsyncOk(Promise.resolve(2));

  //   r.map((v) => v * 3).flatMap(
  //     (v) => new AsyncOk(new AsyncOk(new AsyncOk(v + 1)))
  //   )
  //   .map((v)) => expect(v).toBe(2))
  // });
});

describe('toAsyncResult', () => {
  test('returns correct Result Types', () => {
    const fromPrimitive = toAsyncResult(2);
    isExactType<typeof fromPrimitive, AsyncResult<number, never>>(true);

    const fromComplex = toAsyncResult([3, 4]);
    isExactType<typeof fromComplex, AsyncResult<number[], never>>(true);

    const fromOkResult = toAsyncResult(new Ok(3));
    isExactType<typeof fromOkResult, AsyncResult<number, never>>(true);

    const fromErrResult = toAsyncResult(new Err('SimpleError'));
    isExactType<typeof fromErrResult, AsyncResult<never, string>>(true);

    const fromAsyncOkResult = toAsyncResult(new AsyncOk(2));
    isExactType<typeof fromAsyncOkResult, AsyncResult<number, never>>(true);

    const fromAsyncErrResult = toAsyncResult(new AsyncErr('SimpleError')) as AsyncResult<never, string>;
    isExactType<typeof fromAsyncErrResult, AsyncResult<never, string>>(true);

    const fromResolvingPromise = toAsyncResult(Promise.resolve(2));
    isExactType<typeof fromResolvingPromise, AsyncResult<number, never>>(true);
    // isExactType<typeof fromResolvingPromise, AsyncOk<number>>(true);

    const fromRejectingPromise = toAsyncResult(Promise.reject('Rejection')) as AsyncResult<never, 'ResolverRejected'>;
    isExactType<typeof fromRejectingPromise, AsyncResult<never, 'ResolverRejected'>>(true);
  });

  test('AsyncResultResolverType', () => {
    type FromPrimitive = AsyncResultResolverType<string>;
    isExactType<FromPrimitive, AsyncResult<string, never>>(true);

    type FromComplex = AsyncResultResolverType<string[]>;
    isExactType<FromComplex, AsyncResult<string[], never>>(true);

    type FromAsyncOk = AsyncResultResolverType<AsyncOk<string>>;
    isExactType<FromAsyncOk, AsyncResult<string, never>>(true);

    type FromAsyncErr = AsyncResultResolverType<AsyncErr<string>>;
    isExactType<FromAsyncErr, AsyncResult<never, string>>(true);

    type FromOk = AsyncResultResolverType<Ok<string>>;
    isExactType<FromOk, AsyncResult<string, never>>(true);

    type FromErr = AsyncResultResolverType<Err<string>>;
    isExactType<FromErr, AsyncResult<never, string>>(true);

    type FromResolvingPromise = AsyncResultResolverType<Promise<string>>;
    isExactType<FromResolvingPromise, AsyncResult<string, never>>(true);

    type FromRejectingPromise = AsyncResultResolverType<Promise<never>>;
    isExactType<FromRejectingPromise, AsyncResult<never, 'ResolverRejected'>>(true);
  });

  test('maps to correct value and type with Primitives', () => {
    const result = toAsyncResult(2);
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).not.toHaveBeenCalled();
      expect(mapSpy).toBeCalledWith(2);
    });
  });

  test('maps to correct value and type with Complex Types', () => {
    const result = toAsyncResult([2, 56]);
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).not.toHaveBeenCalled();
      expect(mapSpy).toBeCalledWith([2, 56]);
    });
  });

  test('maps to correct value and type with OkResult', () => {
    const result = toAsyncResult(new Ok(2));
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).not.toHaveBeenCalled();
      expect(mapSpy).toBeCalledWith(2);
    });
  });

  test('maps to correct value and type with ErrResult', () => {
    const result = toAsyncResult(new Err('SimpleError'));
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).toBeCalledWith('SimpleError');
      expect(mapSpy).not.toHaveBeenCalled();
    });
  });

  test('maps to correct value and type with AsyncOkResult', () => {
    const result = toAsyncResult(new AsyncOk({test: 'works'}));
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).not.toHaveBeenCalled();
      expect(mapSpy).toHaveBeenCalledWith({test: 'works'});
    });
  });

  test('maps to correct value and type with AsyncErrResult', () => {
    const result = toAsyncResult(new AsyncErr('SimpleError')) as AsyncResult<never, string>;
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).toBeCalledWith('SimpleError');
      expect(mapSpy).not.toHaveBeenCalled();
    });
  });

  test('maps to correct value and type with Resolving Promise', () => {
    const result = toAsyncResult(Promise.resolve(3));
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).not.toHaveBeenCalled();
      expect(mapSpy).toHaveBeenCalledWith(3);
    });
  });

  test('maps to correct value and type with Rejecting Promise', () => {
    const result = toAsyncResult(Promise.reject('RandomError')) as AsyncResult<never, string>;
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).toBeCalledWith('ResolverRejected');
      expect(mapSpy).not.toHaveBeenCalled();
    });
  });

  test('works with multiple chained map', () => {
    const result = toAsyncResult(3);
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .map((v) => v + 2)
      .map((v) => v - 1)
      .mapErr(mapErrSpy)
      .map(mapSpy);

    return delay().then(() => {
      expect(mapErrSpy).not.toHaveBeenCalled();
      expect(mapSpy).toHaveBeenCalledWith(4);
    });
  });

  test('works with multiple chained mapErr', () => {
    const result = toAsyncResult(new Err('SimpleError'));
    const mapErrSpy = jest.fn();
    const mapSpy = jest.fn();

    result
      .mapErr((e) => e + '1')
      .mapErr((e) => e + '2')
      .map(mapSpy)
      .mapErr(mapErrSpy);

    return delay().then(() => {
      expect(mapErrSpy).toBeCalledWith('SimpleError12');
      expect(mapSpy).not.toHaveBeenCalled();
    });
  });

  describe('flatMap', () => {
    test('works correctly with ResolvingPromises', () => {
      const result = toAsyncResult(Promise.resolve(2));
      const mapErrSpy = jest.fn();
      const mapSpy = jest.fn();

      result
        .flatMap((v) => toAsyncResult(v + 3))
        .map(mapSpy)
        .mapErr(mapErrSpy)

      return delay().then(() => {
        expect(mapErrSpy).not.toHaveBeenCalled();
        expect(mapSpy).toHaveBeenCalledWith(5);
      });
    });

    test('works correctly with OkResult', () => {
      const result = toAsyncResult(new Ok(2));
      const mapErrSpy = jest.fn();
      const mapSpy = jest.fn();

      result
        .flatMap((v) => toAsyncResult(v + 3))
        .map(mapSpy)
        .mapErr(mapErrSpy)

      return delay().then(() => {
        expect(mapErrSpy).not.toHaveBeenCalled();
        expect(mapSpy).toHaveBeenCalledWith(5);
      });
    });

    test('doesnt get called on AsyncErr', () => {
      const result = toAsyncResult(new Err('SimpleError'));
      const mapErrSpy = jest.fn();
      const mapSpy = jest.fn();
      const flatMapSpy = jest.fn();

      result
        .flatMap(flatMapSpy)
        .map(mapSpy)
        .mapErr(mapErrSpy)

      return delay().then(() => {
        expect(mapErrSpy).toBeCalledWith('SimpleError');
        expect(mapSpy).not.toHaveBeenCalled();
        expect(flatMapSpy).not.toHaveBeenCalled();
      });
    });
  });
    
    // .then(() => {
      
    // })


    // const fromComplex = toAsyncResult([3, 4]);
    // // isExactType<typeof fromComplex, AsyncResult<number[], never>>(true);
    // fromComplex.map((v) => expect(v).toEqual([3, 43]));

    // const fromOkResult = toAsyncResult(new Ok(3));
    // isExactType<typeof fromOkResult, AsyncResult<number, never>>(true);

    // const fromErrResult = toAsyncResult(new Err('SimpleError'));
    // isExactType<typeof fromErrResult, AsyncResult<never, string>>(true);

    // const fromAsyncOkResult = toAsyncResult(new AsyncOk(2));
    // isExactType<typeof fromAsyncOkResult, AsyncResult<number, never>>(true);

    // const fromAsyncErrResult = toAsyncResult(new AsyncErr('SimpleError')) as AsyncResult<never, string>;
    // isExactType<typeof fromAsyncErrResult, AsyncResult<never, string>>(true);

    // const fromResolvingPromise = toAsyncResult(Promise.resolve(2));
    // isExactType<typeof fromResolvingPromise, AsyncResult<number, never>>(true);
    // // isExactType<typeof fromResolvingPromise, AsyncOk<number>>(true);

    // const fromRejectingPromise = toAsyncResult(Promise.reject('Rejection')) as AsyncErr<never>;
    // isExactType<typeof fromRejectingPromise, AsyncResult<never, 'ResolverRejected'>>(true);
  // });

  // test('returns the correct val Type with Primitives', () => {
  //   const r = toAsyncResult(new Err('sting'));
  //   r.

  //   const fn = (s: AsyncResult<number, never>) => {}

  //   fn(r);

  //   isExactType<typeof r, AsyncResult<number, unknown>>(true);
  // });

  // TODO: This isn't right
  // test('returns the correct val Type with nested Results', () => {
  //   const r = toAsyncResult(new AsyncOk(new AsyncOk(new AsyncOk('sd'))));

  //   // r.map((s) => s.)

  //   isExactType<typeof r, AsyncResult<AsyncOk<string>, unknown>>(true);
  // });

  // test('when AsyncOk map gets called with the correct Value Type', () => {
  //   const r = toAsyncResult(new AsyncOk(2));

  //   r.map((val) => {
  //     expect(val).toBe(2);
  //     isExactType<typeof val, number>(true);
  //   });
  // });

  // test('when AsyncOk mapErr does NOT get called', () => {
  //   const r = toAsyncResult(new AsyncOk(2));

  //   const errMapper = jest.fn();

  //   r.mapErr(errMapper);

  //   expect(errMapper).toBeCalledTimes(0);
  // });

  // test('when AsyncErr mapErr does get called with the Correct Error Type', () => {
  //   const r = toAsyncResult(new AsyncErr('SimpleErr'));

  //   r.map((s) => s.)

  //   // const errMapper = jest.fn();

  //   r.mapErr((e) => {
  //     expect(e).toBe('SimpleErr');
  //     isExactType<typeof e, string>(true);
  //   });

  //   // expect(errMapper).toBeCalledTimes(0);
  // });

  // test('returns an AsyncErr when given AsyncErr', () => {
  //   const r = toAsyncResult(new AsyncErr('SimpleError'));

  //   // r.map((s) => s.)
  //   // r.map((s) => s.)

  //   // isExactType<typeof r, AsyncResult<unknown, 'SimpleError'>>(true);
  // });  
});