import { SHOW_NAME_PROFILE, SET_USER_NAME, ADD_CHAT, REMOVE_CHAT } from "./types";

const initialState = {
    profile: {
        showName: true,
        name: 'Default',
    },

    chats: [
        {
            chatId: 1,
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

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    showName: !state.showName,
                },
            };
        case SET_USER_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: action.payload
                }
            };
        default:
            return state;
    }
}

export const chatsReducer = (state, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payload
                ]
            }
        case REMOVE_CHAT:
            return {

            }
        default:
            return state;
    }
}