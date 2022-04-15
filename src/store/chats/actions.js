import { ADD_CHAT, REMOVE_CHAT } from "../types"

/**
 * 
 * @param {string} name name new chat
 * @returns object for add chat
 */
export function addChat(name) {
    return {
        type: ADD_CHAT,
        payload: {
            id: Date.now(),
            name,
        }
    }
}


export function removeChat(idChat) {
    return {
        type: REMOVE_CHAT,
        payload: parseInt(idChat),
    }
}