import * as PayloadCodecs from './payloads';
import { isLeft, Left, Right, Either } from 'fp-ts/lib/Either';
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
  | { type: 'BadEncoding', reasons: ioTs.ValidationError[] }
> => {
  const decoded = codec.decode(serialized) as Left<ioTs.Errors> | Right<TRecord>;

  if (isLeft(decoded)) {
    return new Err({
      type: 'BadEncoding',
      reasons: decoded.left,
    });
  }

  return new Ok(decoded.right);
}

const serialize = <
  K extends keyof typeof PayloadCodecs,
  TCodec extends typeof PayloadCodecs[K],
  TRecord extends ioTs.TypeOf<TCodec>,
>(
  _: TCodec, // used only to map the record type to it for now
  record: TRecord
) => record;

export const toResult = <T, E>(either: Either<E, T>): Result<T, E> => {
  if (isLeft(either)) {
    return new Err(either.left);
  }

  return new Ok(either.right);
};

export const io = {
  serialize,
  deserialize,
  toResult,
};