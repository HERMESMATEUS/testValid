const types = require("../types");

export const _setGeo = (data) => ({
    type: types.setGeo,
    payload: {
        setGeo: data.setGeo,
        headerGeo: data.headerGeo
    }
});