/**
 * Combine all reducers in this file and export the combined reducers.
 */


import { combineReducers } from 'redux';
import { fetchUsers, fetchUser, findUserById } from './fetchUsers';
import { FETCH_USERS_WITH_CHANGES } from '../actions/types';

export default combineReducers({
   users: fetchUsers,
   user: fetchUser,
   userById: findUserById
})
