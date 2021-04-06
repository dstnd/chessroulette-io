import * as io from 'io-ts';
import {
  ErrResponseOf,
  getValidationErrorCodec,
  OkResponseOf,
  RequestOf,
  Resource,
  ResponseOf,
} from '../../sdk/resource';
import { formModel, inputValidationError } from '../../sdk/http';

export namespace UserRegistration {
  const model = formModel({
    firstName: io.string,
    lastName: io.string,
    // This is a JWT Token passed by the server
    //  with all the needed information in it like:
    //  - email
    //  - external vendor info
    verificationToken: io.string,
    username: io.string,
    country: io.string,
  });

  const request = io.type(model);

  const okResponse = io.type({
    // TODO: See if this is needed in this call - it's for ease of access at this point
    // uzser: userRecord.
    accessToken: io.string,
  });

  const validationErrResponse = getValidationErrorCodec(model);

  const errResponseDuplicateUser = io.type({
    type: io.literal('DuplicateUser'),
    content: io.undefined,
  });

  const errResponse = io.union([
    inputValidationError(model),
    validationErrResponse,
    errResponseDuplicateUser,
  ]);

  export const resource = new Resource(request, okResponse, errResponse);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
