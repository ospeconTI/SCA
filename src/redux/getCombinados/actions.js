export const GET_INICIAL = "[getCombinados] GET_INICIAL";
export const SUCCESS_INICIAL = "[getCombinados] successInicial";
export const NO_SUCCESS_INICIAL = "[getCombinados] noSuccessInicial";

export const getInicial = () => ({
	type: GET_INICIAL,
});

export const successInicial = () => ({
	type: SUCCESS_INICIAL,
});

export const noSuccessInicial = () => ({
	type: NO_SUCCESS_INICIAL,
});
