import {
    FETCH_COMMENTS,
    ADD_COMMENT,
    REMOVE_COMMENT,
} from './types'
import api from '../../utils/api'


// Get All Titles
export const fetchComments = () => async (dispatch) => {
    try {
        const response = await api.get(`/comments`);
        dispatch({
            type: FETCH_COMMENTS,
            payload: {
                comments: response.data
            }
        });
    } catch (err) {
        throw err;
    }
};

// Add Title
export const addComment = (comment) => async (dispatch) => {
    try {
         const newComment = await api.post("/comments", comment);
        dispatch({
            type: ADD_COMMENT,
            payload: {
                comment: newComment.data,
            }
        });
    } catch (err) {
        console.log(err)
        throw err;
    }
};

// Add Title
export const removeComment = (id) => async (dispatch) => {
    try {
        await api.delete(`/comments/${id}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: {
                id,
            }
        });
    } catch (err) {
        throw err;
    }
};