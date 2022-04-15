import { ADD_CHAT, REMOVE_CHAT } from "../types";

const initialState = {
    chats: [
        {
            id: 1,
            name: 'Чат__1',
            messages: [
                {
                    id: 1,
                    author: 'ВАСЯ',
                    header: 'СООБЩЕНИЕ ВАСИ',
                    body: 'кккккккккккк кккккккккккккккккккккккк кккккккккккккккккккк',
                }
            ]
        }
    ],
}

export default function chatsReduser(state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload],
            };
        case REMOVE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload),
            }
        default:
            return state;
    }
}


