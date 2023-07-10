/** @format */

export const AUTORIZACION = "[autorizacion] Autorizacion";
export const AUTORIZACION_SUCCESS = "[autorizacion] Autorizacion success";
export const AUTORIZACION_ERROR = "[autorizacion] Autorizacion  error";

export const ACEPTAR_USUARIO = "[autorizacion] Aceptar Usuario";
export const ACEPTAR_USUARIO_SUCCESS = "[autorizacion] Aceptar Usuario success";
export const ACEPTAR_USUARIO_ERROR = "[autorizacion] Aceptar Usuario  error";

export const ACCEPT = "[autorizacion] Accept";
export const ACCEPT_SUCCESS = "[autorizacion] Accept success";
export const ACCEPT_ERROR = "[autorizacion] Accept  error";

export const autorizacion = (token) => ({
	type: AUTORIZACION,
	token: token,
});

export const aceptarUsuario = (body) => ({
	type: ACEPTAR_USUARIO,
	body: body,
});

export const accept = (id) => ({
	type: ACCEPT,
	id: id,
});
