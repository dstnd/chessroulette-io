import * as PayloadCodecs from './payloads';
import { isLeft, Left, Right } from 'fp-ts/lib/Either';
import { Err, Ok, Result } from './ts-results';
import * as ioTs from 'io-ts';

const deserialize = <
  K extends keyof typeof PayloadCodecs,
  TCodec extends typeof PayloadCodecs[K],
  TRecord extends ioTs.TypeOf<TCodec>,
>(
  codec: TCodec,
  serialized: string,
): Result<
  TRecord, 
  // | 'BadSerialized'
  | { type: 'BadEncoding', reasons: ioTs.ValidationError[] }
> => {
  // try {
  //   let payload;
  //   if (typeof serialized === 'string') {
  //     payload = JSON.parse(serialized);;
  //   } else {`
  //     // Add other types if needed
  //     payload = serialized;
  //   }
    
  const decoded = codec.decode(serialized) as Left<ioTs.Errors> | Right<TRecord>;

  if (isLeft(decoded)) {
    return new Err({
      type: 'BadEncoding',
      reasons: decoded.left,
    });
  }

  return new Ok(decoded.right);
  // } catch (e) {
  //   return new Err('BadSerialized')
  // }
}

const serialize = <
  K extends keyof typeof PayloadCodecs,
  TCodec extends typeof PayloadCodecs[K],
  TRecord extends ioTs.TypeOf<TCodec>,
>(
  _: TCodec, // used only to map the record type to it for now
  record: TRecord
) => record;

export const io = {
  serialize,
  deserialize
}