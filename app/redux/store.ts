import { configureStore } from '@reduxjs/toolkit';

import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './combinedSlices';


const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),

})

export const persistor = persistStore(store)