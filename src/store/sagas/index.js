import { all, fork, takeEvery, call, put } from "redux-saga/effects";

import * as catalogActions from "../actions/catalog";
import * as productActions from "../actions/product";

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

function* getProduct({ payload }) {
  try {
    const catalog = yield call(getAPI);
    const product = catalog.find((prod) => prod.style === payload);
    yield put(productActions.getProductSuccess(product));
  } catch (error) {
    yield put(productActions.getProductError(error.message));
  }
}

function* watchGetProduct() {
  yield takeEvery(productActions.GET_PRODUCT_REQUEST, getProduct);
}

export default function* root() {
  yield all([fork(watchGetCatalog), fork(watchGetProduct)]);
}
