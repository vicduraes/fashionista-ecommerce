// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./reducers";
// import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// sagaMiddleware.run(rootSaga);

// export default store;

import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";

import persistReducers from "./persistReducers";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
