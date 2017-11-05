/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. 
 */



export const FETCH_USERS_ASYNC= "FETCH_USERS_ASYNC";
export const FETCH_USERS = "FETCH_USERS";

export const FETCH_USER_ASYNC= "FETCH_USER_ASYNC";
export const FETCH_USER = "FETCH_USER";

export const FIND_USER_BY_ID_ASYNC = "FIND_USER_BY_ID_ASYNC";
export const FIND_USER_BY_ID = "FIND_USER_BY_ID";

export const CHANGE_USER_DATA_ASYNC = "CHANGE_USER_DATA_ASYNC";
export const CHANGE_USER_DATA = "CHANGE_USER_DATA";
