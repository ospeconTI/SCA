/** @format */

export const GET = "[opcionRoles] GET";
export const GET_BY_ID = "[opcionRoles] GET_BY_ID";
export const GET_ALL = "[opcionRoles] GET_ALL";
export const ADD = "[opcionRoles] ADD";
export const ADD_SIMPLE = "[opcionRoles] ADD_SIMPLE";
export const ADD_LAPSO = "[opcionRoles] ADD_LAPSO";
export const ADD_FECHA = "[opcionRoles] ADD_FECHA";
export const PATCH = "[opcionRoles] PATCH";
export const UPDATE = "[opcionRoles] UPDATE";
export const REMOVE = "[opcionRoles] REMOVE";
export const EDIT = "[opcionRoles] EDIT";

export const GET_ALL_SUCCESS = "[opcionRoles] GET_ALL success";
export const GET_BY_ID_SUCCESS = "[opcionRoles] GET_BY_ID success";
export const GET_SUCCESS = "[opcionRoles] GET success";
export const ADD_SUCCESS = "[opcionRoles] ADD success";
export const ADD_SIMPLE_SUCCESS = "[opcionRoles] ADD_SIMPLE success";
export const ADD_LAPSO_SUCCESS = "[opcionRoles] ADD_LAPSO success";
export const ADD_FECHA_SUCCESS = "[opcionRoles] ADD_FECHA success";
export const PATCH_SUCCESS = "[opcionRoles] PATCH success";
export const UPDATE_SUCCESS = "[opcionRoles] UPDATE success";
export const REMOVE_SUCCESS = "[opcionRoles] REMOVE success";

export const GET_ALL_ERROR = "[opcionRoles] GET_ALL error";
export const GET_BY_ID_ERROR = "[opcionRoles] GET_BY_ID error";
export const GET_ERROR = "[opcionRoles] GET error";
export const ADD_ERROR = "[opcionRoles] ADD error";
export const ADD_SIMPLE_ERROR = "[opcionRoles] ADD_SIMPLE error";
export const ADD_LAPSO_ERROR = "[opcionRoles] ADD_LAPSO error";
export const ADD_FECHA_ERROR = "[opcionRoles] ADD_FECHA error";
export const PATCH_ERROR = "[opcionRoles] PATCH error";
export const UPDATE_ERROR = "[opcionRoles] UPDATE error";
export const REMOVE_ERROR = "[opcionRoles] REMOVE error";

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
