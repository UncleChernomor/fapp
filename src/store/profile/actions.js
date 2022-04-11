import { SHOW_NAME_PROFILE, SET_USER_NAME } from "./types";
import { ADD_CHAT, REMOVE_CHAT } from "./types";

//For profile 
export function showNameProfile() {
    return {
        type: SHOW_NAME_PROFILE,
    }
}

export function setUserName() {
    return {
        type: SET_USER_NAME,
    }
}

//For chats
export function addChat() {
    return {
        type: ADD_CHAT,
    }
}


export function removeChat() {
    return {
        type: REMOVE_CHAT,
    }
}