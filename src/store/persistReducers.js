import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
