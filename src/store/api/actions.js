import { GET_DATA_API, START_LOAD } from "../types";

export function readDataFromServer(data) {
    return {
        type: GET_DATA_API,
        payload: {
            data,
            isLoad: true
        }
    }
}

export function startLoading() {
    return {
        type: START_LOAD,
    }

}

export const middlewareReadData = () => {
    return dispatch => {
        fetch('https://api.exchangerate.host/latest')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                dispatch(readDataFromServer(result));
            })
            .catch((err) => console.log(err));
    }
}