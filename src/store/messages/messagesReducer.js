import { ADD_NEW_MESSAGE } from "../types";

const initialState = {
    messages: [
        {
            id: 111111,
            author: 'VVVVVVVVVVVVV',
            title: 'TITLE_11111',
            body: 'BODY_11111111111111',
            chatId: 1,
        }
    ]
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