/** @format */

import {
    GET_BY_ID,
    GET_BY_ID_SUCCESS,
    GET_BY_ID_ERROR,
    GET_ALL,
    GET_ALL_SUCCESS,
    GET_ALL_ERROR,
    ADD,
    ADD_SUCCESS,
    ADD_ERROR,
    UPDATE,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    PATCH,
    PATCH_SUCCESS,
    PATCH_ERROR,
    REMOVE,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    GET_BY_DESCRIPCION,
    GET_BY_DESCRIPCION_SUCCESS,
    GET_BY_DESCRIPCION_ERROR,
    SUMAR_INTEGRANTE,
    SUMAR_INTEGRANTE_SUCCESS,
    SUMAR_INTEGRANTE_ERROR,
    QUITAR_INTEGRANTE,
    QUITAR_INTEGRANTE_SUCCESS,
    QUITAR_INTEGRANTE_ERROR,
    MODIFICAR_INTEGRANTE,
    MODIFICAR_INTEGRANTE_SUCCESS,
    MODIFICAR_INTEGRANTE_ERROR,
    USUARIO_HACER_RESPONSABLE,
    USUARIO_HACER_RESPONSABLE_SUCCESS,
    USUARIO_HACER_RESPONSABLE_ERROR,
    GET_ALL_USUARIOS,
    GET_ALL_USUARIOS_SUCCESS,
    GET_ALL_USUARIOS_ERROR,
    QUITAR_ROL_INTEGRANTE,
    QUITAR_ROL_INTEGRANTE_SUCCESS,
    QUITAR_ROL_INTEGRANTE_ERROR,
    ASIGNAR_ROL_INTEGRANTE,
    ASIGNAR_ROL_INTEGRANTE_SUCCESS,
    ASIGNAR_ROL_INTEGRANTE_ERROR,
    ACTIVAR_INTEGRANTE,
    ACTIVAR_INTEGRANTE_SUCCESS,
    ACTIVAR_INTEGRANTE_ERROR,
} from "./actions";

import { RESTRequest, RESTAdd, RESTDelete, RESTUpdate, RESTPatch } from "../rest/actions";

import { sectoresGetByIdFetch, sectoresGetAllFetch, sectoresGetByDescripcioniFetch, sectoresAddFetch, sectoresUpdateFetch, sectoresSumarIntegranteFetch, sectoresQuitarIntegranteFetch, sectoresModificarIntegranteFetch, sectoresUsuarioHacerResponsableFetch, sectoresGetAllUsuariosFetch, sectoresQuitarRolIntegranteFetch, sectoresAsignarRolIntegranteFetch, sectoresActivarIntegranteFetch } from "../fetchs";

export const getById =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_BY_ID) {
            dispatch(RESTRequest(sectoresGetByIdFetch, action.id, GET_BY_ID_SUCCESS, GET_BY_ID_SUCCESS, action.token));
        }
    };

export const getByDescripcion =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_BY_DESCRIPCION) {
            dispatch(RESTRequest(sectoresGetByDescripcioniFetch, action.descripcion, GET_BY_DESCRIPCION_SUCCESS, GET_BY_DESCRIPCION_ERROR, action.token));
        }
    };

export const getAll =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_ALL) {
            dispatch(RESTRequest(sectoresGetAllFetch, null, GET_ALL_SUCCESS, GET_ALL_ERROR, action.token));
        }
    };

export const getAllUsuarios =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_ALL_USUARIOS) {
            dispatch(RESTRequest(sectoresGetAllUsuariosFetch, null, GET_ALL_USUARIOS_SUCCESS, GET_ALL_USUARIOS_ERROR, action.token));
        }
    };

export const add =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ADD) {
            dispatch(RESTAdd(sectoresAddFetch, action.body, ADD_SUCCESS, ADD_ERROR, action.token));
        }
    };

export const update =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === UPDATE) {
            dispatch(RESTUpdate(sectoresUpdateFetch, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token));
        }
    };

export const patch =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === PATCH) {
            dispatch(RESTPatch(sectoresUpdateFetch, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token));
        }
    };

export const remove =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === REMOVE) {
            //dispatch(RESTDelete(ikePuestos, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token))
        }
    };

export const sumarIntegrante =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === SUMAR_INTEGRANTE) {
            dispatch(RESTUpdate(sectoresSumarIntegranteFetch, null, action.body, SUMAR_INTEGRANTE_SUCCESS, SUMAR_INTEGRANTE_ERROR, action.token));
        }
    };

export const sumarIntegranteSuccess =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === SUMAR_INTEGRANTE_SUCCESS) {
        }
    };

export const quitarIntegrante =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === QUITAR_INTEGRANTE) {
            dispatch(RESTUpdate(sectoresQuitarIntegranteFetch, null, action.body, QUITAR_INTEGRANTE_SUCCESS, QUITAR_INTEGRANTE_ERROR, action.token));
        }
    };

export const modificarIntegrante =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === MODIFICAR_INTEGRANTE) {
            dispatch(RESTUpdate(sectoresModificarIntegranteFetch, null, action.body, MODIFICAR_INTEGRANTE_SUCCESS, MODIFICAR_INTEGRANTE_ERROR, action.token));
        }
    };

export const usuarioHacerResponsable =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === USUARIO_HACER_RESPONSABLE) {
            dispatch(RESTUpdate(sectoresUsuarioHacerResponsableFetch, null, action.body, USUARIO_HACER_RESPONSABLE_SUCCESS, USUARIO_HACER_RESPONSABLE_ERROR, action.token));
        }
    };

export const quitarRolIntegrante =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === QUITAR_ROL_INTEGRANTE) {
            dispatch(RESTUpdate(sectoresQuitarRolIntegranteFetch, null, action.body, QUITAR_ROL_INTEGRANTE_SUCCESS, QUITAR_ROL_INTEGRANTE_ERROR, action.token));
        }
    };

export const asignarRolIntegrante =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ASIGNAR_ROL_INTEGRANTE) {
            dispatch(RESTUpdate(sectoresAsignarRolIntegranteFetch, null, action.body, ASIGNAR_ROL_INTEGRANTE_SUCCESS, ASIGNAR_ROL_INTEGRANTE_ERROR, action.token));
        }
    };

export const activarIntegrante =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ACTIVAR_INTEGRANTE) {
            dispatch(RESTUpdate(sectoresActivarIntegranteFetch, null, action.body, ACTIVAR_INTEGRANTE_SUCCESS, ACTIVAR_INTEGRANTE_ERROR, action.token));
        }
    };

export const processGet =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_BY_ID_SUCCESS || action.type === GET_ALL_SUCCESS) {
        }
    };

export const processComand =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {
        }
    };

export const processError =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_BY_ID_ERROR || action.type === GET_ALL_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {
        }
    };

export const middleware = [getById, usuarioHacerResponsable, getByDescripcion, getAll, getAllUsuarios, add, update, patch, remove, sumarIntegrante, quitarIntegrante, activarIntegrante, modificarIntegrante, quitarRolIntegrante, asignarRolIntegrante, processGet, processComand, processError, sumarIntegranteSuccess];
