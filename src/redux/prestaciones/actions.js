export const GET = "[prestaciones] GET";
export const GET_SUCCESS = "[prestaciones] GET success";
export const GET_ERROR = "[prestaciones] GET error";
export const GET_PROVINCIA_PRESTACION = "[prestaciones] GET_PROVINCIA_PRESTACION";
export const GET_PROVINCIA_PRESTACION_SUCCESS = "[prestaciones] GET_PROVINCIA_PRESTACION_SUCCESS";
export const GET_PROVINCIA_PRESTACION_ERROR = "[prestaciones] GET_PROVINCIA_PRESTACION_ERROR";
export const GET_PRESTACIONES_POR_PRESTADOR = "[prestaciones] GET_PRESTACIONES_POR_PRESTADOR";
export const GET_PRESTACIONES_POR_PRESTADOR_SUCCESS = "[prestaciones] GET_PRESTACIONES_POR_PRESTADOR_SUCCESS";
export const GET_PRESTACIONES_POR_PRESTADOR_ERROR = "[prestaciones] GET_PRESTACIONES_POR_PRESTADOR_ERROR";

export const getAll = () => ({
	type: GET,
});

export const getProvinciaPrestacion = (provincia, prestacion) => ({
	type: GET_PROVINCIA_PRESTACION,
	provincia: provincia,
	prestacion: prestacion,
});
export const getPrestacionesPorPrestador = (prestador) => ({
	type: GET_PRESTACIONES_POR_PRESTADOR,
	prestador: prestador,
});
