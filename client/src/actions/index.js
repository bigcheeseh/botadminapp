import { FETCH_USERS_ASYNC, FETCH_USER_ASYNC, FIND_USER_BY_ID_ASYNC, CHANGE_USER_DATA_ASYNC } from './types';

export const fetchUsers = (payload) => (dispatch) => {

  dispatch({ type: FETCH_USERS_ASYNC, payload })
}

export const fetchUser = (payload) => (dispatch) => {

  dispatch({ type: FETCH_USER_ASYNC, payload })
}

export const findUserById = (payload) => (dispatch) => {

  dispatch({ type: FIND_USER_BY_ID_ASYNC, payload })
}

export const changeUserData = (payload) => (dispatch) => {

  dispatch({ type: CHANGE_USER_DATA_ASYNC, payload })
}
