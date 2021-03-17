import { delay, put, takeEvery } from "@redux-saga/core/effects";
import {
  increase,
  decrease,
  INCREASE_SAGA,
  DECREASE_SAGA,
} from "../../action/counter";

function* increaseSagaFunc() {
  yield put(increase());
  yield console.log("increase");
}

function* decreaseSagaFunc() {
  yield put(decrease());
  yield console.log("decrease");
}

function* counterSaga() {
  yield takeEvery(INCREASE_SAGA, increaseSagaFunc);
  yield takeEvery(DECREASE_SAGA, decreaseSagaFunc);
}

export default counterSaga;
