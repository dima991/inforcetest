import { FETCH_PRODUCT} from "../actions/types";


const initialState = {
    product: {},
    isLoading: true,
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state, 
                product: action.payload.product, 
                isLoading: false
            };
        default:
            return state;
    }
};