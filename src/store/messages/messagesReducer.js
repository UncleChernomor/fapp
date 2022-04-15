import { ADD_NEW_MESSAGE } from "../types";

const initialState = {
    id: undefined,
    author: '',
    header: '',
    body: '',
    chatId: undefined
};

export default function messageReducer(state = initialState, action) {
    if (action === ADD_NEW_MESSAGE) {
        return {
            ...state,
            id: Date.now(),
            author: action.post.author,
            header: action.post.header,
            body: action.post.body,
            chatId: action.post.chatId,
        }
    }

    return state;
}