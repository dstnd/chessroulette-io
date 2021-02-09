import * as io from 'io-ts';
import { formModel } from '../../sdk/http';
import { Resource, RequestOf, ErrResponseOf, OkResponseOf, ResponseOf } from '../../sdk/resource';

export namespace EmailVerification {
  const model = formModel({
    email: io.string,
  });

  const request = io.type(model);
  const okResponse = io.undefined;

  const validationErrResponse = io.type({
    type: io.literal('ValidationErrors'),
    content: io.type({
      invalidFields: io.string,
    }),
  })

  const errResponse = validationErrResponse;

  export const resource = new Resource(
    request,
    okResponse,
    errResponse,
  );

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}