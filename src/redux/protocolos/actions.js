/** @format */

export const GET_ALL = "[protocolos] GET_ALL";
export const GET_ALL_SUCCESS = "[protocolos] GET_ALL success";
export const GET_ALL_ERROR = "[protocolos] GET_ALL error";

export const NUEVO = "[protocolos] NUEVO";
export const NUEVO_SUCCESS = "[protocolos] NUEVO success";
export const NUEVO_ERROR = "[protocolos] NUEVO error";

export const AGREGAR = "[protocolos] AGREGAR";
export const AGREGAR_SUCCESS = "[protocolos] AGREGAR success";
export const AGREGAR_ERROR = "[protocolos] AGREGAR error";

export const getAll = (options) => ({
    type: GET_ALL,
    options: options,
    success: GET_ALL_SUCCESS,
    error: GET_ALL_ERROR,
});
export const nuevo = (descripcion, tareaId, planId) => ({
    type: NUEVO,
    descripcion: descripcion,
    tareaId: tareaId,
    planId: planId,
});
export const agregar = (protocoloId, planId) => ({
    type: AGREGAR,
    protocoloId: protocoloId,
    planId: planId,
});
