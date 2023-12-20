/** @format */

import { GET_ALL, GET_ALL_SUCCESS, GET_ALL_ERROR, NUEVO, NUEVO_ERROR, NUEVO_SUCCESS, AGREGAR, AGREGAR_SUCCESS, AGREGAR_ERROR, getAll } from "./actions";

import { RESTRequest, RESTAdd, RESTDelete, RESTUpdate, RESTPatch } from "../rest/actions";

import { apiRequest } from "../api/actions";
import { protocoloNuevoFetch, protocoloAgregarFetch, protocoloGetAllFetch } from "../fetchs";
import { selection } from "../ui/actions";
import { getAll as getAllPlanes } from "../planes/actions";

export const get =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_ALL) {
            dispatch(RESTRequest(protocoloGetAllFetch, null, GET_ALL_SUCCESS, GET_ALL_ERROR, action.token));
        }
    };

export const nuevo =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === NUEVO) {
            dispatch(RESTAdd(protocoloNuevoFetch, { descripcion: action.descripcion, tareaId: action.tareaId, planId: action.planId }, NUEVO_SUCCESS, NUEVO_ERROR, action.token));
        }
    };

export const agregar =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === AGREGAR) {
            dispatch(RESTAdd(protocoloAgregarFetch, { protocoloId: action.protocoloId, planId: action.planId }, AGREGAR_SUCCESS, AGREGAR_ERROR, action.token));
        }
    };

export const processGet =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_ALL_SUCCESS) {
        }
    };

export const processNuevo =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === NUEVO_SUCCESS) {
            dispatch(getAll());
        }
    };
export const processAgregar =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === AGREGAR_SUCCESS) {
            dispatch(getAllPlanes());
        }
    };

export const processError =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_ALL_ERROR || action.type == NUEVO_ERROR) {
        }
    };

export const middleware = [get, nuevo, processGet, processNuevo, processError, agregar, processAgregar];
