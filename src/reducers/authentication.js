import { AUTHENTICATE } from '../actions/types';

export const authentication = (state = {}, action) => {
  switch(action.type) {
    case AUTHENTICATE: 
      return {username: action.username, password: action.password};
    default: return state;
  }
}