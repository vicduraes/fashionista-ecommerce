import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "amora",
      storage,
      whitelist: ["cart", "products"],
    },
    reducers
  );

  return persistedReducer;
};
