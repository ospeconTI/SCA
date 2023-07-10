import { GET_INICIAL, SUCCESS_INICIAL, NO_SUCCESS_INICIAL } from "./actions";

const initialState = {
	inicial: {
		entitiesCountOk: 3,
		entitiesCountError: 0,
		timeStamp: null,
		errorTimeStamp: null,
	},
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_INICIAL:
			newState.inicial.entitiesCountOk = 3;
			newState.inicial.entitiesCountError = 0;
			break;
		case SUCCESS_INICIAL:
			newState.inicial.entitiesCountOk -= 1;
			if (newState.inicial.entitiesCountOk == 0 && newState.inicial.entitiesCountError == 0) {
				newState.inicial.timeStamp = new Date().getTime();
			}
			break;
		case NO_SUCCESS_INICIAL:
			newState.inicial.entitiesCountError += 1;
			if (newState.inicial.entitiesCountError == 1) {
				newState.inicial.errorTimeStamp = new Date().getTime();
			}
			break;
	}
	return newState;
};
