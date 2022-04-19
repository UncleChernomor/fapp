import { GET_DATA_API } from "../types";

const initialState = {
    items: {
        base: 'EUR',
        date: Date.now(),
        rates: {
            NO: '0.0'
        }

    }
};

export function useApiReducer(state = initialState, action) {

    if (action.type === GET_DATA_API) {
        return {
            ...state,
            items: action.payload,
        }
    }

    return state;
}

