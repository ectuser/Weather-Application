import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

export const createStore = () => {
    const store = configureStore({
        reducer: createRootReducer(),
        middleware: [
            ...getDefaultMiddleware({ thunk: false, serializableCheck: true }),
        sagaMiddleware
        ],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};