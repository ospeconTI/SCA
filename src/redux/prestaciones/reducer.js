import { GET_SUCCESS, GET_ERROR, GET_PROVINCIA_PRESTACION_SUCCESS, GET_PROVINCIA_PRESTACION_ERROR, GET_PRESTACIONES_POR_PRESTADOR_SUCCESS, GET_PRESTACIONES_POR_PRESTADOR_ERROR } from "./actions";

const initialState = {
	entities: null,
	timeStamp: null,
	errorTimeStamp: null,
	entitiesPorProvinciaPrestacion: null,
	timeStampPorProvinciaPrestacion: null,
	errorTimeStampPorProvinciaPrestacion: null,
	entitiesPrestacionesPorPrestador: null,
	timeStampPrestacionesPorPrestador: null,
	errorTimeStampPrestacionesPorPrestador: null,
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_SUCCESS:
			newState.entities = action.payload.receive;
			newState.timeStamp = new Date().getTime();
			break;
		case GET_ERROR:
			newState.errorTimeStamp = new Date().getTime();
			break;
		case GET_PROVINCIA_PRESTACION_SUCCESS:
			newState.entitiesPorProvinciaPrestacion = action.payload.receive;
			newState.timeStampPorProvinciaPrestacion = new Date().getTime();
			break;
		case GET_PROVINCIA_PRESTACION_ERROR:
			newState.errorTimeStampPorProvinciaPrestacion = new Date().getTime();
			break;
		case GET_PRESTACIONES_POR_PRESTADOR_SUCCESS:
			newState.entitiesPrestacionesPorPrestador = action.payload.receive;
			newState.timeStampPrestacionesPorPrestador = new Date().getTime();
			break;
		case GET_PRESTACIONES_POR_PRESTADOR_ERROR:
			newState.errorTimeStampPrestacionesPorPrestador = new Date().getTime();
			break;
	}
	return newState;
};
