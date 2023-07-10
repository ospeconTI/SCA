/** @format */

import { GET, GET_SUCCESS, GET_ERROR, GET_ALL, GET_ALL_SUCCESS, GET_ALL_ERROR, ADD, ADD_SUCCESS, ADD_ERROR, UPDATE, UPDATE_SUCCESS, UPDATE_ERROR, PATCH, PATCH_SUCCESS, PATCH_ERROR, REMOVE, REMOVE_SUCCESS, REMOVE_ERROR, GET_BY_ID, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR, ADD_SIMPLE, ADD_SIMPLE_SUCCESS, ADD_SIMPLE_ERROR, ADD_LAPSO, ADD_LAPSO_SUCCESS, ADD_LAPSO_ERROR, ADD_FECHA, ADD_FECHA_SUCCESS, ADD_FECHA_ERROR } from "./actions";

import { RESTRequest, RESTAdd, RESTDelete, RESTUpdate, RESTPatch } from "../rest/actions";

import { apiRequest } from "../api/actions";
import { planesGetAllFetch, planesByIdFetch, planesAddFetch, planesAddSimpleFetch, planesAddLapsoFetch, planesAddFechaFetch, planesModificarFetch, planesQuitarFetch } from "../fetchs";
//import { fetchJSON } from "../../libs/fetchJSON";
//import { fetchOData } from "../../libs/fetchOData";

export const get =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET) {
			dispatch(RESTRequest(planesGetAllFetch, null, GET_SUCCESS, GET_ERROR, action.token));
		}
	};

export const getById =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_BY_ID) {
			dispatch(RESTRequest(planesByIdFetch, action.id, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR, action.token));
		}
	};

export const getAll =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ALL) {
			dispatch(RESTRequest(planesGetAllFetch, null, GET_ALL_SUCCESS, GET_ALL_ERROR, action.token));
		}
	};

export const add =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD) {
			dispatch(RESTAdd(planesAddFetch, action.body, ADD_SUCCESS, ADD_ERROR, action.token));
		}
	};
export const ModificarPlan =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === UPDATE) {
			dispatch(RESTAdd(planesModificarFetch, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token));
		}
	};

export const addSimple =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_SIMPLE) {
			dispatch(RESTAdd(planesAddSimpleFetch, action.body, ADD_SIMPLE_SUCCESS, ADD_SIMPLE_ERROR, action.token));
		}
	};

export const addLapso =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_LAPSO) {
			dispatch(RESTAdd(planesAddLapsoFetch, action.body, ADD_LAPSO_SUCCESS, ADD_LAPSO_ERROR, action.token));
		}
	};

export const addFecha =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_FECHA) {
			dispatch(RESTAdd(planesAddFechaFetch, action.body, ADD_FECHA_SUCCESS, ADD_FECHA_ERROR, action.token));
		}
	};

export const update =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === UPDATE) {
			//dispatch(RESTUpdate(ikePuestos, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token))
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
			dispatch(RESTAdd(planesQuitarFetch, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token));
			//dispatch(RESTUpdate(planesQuitarFetch, "", action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token));
			//dispatch(RESTDelete(ikePuestos, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token))
		}
	};

export const processGet =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_SUCCESS || action.type === GET_ALL_SUCCESS) {
		}
	};

export const processComand =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_SUCCESS || action.type === ADD_SIMPLE_SUCCESS || action.type === ADD_LAPSO_SUCCESS || action.type === ADD_FECHA_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {
		}
	};

export const processError =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ERROR || action.type === GET_ALL_ERROR || action.type === ADD_ERROR || action.type === ADD_SIMPLE_ERROR || action.type === ADD_LAPSO_ERROR || action.type === ADD_FECHA_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {
		}
	};

export const middleware = [get, getById, getAll, add, addSimple, addLapso, addFecha, update, patch, remove, processGet, processComand, processError, ModificarPlan];
