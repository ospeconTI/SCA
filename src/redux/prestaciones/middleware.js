import {
	GET,
	GET_SUCCESS,
	GET_ERROR,
	GET_PROVINCIA_PRESTACION,
	GET_PROVINCIA_PRESTACION_SUCCESS,
	GET_PROVINCIA_PRESTACION_ERROR,
	GET_PRESTACIONES_POR_PRESTADOR,
	GET_PRESTACIONES_POR_PRESTADOR_SUCCESS,
	GET_PRESTACIONES_POR_PRESTADOR_ERROR,
} from "./actions";
import { RESTRequest } from "../rest/actions";

import { nomencladorGetAllFetch, prestacionGetAllFetch, prestacionPorPrestadorGetAllFetch } from "../fetchs";

export const get =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET) {
			dispatch(RESTRequest(prestacionGetAllFetch, "", GET_SUCCESS, GET_ERROR, ""));
		}
	};

export const getProvinciaPrestacion =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_PROVINCIA_PRESTACION) {
			//		dispatch(RESTRequest(prestacionGetAllFetch, "?prestac=" + action.prestacion + "&provin=CATAMARCA", GET_PROVINCIA_PRESTACION_SUCCESS, GET_PROVINCIA_PRESTACION_ERROR, ""));
			dispatch(RESTRequest(prestacionGetAllFetch, "?prestac=" + action.prestacion + "&provin=" + action.provincia, GET_PROVINCIA_PRESTACION_SUCCESS, GET_PROVINCIA_PRESTACION_ERROR, ""));
		}
	};

export const getPrestacionesPorPrestador =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_PRESTACIONES_POR_PRESTADOR) {
			//		dispatch(RESTRequest(prestacionGetAllFetch, "?prestac=" + action.prestacion + "&provin=CATAMARCA", GET_PROVINCIA_PRESTACION_SUCCESS, GET_PROVINCIA_PRESTACION_ERROR, ""));
			dispatch(RESTRequest(prestacionPorPrestadorGetAllFetch, "?pPrestador=" + action.prestador, GET_PRESTACIONES_POR_PRESTADOR_SUCCESS, GET_PRESTACIONES_POR_PRESTADOR_ERROR, ""));
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

export const processError =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ERROR) {
		}
	};

export const middleware = [get, getProvinciaPrestacion, getPrestacionesPorPrestador, processGet, processError];
