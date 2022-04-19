import { GET_DATA_API, START_LOAD } from "../types";

const initialState = {
    isLoading: false,
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
            items: action.payload.data,
            isLoading: true,
        }
    } else if (action.type === START_LOAD) {
        return {
            ...state,
            isLoading: false,
        }
    }

    return state;
}


