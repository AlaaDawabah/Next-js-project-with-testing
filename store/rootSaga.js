import { all } from "redux-saga/effects";
import { usersSagas } from "./sagas";

export default function* rootSaga() {
  yield all([
    usersSagas()
  ]);
}
