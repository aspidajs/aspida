/* eslint-disable */
import * as Types from '../../../../../../../@types'

export interface Methods {
  post: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    reqData: {
      users: number[]
      self: boolean
    }
  }
}