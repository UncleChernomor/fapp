import { ADD_NEW_MESSAGE } from "../types";

const initialState = {
    messages: []
};

export default function messagesReducer(state = initialState, action) {
    if (action.type === ADD_NEW_MESSAGE) {
        return {
            ...state,
            messages: [...state.messages, action.payload],
        }
    }

    return state;
}