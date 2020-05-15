/* eslint-disable */
import * as validator0 from './index'
import controller0, { middleware as ctrlMiddleware0 } from './@controller'
import controller1, { middleware as ctrlMiddleware1 } from './users/@controller'
import controller2 from './users/_userId@number/@controller'
import middleware0 from './@middleware'
import middleware1 from './users/@middleware'

export default {
  name: '/',
  validator: {
    get: {
      query: { required: false, Class: validator0.ValidQuery }
    },
    post: {
      query: { required: true, Class: validator0.ValidQuery },
      body: { required: true, Class: validator0.ValidBody }
    }
  },
  uploader: ['post'],
  controller: controller0,
  ctrlMiddleware: ctrlMiddleware0,
  middleware: middleware0,
  children: {
    names: [
      {
        name: '/users',
        controller: controller1,
        ctrlMiddleware: ctrlMiddleware1,
        middleware: middleware1,
        children: {
          value: {
            name: '/_userId@number',
            controller: controller2
          }
        }
      }
    ]
  }
}
