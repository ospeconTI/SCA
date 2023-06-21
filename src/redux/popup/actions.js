export const GET_ALL = "[popup] GET_ALL";
export const SHOW = "[popup] SHOW";
export const HIDDEN = "[popup] HIDDEN";

export const GET_ALL_SUCCESS = "[popup] GET_ALL success";

export const GET_ALL_ERROR = "[popup] GET_ALL error";

export const getAll = () => ({
	type: GET_ALL,
	success: GET_ALL_SUCCESS,
	error: GET_ALL_ERROR,
});

export const show = (opcion, item, x, y) => ({
	type: SHOW,
	opcion: opcion,
	item: item,
	x: x,
	y: y,
});

export const hidden = () => ({
	type: HIDDEN,
});
