import { SET } from "./actions";

const initialState = {
	timeStamp: null,
	ok: false,
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case SET:
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
			break;
	}

	return newState;
};
