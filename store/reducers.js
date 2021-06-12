import * as types from "./types";

const initialState = {
  usersList: []
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case types.RECIEVE_USERS_LIST:
      return {
        ...state,
        usersList: action.payload
      };
    default:
      return state;
  }
};
