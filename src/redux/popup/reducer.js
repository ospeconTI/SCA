import { GET_ALL_SUCCESS, GET_ALL_ERROR, SHOW, HIDDEN } from "./actions";

const initialState = {
	all: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
	},
	show: {
		opcion: null,
		item: null,
		x: null,
		y: null,
		timeStamp: null,
	},
	hidden: null,
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_ALL_SUCCESS:
			//			newState.all.entities = action.payload.receive.sort((a, b) => a.orden - b.orden).sort((a, b) => a.opcion - b.opcion);
			newState.all.entities = action.payload.receive;
			newState.all.timeStamp = new Date().getTime();
			break;
		case GET_ALL_ERROR:
			newState.all.entities = null;
			newState.all.errorTimeStamp = new Date().getTime();
			break;
		case SHOW:
			newState.show.opcion = action.opcion;
			newState.show.item = action.item;
			newState.show.x = action.x;
			newState.show.y = action.y;
			newState.show.timeStamp = new Date().getTime();
			break;
		case HIDDEN:
			newState.hidden = new Date().getTime();
			break;
	}
	return newState;
};
