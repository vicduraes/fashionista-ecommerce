import { all, fork, takeEvery, call, put } from "redux-saga/effects";

import * as catalogActions from "../actions/catalog";

import getAPI from "../../service/api";

function* getCatalog() {
  try {
    const catalog = yield call(getAPI);
    yield put(catalogActions.getCatalogSuccess(catalog));
  } catch (error) {
    yield put(catalogActions.getCatalogError(error.message));
  }
}

function* watchGetCatalog() {
  yield takeEvery(catalogActions.GET_CATALOG_REQUEST, getCatalog);
}

export default function* root() {
  yield all([fork(watchGetCatalog)]);
}
