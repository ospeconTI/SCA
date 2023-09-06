/** @format */

import { AUTORIZACION, AUTORIZACION_SUCCESS, AUTORIZACION_ERROR, ACCEPT_SUCCESS, ACCEPT_ERROR, ACEPTAR_USUARIO_SUCCESS, ACEPTAR_USUARIO_ERROR } from "./actions";

const initialState = {
    entities: null,
    tokenAutentication: null,
    timeStamp: null,
    errorTimeStamp: null,
    acceptTimeStamp: null,
    aceptarUsuario: {
        timeStamp: null,
        errorTimeStamp: null,
    },
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case AUTORIZACION:
            newState.tokenAutentication = action.token;
            break;
        case ACEPTAR_USUARIO_SUCCESS:
            newState.aceptarUsuario.timeStamp = new Date().getTime();
            break;
        case AUTORIZACION_SUCCESS:
            newState.entities = action.payload.receive;
            newState.entities.result.sectores.push({ ...newState.entities.result.sectores[0] });
            newState.entities.result.sectores.push({ ...newState.entities.result.sectores[0] });
            newState.entities.result.sectores.push({ ...newState.entities.result.sectores[0] });

            newState.timeStamp = new Date().getTime();
            break;
        case AUTORIZACION_ERROR:
            newState.errorTimeStamp = new Date().getTime();
            break;
        case ACEPTAR_USUARIO_ERROR:
            newState.aceptarUsuario.errorTimeStamp = new Date().getTime();
            break;
        case ACCEPT_SUCCESS:
            newState.acceptTimeStamp = new Date().getTime();
            break;
        case AUTORIZACION_ERROR:
            newState.errorTimeStamp = new Date().getTime();
            break;
    }
    return newState;
};
