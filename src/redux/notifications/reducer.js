/** @format */

import { SUBSCRIBE, SUBSCRIBE_OK, SUBSCRIBE_ERROR, SUSCRIBIR } from "./actions";

const initialState = {
    timeStamp: null,
    errorTimeStamp: null,
    suscribir: false,
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case SUBSCRIBE_OK:
            newState.timeStamp = new Date().getTime();
            break;
        case SUBSCRIBE_ERROR:
            newState.errorTimeStamp = new Date().getTime();
            break;
        case SUSCRIBIR:
            newState.suscribir = true;
            break;
    }

    return newState;
};
