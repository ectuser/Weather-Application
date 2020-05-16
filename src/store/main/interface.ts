import { CityStateModel } from "store/models";

export interface State {
    cityId : number | null;
    cityState : CityStateModel | null;
    isLoading : boolean;
}


