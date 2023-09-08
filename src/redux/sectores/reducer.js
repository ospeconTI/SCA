/** @format */

import {
    GET_SUCCESS,
    GET_ERROR,
    GET_ALL_SUCCESS,
    GET_ALL_ERROR,
    PATCH_SUCCESS,
    PATCH_ERROR,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    ADD_SUCCESS,
    ADD_ERROR,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    EDIT,
    GET_BY_ID_SUCCESS,
    GET_BY_ID_ERROR,
    GET_BY_DESCRIPCION_SUCCESS,
    GET_BY_DESCRIPCION_ERROR,
    SUMAR_INTEGRANTE_SUCCESS,
    SUMAR_INTEGRANTE_ERROR,
    QUITAR_INTEGRANTE_SUCCESS,
    QUITAR_INTEGRANTE_ERROR,
    MODIFICAR_INTEGRANTE_SUCCESS,
    MODIFICAR_INTEGRANTE_ERROR,
    USUARIO_HACER_RESPONSABLE_SUCCESS,
    USUARIO_HACER_RESPONSABLE_ERROR,
    GET_ALL_USUARIOS_SUCCESS,
    GET_ALL_USUARIOS_ERROR,
    QUITAR_ROL_INTEGRANTE_SUCCESS,
    QUITAR_ROL_INTEGRANTE_ERROR,
    ASIGNAR_ROL_INTEGRANTE_SUCCESS,
    ASIGNAR_ROL_INTEGRANTE_ERROR,
    ACTIVAR_INTEGRANTE_SUCCESS,
    ACTIVAR_INTEGRANTE_ERROR,
} from "./actions";

const initialState = {
    entities: null,
    timeStamp: null,
    removeTimeStamp: null,
    updateTimeStamp: null,
    addTimeStamp: null,
    errorTimeStamp: null,
    commandErrorTimeStamp: null,
    editTimeStamp: null,
    byId: {
        entities: null,
        timeStamp: null,
        errorTimeStamp: null,
    },
    byDescripcion: {
        entities: null,
        timeStamp: null,
        errorTimeStamp: null,
    },
    all: {
        entities: null,
        count: 0,
        timeStamp: null,
        errorTimeStamp: null,
    },
    sumarIntegrante: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
    quitarIntegrante: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
    modificarIntegrante: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
    usuarioHacerResponsable: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
    usuariosAll: {
        entities: null,
        count: 0,
    },
    quitarRolIntegrante: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
    asignarRolIntegrante: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
    activarIntegrante: {
        timeStamp: null,
        errorTimeStamp: null,
        message: null,
        innerError: null,
    },
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case GET_BY_ID_SUCCESS:
            newState.byId.entities = action.payload.receive;
            newState.byId.timeStamp = new Date().getTime();
            break;
        case GET_BY_DESCRIPCION_SUCCESS:
            newState.byDescripcion.entities = action.payload.receive;
            newState.byDescripcion.timeStamp = new Date().getTime();
            break;
        case GET_ALL_SUCCESS:
            newState.all.entities = action.payload.receive.sort((a, b) => a.descripcion.localeCompare(b.descripcion));
            newState.all.timeStamp = new Date().getTime();
            break;
        case GET_ALL_USUARIOS_SUCCESS:
            newState.usuariosAll.entities = action.payload.receive.sort((a, b) => a.apellido.localeCompare(b.apellido));
            newState.usuariosAll.timeStamp = new Date().getTime();
            break;
        case EDIT:
            newState.editTimeStamp = new Date().getTime();
            newState.entities.currentItem = action.item;
            newState.modo = action.modo;
            break;
        case UPDATE_SUCCESS:
            newState.updateTimeStamp = new Date().getTime();
            break;
        case PATCH_SUCCESS:
            newState.updateTimeStamp = new Date().getTime();
            break;
        case REMOVE_SUCCESS:
            newState.removeTimeStamp = new Date().getTime();
            break;
        case ADD_SUCCESS:
            newState.addTimeStamp = new Date().getTime();
            break;
        case SUMAR_INTEGRANTE_SUCCESS:
            newState.sumarIntegrante.timeStamp = new Date().getTime();
            break;
        case QUITAR_INTEGRANTE_SUCCESS:
            newState.quitarIntegrante.timeStamp = new Date().getTime();
            break;
        case MODIFICAR_INTEGRANTE_SUCCESS:
            newState.modificarIntegrante.timeStamp = new Date().getTime();
            break;
        case USUARIO_HACER_RESPONSABLE_SUCCESS:
            newState.usuarioHacerResponsable.timeStamp = new Date().getTime();
            break;
        case QUITAR_ROL_INTEGRANTE_SUCCESS:
            newState.quitarRolIntegrante.timeStamp = new Date().getTime();
            break;
        case ASIGNAR_ROL_INTEGRANTE_SUCCESS:
            newState.asignarRolIntegrante.timeStamp = new Date().getTime();
            break;
        case ACTIVAR_INTEGRANTE_SUCCESS:
            newState.activarIntegrante.timeStamp = new Date().getTime();
            break;
        case GET_BY_ID_ERROR:
            newState.byId.errorTimeStamp = new Date().getTime();
            break;
        case GET_BY_DESCRIPCION_ERROR:
            newState.byDescripcion.errorTimeStamp = new Date().getTime();
            break;
        case GET_ALL_ERROR:
            newState.all.entities = null;
            newState.all.errorTimeStamp = new Date().getTime();
            break;
        case GET_ALL_USUARIOS_ERROR:
            newState.usuariosAll.entities = null;
            newState.usuariosAll.errorTimeStamp = new Date().getTime();
            break;
        case SUMAR_INTEGRANTE_ERROR:
            newState.sumarIntegrante.errorTimeStamp = new Date().getTime();
            newState.sumarIntegrante.message = action.payload.receive.Message;
            newState.sumarIntegrante.innerError = action.payload.receive.errors;
            break;
        case QUITAR_INTEGRANTE_ERROR:
            newState.quitarIntegrante.errorTimeStamp = new Date().getTime();
            newState.quitarIntegrante.message = action.payload.receive.Message;
            newState.quitarIntegrante.innerError = action.payload.receive.errors;
            break;
        case MODIFICAR_INTEGRANTE_ERROR:
            newState.modificarIntegrante.errorTimeStamp = new Date().getTime();
            newState.modificarIntegrante.message = action.payload.receive.Message;
            newState.modificarIntegrante.innerError = action.payload.receive.errors;
            break;
        case USUARIO_HACER_RESPONSABLE_ERROR:
            newState.usuarioHacerResponsable.errorTimeStamp = new Date().getTime();
            newState.usuarioHacerResponsable.message = action.payload.receive.Message;
            newState.usuarioHacerResponsable.innerError = action.payload.receive.errors;
            break;
        case QUITAR_ROL_INTEGRANTE_ERROR:
            newState.quitarRolIntegrante.errorTimeStamp = new Date().getTime();
            newState.quitarRolIntegrante.message = action.payload.receive.Message;
            newState.quitarRolIntegrante.innerError = action.payload.receive.errors;
            break;
        case ASIGNAR_ROL_INTEGRANTE_ERROR:
            newState.asignarRolIntegrante.errorTimeStamp = new Date().getTime();
            newState.asignarRolIntegrante.message = action.payload.receive.Message;
            newState.asignarRolIntegrante.innerError = action.payload.receive.errors;
            break;
        case ACTIVAR_INTEGRANTE_ERROR:
            newState.activarIntegrante.errorTimeStamp = new Date().getTime();
            newState.activarIntegrante.message = action.payload.receive.Message;
            newState.activarIntegrante.innerError = action.payload.receive.errors;
            break;
        case UPDATE_ERROR:
        case REMOVE_ERROR:
        case PATCH_ERROR:
        case ADD_ERROR:
            newState.commandErrorTimeStamp = new Date().getTime();
            break;
    }
    return newState;
};
