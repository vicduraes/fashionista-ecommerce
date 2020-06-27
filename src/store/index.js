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
