import { SHOW_NAME_PROFILE } from "./types";

const initialState = {
    showName: true,
    name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME_PROFILE:
            return {
                ...state, showName: !state.showName,
            };
        default:
            return state;
    }
}