import { all } from "@redux-saga/core/effects";
import counterSaga from "./counter";

function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootSaga;
