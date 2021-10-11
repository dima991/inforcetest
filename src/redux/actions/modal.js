import {
    CLOSE_MODAL,
    OPEN_MODAL
} from './types'



// Get All Titles
export const openModal = () => (dispatch) => {
    dispatch({
        type: OPEN_MODAL
    });
        
};
export const closeModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL
    });
        
};
