import { Middleware, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(middlewares),
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
