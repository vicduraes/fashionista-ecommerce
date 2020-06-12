import { combineReducers } from "redux";
import catalog from "./catalog";
import product from "./product";

const rootReducer = combineReducers({ catalog, product });

export default rootReducer;
