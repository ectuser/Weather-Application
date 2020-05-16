import { all, takeLatest, put, call, select } from "redux-saga/effects";
import {
    loadCityState,
    setLoading,
    setCityState,
    saveCity
} from "store/main";
import { Api } from "api";
import { CityStateModel } from "store/models";
import { PayloadAction } from "@reduxjs/toolkit";

export function* loadCityStateWorker(action : PayloadAction<number>){
    try {
        // dispatch
        yield put(setLoading(true));
        // params - query (?id=shit)
        // call async
        const {data} = yield call(Api.get, "get-city", {params : {id : action.payload}});
        const city : CityStateModel = {
            name : data.name,
            currentTemperature : data.tempepature,
            currentWindSpeed : data.windSpeed,
            weather : data.weatherType
        };
        console.log(city);
        yield put(setCityState(city));
    } catch (error) {
        console.error(error)
    }
    finally{
        yield put(setLoading(false));
    }
}

export function* saveCityWorker(action : PayloadAction<{name : string, currentTemperature : number, currentWindSpeed : number, weather : string}>){
    try {
        yield call(Api.post, "save-city", action.payload);
    } catch (error) {
        console.error(error)
    }
}


// necessary shit
// takeLatest only async params
export function* mainSaga() {
    yield all([takeLatest(loadCityState, loadCityStateWorker), takeLatest(saveCity, saveCityWorker)]);
}
