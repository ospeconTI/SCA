/** @format */

import { GET_ALL_SUCCESS, GET_ALL_ERROR, NUEVO_SUCCESS, NUEVO_ERROR, AGREGAR_SUCCESS } from "./actions";

const initialState = {
    entities: [],
    timeStamp: null,
    nuevoTimeStamp: null,
    agregarTimeStamp: null,
    errorTimeStamp: null,
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case NUEVO_SUCCESS:
            newState.nuevoTimeStamp = new Date().getTime();
            break;
        case AGREGAR_SUCCESS:
            newState.agregarTimeStamp = new Date().getTime();
            break;
        case NUEVO_ERROR:
        case GET_ALL_ERROR:
            newState.errorTimeStamp = new Date().getTime();
            break;
        case GET_ALL_SUCCESS:
            newState.entities = action.payload.receive;
            newState.timeStamp = new Date().getTime();
            break;
    }
    return newState;
};
