export const GET_BY_ID = "[sectores] GET_BY_ID";
export const GET_BY_DESCRIPCION = "[sectores] GET_BY_DESCRIPCION";
export const GET_ALL = "[sectores] GET_ALL";
export const ADD = "[sectores] ADD";
export const PATCH = "[sectores] PATCH";
export const UPDATE = "[sectores] UPDATE";
export const REMOVE = "[sectores] REMOVE";
export const EDIT = "[sectores] EDIT";
export const SUMAR_INTEGRANTE = "[sectores] SUMAR_INTEGRANTE";
export const QUITAR_INTEGRANTE = "[sectores] QUITAR_INTEGRANTE";
export const MODIFICAR_INTEGRANTE = "[sectores] MODIFICAR_INTEGRANTE";
export const USUARIO_HACER_RESPONSABLE = "[sectores] USUARIO_HACER_RESPONSABLE";

export const GET_BY_ID_SUCCESS = "[sectores] GET_BY_ID success";
export const GET_BY_DESCRIPCION_SUCCESS = "[sectores] GET_BY_DESCRIPCION success";
export const GET_ALL_SUCCESS = "[sectores] GET_ALL success";
export const ADD_SUCCESS = "[sectores] ADD success";
export const PATCH_SUCCESS = "[sectores] PATCH success";
export const UPDATE_SUCCESS = "[sectores] UPDATE success";
export const REMOVE_SUCCESS = "[sectores] REMOVE success";
export const SUMAR_INTEGRANTE_SUCCESS = "[sectores] SUMAR_INTEGRANTE success";
export const QUITAR_INTEGRANTE_SUCCESS = "[sectores] QUITAR_INTEGRANTE success";
export const MODIFICAR_INTEGRANTE_SUCCESS = "[sectores] MODIFICAR_INTEGRANTE success";
export const USUARIO_HACER_RESPONSABLE_SUCCESS = "[sectores] USUARIO_HACER_RESPONSABLE success";

export const GET_BY_ID_ERROR = "[sectores] GET_BY_ID error";
export const GET_BY_DESCRIPCION_ERROR = "[sectores] GET_BY_DESCRIPCION error";
export const GET_ALL_ERROR = "[sectores] GET_ALL error";
export const ADD_ERROR = "[sectores] ADD error";
export const PATCH_ERROR = "[sectores] PATCH error";
export const UPDATE_ERROR = "[sectores] UPDATE error";
export const REMOVE_ERROR = "[sectores] REMOVE error";
export const SUMAR_INTEGRANTE_ERROR = "[sectores] SUMAR_INTEGRANTE error";
export const QUITAR_INTEGRANTE_ERROR = "[sectores] QUITAR_INTEGRANTE error";
export const MODIFICAR_INTEGRANTE_ERROR = "[sectores] MODIFICAR_INTEGRANTE error";
export const USUARIO_HACER_RESPONSABLE_ERROR = "[sectores] USUARIO_HACER_RESPONSABLE error";

export const getById = (id) => ({
	type: GET_BY_ID,
	id: id,
	success: GET_BY_ID_SUCCESS,
	error: GET_BY_ID_ERROR,
});

export const getByDescripcion = (descripcion) => ({
	type: GET_BY_DESCRIPCION,
	descripcion: descripcion,
	success: GET_BY_DESCRIPCION_SUCCESS,
	error: GET_BY_DESCRIPCION_ERROR,
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

export const sumarIntegrante = (body, token) => ({
	type: SUMAR_INTEGRANTE,
	body: body,
	token: token,
});

export const quitarIntegrante = (body, token) => ({
	type: QUITAR_INTEGRANTE,
	body: body,
	token: token,
});

export const modificarIntegrante = (body, token) => ({
	type: MODIFICAR_INTEGRANTE,
	body: body,
	token: token,
});

export const usuarioHacerResponsable = (body, token) => ({
	type: USUARIO_HACER_RESPONSABLE,
	body: body,
	token: token,
});
