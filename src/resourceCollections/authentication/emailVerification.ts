import * as io from 'io-ts';
import { formModel } from '../../sdk/http';
import { Resource, RequestOf, ErrResponseOf, OkResponseOf, ResponseOf, getValidationErrorCodec } from '../../sdk/resource';

export namespace EmailVerification {
  const model = formModel({
    email: io.string,
  });

  const request = io.type(model);
  const okResponse = io.undefined;

  const validationErrResponse = getValidationErrorCodec(model);

  const emailCantSendError = io.type({
    type: io.literal('EmailCantSendError'),
    content: io.undefined,
  });

  const errResponse = io.union([validationErrResponse, emailCantSendError]);

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