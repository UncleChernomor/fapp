import { ADD_NEW_MESSAGE, SHOW_ROBOT, HIDE_ROBOT } from "../types";

const initialState = {
    isShowRobot: false,
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
    } else if (action.type === SHOW_ROBOT) {
        return {
            ...state,
            isShowRobot: true,
        }
    } else if (action.type === HIDE_ROBOT) {
        return {
            ...state,
            isShowRobot: false,
        }
    }

    return state;
}