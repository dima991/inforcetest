import { OPEN_MODAL, CLOSE_MODAL} from "../actions/types";


const initialState = {
    Modal: false
}
export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state, Modal: true
                
            };
            case CLOSE_MODAL:
            return {
                ...state, Modal: false
                
            };

        default:
            return state;
    }
};