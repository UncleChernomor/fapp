import { ADD_NEW_MESSAGE } from "../types";


export function addNewMessage(post) {
    return {
        type: ADD_NEW_MESSAGE,
        post,
    }
}