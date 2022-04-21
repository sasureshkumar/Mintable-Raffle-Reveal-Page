import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import persistenceConfig from '../config/persistence';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducer';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistReducer(persistenceConfig, rootReducers),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSagas);

export type State = ReturnType<typeof store.getState>;

export const persistenceStore = persistStore(store);

export default store;
