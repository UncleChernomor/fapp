import { SHOW_NAME_PROFILE, SET_USER_NAME } from "../types";

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