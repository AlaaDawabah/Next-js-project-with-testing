import * as types from "./types";

export const getUsersList = (payload) => ({
    type: types.GET_USERS_LIST,
    payload
})
export const recieveUsersList = (payload) => ({
    type: types.RECIEVE_USERS_LIST,
    payload
})
export const getUserDetails = (payload) => ({
    type: types.GET_USER_DETAILS,
    payload
})
export const recieveUserDetails = (payload) => ({
    type: types.RECIEVE_USER_DETAILS,
    payload
})