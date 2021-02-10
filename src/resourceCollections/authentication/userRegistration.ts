import * as io from 'io-ts';
import { ErrResponseOf, getValidationErrorCodec, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
import { externalVendor } from '../../payloads';
import { formModel, inputValidationError } from '../../sdk/http';

export namespace UserRegistration {
  const model = formModel({
    email: io.string,
    firstName: io.string,
    lastName: io.string,
    external: io.union([
      io.undefined,
      io.type({
        vendor: externalVendor,
        accessToken: io.string,
      }),
    ]),
  });

  const request = io.type(model);

  const okResponse = io.type({
    // TODO: See if this is needed in this call - it's for ease of access at this point
    // user: userRecord, 
    accessToken: io.string,
  });

  const validationErrResponse = getValidationErrorCodec(model);

  const errResponse = io.union([inputValidationError(model), validationErrResponse]);

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