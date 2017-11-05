/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { FETCH_USERS_ASYNC, FETCH_USER_ASYNC, FIND_USER_BY_ID_ASYNC, CHANGE_USER_DATA_ASYNC } from './types';

export const fetchUsers = (payload) => (dispatch) => {
  // загрузить юзеров из базы данных для данной страницы
  dispatch({ type: FETCH_USERS_ASYNC, payload })
}

export const fetchUser = (payload) => (dispatch) => {
  // загрузить одного юзера по логину
  dispatch({ type: FETCH_USER_ASYNC, payload })
}

export const findUserById = (payload) => (dispatch) => {
  // загрузить одного юзера по id, при заходе в его карточку
  dispatch({ type: FIND_USER_BY_ID_ASYNC, payload })
}

export const changeUserData = (payload) => (dispatch) => {
  // изменить данные юзера при нахождении в его карточке
  dispatch({ type: CHANGE_USER_DATA_ASYNC, payload })
}
