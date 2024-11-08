import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // استفاده از LocalStorage
import authReducer from './slice/authSlice'; // فرض بر اینکه authSlice برای مدیریت احراز هویت است

// پیکربندی redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// ترکیب reducer با persistReducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// ساخت store
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);