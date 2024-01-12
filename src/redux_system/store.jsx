import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { auth } from "./redux_slices/auth/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mh"],
};

const rootReducer = combineReducers({
  mh: auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// end

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
