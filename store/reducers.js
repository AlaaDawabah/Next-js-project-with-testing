import * as types from "./types";

const initialState = {
  usersList: [],
  userDetails:{}
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case types.RECIEVE_USERS_LIST:
      return {
        ...state,
        usersList: action.payload
      };
    case types.RECIEVE_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
};
