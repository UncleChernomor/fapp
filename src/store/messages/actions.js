import { ADD_NEW_MESSAGE, HIDE_ROBOT, SHOW_ROBOT } from "../types";


export function addMessage(post) {
    return {
        type: ADD_NEW_MESSAGE,
        payload: post
    }
}

export function middlewareShowRobot() {
    return function (dispatch) {
        setTimeout(() => dispatch({ type: SHOW_ROBOT }), 1500);
    }
}

export function hideRobot() {
    return {
        type: HIDE_ROBOT,
    }
}