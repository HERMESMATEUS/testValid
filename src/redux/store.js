import { createStore, combineReducers } from 'redux';
import { geoReducer } from './reducers/geoReducer';

const reducers = combineReducers({
    geo: geoReducer,
});

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
