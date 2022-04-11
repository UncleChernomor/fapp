import { SHOW_NAME_PROFILE } from "./types";

const initialState = {
    showName: false,
    name: 'Default'
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_NAME_PROFILE:
            return {
                ...state, showName: !state.showName,
            };
        default:
            return state;
    }
}