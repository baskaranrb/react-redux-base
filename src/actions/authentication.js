import { AUTHENTICATE } from './types'

const _authenticate = params => ({
  type: AUTHENTICATE,
  ...params
})

export const doAuthenticate = (username, password) => dispatch => {
  dispatch(_authenticate(username, password));
}