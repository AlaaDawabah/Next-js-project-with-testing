import * as types from "./types";

const initialState = {
  users: []
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case types.RECIEVE_USERS_LIST:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
