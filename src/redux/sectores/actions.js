export const GET = "[sectores] GET";
export const GET_ALL = "[sectores] GET_ALL";
export const ADD = "[sectores] ADD";
export const PATCH = "[sectores] PATCH";
export const UPDATE = "[sectores] UPDATE";
export const REMOVE = "[sectores] REMOVE";
export const EDIT = "[sectores] EDIT";

export const GET_ALL_SUCCESS = "[sectores] GET_ALL success";
export const GET_SUCCESS = "[sectores] GET success";
export const ADD_SUCCESS = "[sectores] ADD success";
export const PATCH_SUCCESS = "[sectores] PATCH success";
export const UPDATE_SUCCESS = "[sectores] UPDATE success";
export const REMOVE_SUCCESS = "[sectores] REMOVE success";

export const GET_ALL_ERROR = "[sectores] GET_ALL error";
export const GET_ERROR = "[sectores] GET error";
export const ADD_ERROR = "[sectores] ADD error";
export const PATCH_ERROR = "[sectores] PATCH error";
export const UPDATE_ERROR = "[sectores] UPDATE error";
export const REMOVE_ERROR = "[sectores] REMOVE error";

export const get = (options) => ({
	type: GET,
	options: options,
	success: GET_SUCCESS,
	error: GET_ERROR,
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

export const update = (id, body, token) => ({
	type: UPDATE,
	id: id,
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
