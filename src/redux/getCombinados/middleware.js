import { GET_INICIAL, successInicial, noSuccessInicial } from "./actions";

import { getAll as popupGetAll, GET_ALL_SUCCESS as POPUP_GET_ALL_SUCCESS, GET_ALL_ERROR as POPUP_GET_ALL_ERROR } from "../popup/actions";
import { getAll as sectoresGetAll, GET_ALL_SUCCESS as SECTORES_GET_ALL_SUCCESS, GET_ALL_ERROR as SECTORES_GET_ALL_ERROR } from "../sectores/actions";
import { getAllUsuarios as usuariosGetAll, GET_ALL_USUARIOS_SUCCESS as USUARIOS_GET_ALL_SUCCESS, GET_ALL_USUARIOS_ERROR as USUARIOS_GET_ALL_ERROR } from "../sectores/actions";

export const getInicial =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_INICIAL) {
			dispatch(popupGetAll());
			dispatch(sectoresGetAll());
			dispatch(usuariosGetAll());
		}
	};

export const processGet =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type == POPUP_GET_ALL_SUCCESS || action.type == SECTORES_GET_ALL_SUCCESS || action.type == USUARIOS_GET_ALL_SUCCESS) {
			dispatch(successInicial());
		}
	};

export const processError =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === POPUP_GET_ALL_ERROR || action.type == SECTORES_GET_ALL_ERROR || action.type == USUARIOS_GET_ALL_ERROR) {
			dispatch(noSuccessInicial());
		}
	};

export const middleware = [getInicial, processGet, processError];
