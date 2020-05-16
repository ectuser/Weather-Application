import React, {FC, useCallback} from 'react'
import { MainProps } from './Main.interface'
import { useDispatch, useSelector } from 'react-redux'
import { loadCityState, selectMain, saveCity } from 'store/main';

export const Main : FC<MainProps> = ({}) => {

    const dispatch = useDispatch();
    const {cityState, isLoading} = useSelector(selectMain)

    const loadCity = useCallback(() => {
        dispatch(loadCityState(1));
    }, [])

    const createCity = useCallback(() => {
        dispatch(saveCity({name : "Novosibirsk", currentTemperature : 10, currentWindSpeed : 10, weather : "Sunny"}));
    }, [])

    return(
        <div>
            <button onClick={loadCity}>Load</button>
            {isLoading && <div>Loading...</div>}
            {cityState && <div>{cityState.name}&nbsp;{cityState.currentTemperature}</div>}

            <button onClick={createCity}>Create city</button>
        </div>
    )
}