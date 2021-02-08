import { formModel } from 'src/sdk/http';
import { Resource } from './Resource';
import * as io from 'io-ts';


const model = formModel({
  email: io.string,
});
const request = io.type(model);
const responseOkPayload = io.type({
  response: io.literal('works'),
});
// const responseErrPayload = io.type({
//   type: io.string,
//   content: io.type({
//     myError: io.string,
//   })
// })

// const err = responseErrorCodec(
//   'asda' as string, 
//   io.type({
//     myError: io.string,
//   }),
// )

const customTypedErrorCodec = io.type({
  type: io.literal('MyCustomError'),
  content: io.type({
    myVal: io.number,
  }),
});

export const verifyEmailResource = new Resource(
  request,
  responseOkPayload,
  customTypedErrorCodec,
);

const res = verifyEmailResource.request({ email: 'asda@asd.com' }, (d) => {
  return Promise.resolve({ data: 'asd' });
});

res.map((s) => {
  s.response === 'works'
}).mapErr((e) => {
  // if (e.type === 'MyCustomError')

  // if (e.type === 'MyCustomError') {

  // }
  // if (e.type === '') {
  //   e.content.myVal 
  // }
  // if (e.type === '')

  if (e.type === 'MyCustomError') {
    
  }
  // if (e.type === '')
  // if (e.)
  // if (e.type === '')
  // if (e.type === '') {}
  // if (e.type === 'CustomError') {
    
  // }
})

// verifyEmailResource.parseRequest({}).map((s) => s.email).mapErr((e) => e[0].)
