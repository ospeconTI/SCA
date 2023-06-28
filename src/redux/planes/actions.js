/** @format */

export const GET = "[planes] GET";
export const GET_BY_ID = "[planes] GET_BY_ID";
export const GET_ALL = "[planes] GET_ALL";
export const ADD = "[planes] ADD";
export const ADD_SIMPLE = "[planes] ADD_SIMPLE";
export const ADD_LAPSO = "[planes] ADD_LAPSO";
export const ADD_FECHA = "[planes] ADD_FECHA";
export const PATCH = "[planes] PATCH";
export const UPDATE = "[planes] UPDATE";
export const REMOVE = "[planes] REMOVE";
export const EDIT = "[planes] EDIT";

export const GET_ALL_SUCCESS = "[planes] GET_ALL success";
export const GET_BY_ID_SUCCESS = "[planes] GET_BY_ID success";
export const GET_SUCCESS = "[planes] GET success";
export const ADD_SUCCESS = "[planes] ADD success";
export const ADD_SIMPLE_SUCCESS = "[planes] ADD_SIMPLE success";
export const ADD_LAPSO_SUCCESS = "[planes] ADD_LAPSO success";
export const ADD_FECHA_SUCCESS = "[planes] ADD_FECHA success";
export const PATCH_SUCCESS = "[planes] PATCH success";
export const UPDATE_SUCCESS = "[planes] UPDATE success";
export const REMOVE_SUCCESS = "[planes] REMOVE success";

export const GET_ALL_ERROR = "[planes] GET_ALL error";
export const GET_BY_ID_ERROR = "[planes] GET_BY_ID error";
export const GET_ERROR = "[planes] GET error";
export const ADD_ERROR = "[planes] ADD error";
export const ADD_SIMPLE_ERROR = "[planes] ADD_SIMPLE error";
export const ADD_LAPSO_ERROR = "[planes] ADD_LAPSO error";
export const ADD_FECHA_ERROR = "[planes] ADD_FECHA error";
export const PATCH_ERROR = "[planes] PATCH error";
export const UPDATE_ERROR = "[planes] UPDATE error";
export const REMOVE_ERROR = "[planes] REMOVE error";

export const get = (options) => ({
	type: GET,
	options: options,
	success: GET_SUCCESS,
	error: GET_ERROR,
});

export const getById = (id) => ({
	type: GET_BY_ID,
	id: id,
	success: GET_BY_ID_SUCCESS,
	error: GET_BY_ID_ERROR,
});

export const getAll = (options) => ({
	type: GET_ALL,
	options: options,
	success: GET_ALL_SUCCESS,
	error: GET_ALL_ERROR,
});

export const add = (body, token) => ({
	type: ADD,
	body: body,
	token: token,
});

export const addSimple = (body, token) => ({
	type: ADD_SIMPLE,
	body: body,
	token: token,
});

export const addLapso = (body, token) => ({
	type: ADD_LAPSO,
	body: body,
	token: token,
});

export const addFecha = (body, token) => ({
	type: ADD_FECHA,
	body: body,
	token: token,
});

export const update = (body, token) => ({
	type: UPDATE,
	body: body,
	token: token,
});

export const patch = (id, body, token) => ({
	type: PATCH,
	id: id,
	body: body,
	token: token,
});

export const remove = (id, token) => ({
	type: REMOVE,
	id: id,
	token: token,
});

export const edit = (modo, item) => ({
	type: EDIT,
	item: item || {
		Descripcion: 0,
		Activo: 1,
	},
	modo: modo,
});
