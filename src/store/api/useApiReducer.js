import { GET_DATA_API } from "../types";

const initialState = {
    items: [],
};

export function useApiReducer(state = initialState, action) {

    if (action.type === GET_DATA_API) {
        return {
            ...state,
            items: [...state.items, ...action.payload]
        }
    }

    return state;
}

