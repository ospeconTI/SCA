import { SET } from "./actions";

const initialState = {
	timeStamp: null,
	ok: false,
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	if (action.item) {
		newState.timeStamp = new Date().getTime();
		newState.ok = true;
		Object.entries(action.item).forEach(([key, value]) => {
			newState[key] = value;
			if (key == "sectores" && value.length > 0) {
				newState.sector = value[0];
			}
		});
	} else {
		newState.ok = false;
	}

	return newState;
};
