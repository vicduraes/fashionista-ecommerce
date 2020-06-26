import { combineReducers } from "redux";

import catalog from "./catalog";
import product from "./product";
import cart from "./cart";

const rootReducer = combineReducers({ catalog, cart, product });

export default rootReducer;
