import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { State } from "./interface";
import { CityStateModel } from "store/models";

const initialState: State = {
    cityId : null,
    cityState : null,
    isLoading : false
};

export const main = createSlice({
    name: "main",
    initialState,
    reducers: {
        // method to trigger saga. Async methods 
        loadCityState(state, action : PayloadAction<number>){},
        saveCity(state, action : PayloadAction<{name : string, currentTemperature : number, currentWindSpeed : number, weather : string}>){},
        
        setLoading(state, action : PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setCityState(state, action : PayloadAction<CityStateModel>){
            state.cityState = action.payload;
        }

    },
});
export default main.reducer;

export const {
    loadCityState,
    saveCity,
    setLoading,
    setCityState

} = main.actions;


// getters
export const selectMain = (state: RootState): ReturnType<typeof main.reducer> => state.main;
