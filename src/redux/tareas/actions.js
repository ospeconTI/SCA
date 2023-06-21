export const GET = "[tareas] GET";
export const GET_BY_ID = "[tareas] GET_BY_ID";
export const GET_BY_PLAN_ID = "[tareas] GET_BY_PLAN_ID";
export const ADD = "[tareas] ADD";
export const ADD_SIMPLE = "[tareas] ADD_SIMPLE";
export const ADD_LAPSO = "[tareas] ADD_LAPSO";
export const ADD_FECHA = "[tareas] ADD_FECHA";
export const PATCH = "[tareas] PATCH";
export const UPDATE = "[tareas] UPDATE";
export const REMOVE = "[tareas] REMOVE";
export const EDIT = "[tareas] EDIT";
export const DAR_CUMPLIMIENTO = "[tareas] DAR_CUMPLIMIENTO";

export const GET_SUCCESS = "[tareas] GET success";
export const GET_BY_ID_SUCCESS = "[tareas] GET_BY_ID success";
export const GET_BY_PLAN_ID_SUCCESS = "[tareas] GET_BY_PLAN_ID success";
export const ADD_SUCCESS = "[tareas] ADD success";
export const ADD_SIMPLE_SUCCESS = "[tareas] ADD_SIMPLE success";
export const ADD_LAPSO_SUCCESS = "[tareas] ADD_LAPSO success";
export const ADD_FECHA_SUCCESS = "[tareas] ADD_FECHA success";
export const PATCH_SUCCESS = "[tareas] PATCH success";
export const UPDATE_SUCCESS = "[tareas] UPDATE success";
export const REMOVE_SUCCESS = "[tareas] REMOVE success";
export const DAR_CUMPLIMIENTO_SUCCESS = "[tareas] DAR_CUMPLIMIENTO success";

export const GET_ERROR = "[tareas] GET error";
export const GET_BY_ID_ERROR = "[tareas] GET_BY_ID error";
export const GET_BY_PLAN_ID_ERROR = "[tareas] GET_BY_PLAN_ID error";
export const ADD_ERROR = "[tareas] ADD error";
export const ADD_SIMPLE_ERROR = "[tareas] ADD_SIMPLE error";
export const ADD_LAPSO_ERROR = "[tareas] ADD_LAPSO error";
export const ADD_FECHA_ERROR = "[tareas] ADD_FECHA error";
export const PATCH_ERROR = "[tareas] PATCH error";
export const UPDATE_ERROR = "[tareas] UPDATE error";
export const REMOVE_ERROR = "[tareas] REMOVE error";
export const DAR_CUMPLIMIENTO_ERROR = "[tareas] DAR_CUMPLIMIENTO error";

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

export const getByPlanId = (options) => ({
	type: GET_BY_PLAN_ID,
	options: options,
	success: GET_BY_PLAN_ID_SUCCESS,
	error: GET_BY_PLAN_ID_ERROR,
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

export const darCumplimiento = (idTarea) => ({
	type: DAR_CUMPLIMIENTO,
	idTarea: idTarea,
});
