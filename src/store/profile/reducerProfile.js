import { SHOW_NAME_PROFILE, SET_USER_NAME } from "../types";

const initialState = {
    showName: true,
    name: 'Default',
};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_NAME_PROFILE:
            return {
                ...state,
                showName: !state.showName,
            };
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}