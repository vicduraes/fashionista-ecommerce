import { combineReducers } from "redux";
import catalog from "./catalog";
import product from "./product";
import cart from "./cart";

const rootReducer = combineReducers({ catalog, product, cart });

export default rootReducer;
