import { ADD_NEW_MESSAGE } from "../types";


export function addMessage(post) {
    return {
        type: ADD_NEW_MESSAGE,
        payload: post
    }
}