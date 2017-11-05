import { FETCH_USERS, FETCH_USER, FIND_USER_BY_ID } from '../actions/types'


export const fetchUsers = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload
    default:
      return state
  }
}

export const fetchUser = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    default:
      return state
  }
}

export const findUserById = (state = {}, action) => {
  switch (action.type) {
    case FIND_USER_BY_ID:
      return action.payload
    default:
      return state
  }
}
