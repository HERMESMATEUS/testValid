const types = require("../types");

export const geoReducer = (state = { setGeo: [], headerGeo: false }, action) => {
    switch (action.type) {
        case types.setGeo:
            return {
                ...state,
                setGeo: action.payload.setGeo,
                headerGeo: action.payload.headerGeo
            }
        default:
            return state;
    }
}
