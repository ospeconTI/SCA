import {
	GET,
	GET_SUCCESS,
	GET_ERROR,
	GET_BY_PLAN_ID,
	GET_BY_PLAN_ID_SUCCESS,
	GET_BY_PLAN_ID_ERROR,
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
	GET_BY_ID,
	GET_BY_ID_SUCCESS,
	GET_BY_ID_ERROR,
	DAR_CUMPLIMIENTO,
	DAR_CUMPLIMIENTO_SUCCESS,
	DAR_CUMPLIMIENTO_ERROR,
	ADD_SIMPLE,
	ADD_SIMPLE_SUCCESS,
	ADD_SIMPLE_ERROR,
	ADD_LAPSO,
	ADD_LAPSO_SUCCESS,
	ADD_LAPSO_ERROR,
	ADD_FECHA,
	ADD_FECHA_SUCCESS,
	ADD_FECHA_ERROR,
	GET_MI_SECTOR,
	GET_MI_SECTOR_SUCCESS,
	GET_MI_SECTOR_ERROR,
	QUITAR_CUMPLIMIENTO,
	QUITAR_CUMPLIMIENTO_SUCCESS,
	QUITAR_CUMPLIMIENTO_ERROR,
} from "./actions";

import { RESTRequest, RESTAdd, RESTDelete, RESTUpdate, RESTPatch } from "../rest/actions";

import { apiRequest } from "../api/actions";
import { tareaByPlanIdFetch, tareaByIdFetch, tareaDarCumplimientoFetch, tareaQuitarCumplimientoFetch, tareaAddSimpleFetch, tareaAddLapsoFetch, tareaAddFechaFetch, tareaQuitarFetch, tareaModificarDescripcionFetch, tareaGetMiSectorFetch } from "../fetchs";

export const get =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET) {
		}
	};

export const getById =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_BY_ID) {
			dispatch(RESTRequest(tareaByIdFetch, action.id, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR, action.token));
		}
	};

export const getByPlanId =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_BY_PLAN_ID) {
			dispatch(RESTRequest(tareaByPlanIdFetch, action.options, GET_BY_PLAN_ID_SUCCESS, GET_BY_PLAN_ID_ERROR, action.token));
		}
	};

export const getMiSector =
	({ dispatch, getState }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_MI_SECTOR) {
			if (getState().miPerfil?.sector?.token) {
				dispatch(RESTRequest(tareaGetMiSectorFetch, "", GET_MI_SECTOR_SUCCESS, GET_MI_SECTOR_ERROR, getState().miPerfil?.sector?.token));
			}
		}
	};

export const add =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD) {
			//dispatch(RESTAdd(ikePuestos, action.body, ADD_SUCCESS, ADD_ERROR, action.token))
		}
	};

export const addSimple =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_SIMPLE) {
			dispatch(RESTAdd(tareaAddSimpleFetch, action.body, ADD_SIMPLE_SUCCESS, ADD_SIMPLE_ERROR, action.token));
		}
	};

export const addLapso =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_LAPSO) {
			dispatch(RESTAdd(tareaAddLapsoFetch, action.body, ADD_LAPSO_SUCCESS, ADD_LAPSO_ERROR, action.token));
		}
	};

export const addFecha =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_FECHA) {
			dispatch(RESTAdd(tareaAddFechaFetch, action.body, ADD_FECHA_SUCCESS, ADD_FECHA_ERROR, action.token));
		}
	};

export const update =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === UPDATE) {
			dispatch(RESTUpdate(tareaModificarDescripcionFetch, null, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token));
		}
	};

export const patch =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === PATCH) {
			//dispatch(RESTPatch(ikePuestos, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token))
		}
	};

export const remove =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === REMOVE) {
			dispatch(RESTUpdate(tareaQuitarFetch, null, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token));
			//dispatch(RESTPatch(ikePuestos, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token))
		}
	};

export const darCumplimiento =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === DAR_CUMPLIMIENTO) {
			dispatch(RESTAdd(tareaDarCumplimientoFetch, action.idTarea, DAR_CUMPLIMIENTO_SUCCESS, DAR_CUMPLIMIENTO_ERROR, action.token));
		}
	};

export const quitarCumplimiento =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === QUITAR_CUMPLIMIENTO) {
			dispatch(RESTAdd(tareaQuitarCumplimientoFetch, action.idTarea, QUITAR_CUMPLIMIENTO_SUCCESS, QUITAR_CUMPLIMIENTO_ERROR, action.token));
		}
	};

export const processGet =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_SUCCESS) {
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
		if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {
		}
	};

export const middleware = [get, getById, getByPlanId, getMiSector, add, addSimple, addLapso, addFecha, darCumplimiento, quitarCumplimiento, update, patch, remove, processGet, processComand, processError];
