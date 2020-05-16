import { combineReducers } from '@reduxjs/toolkit';
import main from './main';

export const createRootReducer = () => combineReducers({
    // modules are here
    main
});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;