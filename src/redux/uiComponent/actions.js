/** @format */

export const CLICK_MOSTRAR_AMPARO = "[uiComponent] click mostrar amparo";
export const AMPARO_CARGA_ARBOL_DEL_INICIO = "[uiComponent] AMPARO_CARGA_ARBOL_DEL_INICIO";

export const showSpinner = (e) => ({
	type: SHOW_SPINNER,
});
export const hideSpinner = () => ({
	type: HIDE_SPINNER,
});

export const amparo_CargoArbolDelInicio = (inicio) => ({
	type: AMPARO_CARGA_ARBOL_DEL_INICIO,
	inicio: inicio,
});
