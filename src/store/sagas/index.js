import { all, fork, takeEvery, call, put } from "redux-saga/effects";

import * as catalogActions from "../actions/catalog";
import * as productActions from "../actions/product";
import * as cartActions from "../actions/cart";

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

function* addProduct({ payload }) {
  const amoraCart = localStorage.getItem("amoraCart");
  let arrProducts = [];
  const newObj = {};

  if (amoraCart) {
    const objAmoraCart = JSON.parse(amoraCart);
    arrProducts = objAmoraCart.products;
    newObj.count = objAmoraCart.count + 1;
  } else {
    newObj.count = 1;
  }

  try {
    const product = payload;
    arrProducts.push(product);
    newObj.products = arrProducts;
    localStorage.setItem("amoraCart", JSON.stringify(newObj));
    yield call(cartActions.addProduct(product));
  } catch (error) {
    // yield put(cartActions.getProductError(error.message));
  }
}

function* watchAddProduct() {
  yield takeEvery(cartActions.ADD_PRODUCT, addProduct);
}

export default function* root() {
  yield all([
    fork(watchGetCatalog),
    fork(watchGetProduct),
    fork(watchAddProduct),
  ]);
}
