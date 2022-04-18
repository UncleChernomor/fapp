import { GET_DATA_API } from "../types";

export function readDataFromServer(data) {
    return {
        type: GET_DATA_API,
        payload: data,
    }
}