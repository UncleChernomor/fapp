import { SHOW_NAME_PROFILE, SET_USER_NAME } from "./types";
import { ADD_CHAT, REMOVE_CHAT } from "./types";

//For profile 
export function showNameProfile() {
    return {
        type: SHOW_NAME_PROFILE,
    }
}

export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        payload: name
    }
}

/**
 * 
 * @param {string} name name new chat
 * @returns object for add chat
 */
export function addChat(name) {
    return {
        type: ADD_CHAT,
        payload: {
            chatId: Date.now(),
            name,
        }
    }
}


export function removeChat() {
    return {
        type: REMOVE_CHAT,
    }
}