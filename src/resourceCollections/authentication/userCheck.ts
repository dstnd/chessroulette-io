import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
import { externalVendor } from '../../payloads';
import { externalUserRecord } from '../../records/externalVendorsRecords';

export namespace UserCheck {
  const internalAccountRequest = io.type({
    type: io.literal('internal'),
    email: io.string,
    verificationCode: io.string, // This is the code sent in the Email
  });
  
  const externalAccountRequest = io.type({
    type: io.literal('external'),
    vendor: externalVendor,
    accessToken: io.string,
  });
  
  const request = io.union([
    internalAccountRequest,
    externalAccountRequest,
  ]);
  
  const okResponseInexistentUser = io.type({
    status: io.literal('InexistentUser'),
    external: io.union([
      io.undefined,
      io.type({
        vendor: externalVendor,
        user: externalUserRecord,
      }),
    ]),
  });
  
  const okResponseExistentUser = io.type({
    status: io.literal('ExistentUser'),
    accessToken: io.string,
  });
  
  const okResponse = io.union([
    okResponseInexistentUser,
    okResponseExistentUser,
  ]);

  const errResponseVerificationFailed = io.type({
    type: io.literal('VerificationFailed'),
    content: io.undefined,
  });

  export const resource = new Resource(
    request,
    okResponse,
    errResponseVerificationFailed,
  );

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}