import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import homeReducer from "./home-reducer";
import volumeReducer from "./volume-reducer";

const reducers = combineReducers({
    app: appReducer,
    homePage: homeReducer,
    volumeSettingsPage: volumeReducer,
    // gameSettingsPage: volumeReducer,
    // statisticsSettingsPage: volumeReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;