import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "./types";
import * as ACTIONS from "./actions";
import * as API from "./api";

function* getUsersList() {
  try {
    const { data } = yield call(API.getUsersList);
    console.log("response", data);
    yield put(ACTIONS.recieveUsersList(data));
  } catch (error) {}
}

export function* usersSagas() {
  yield takeLatest(TYPES.GET_USERS_LIST, getUsersList);
}
