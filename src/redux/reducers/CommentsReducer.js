import {
    FETCH_COMMENTS,
    ADD_COMMENT,
    REMOVE_COMMENT
} from "../actions/types";

const initialState = {
    comments: [],
    isLoading: true,
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state, comments: [...action.payload.comments], isLoading: false
            };
        case ADD_COMMENT:
            return {
                ...state, comments: [...state.comments, action.payload.comment]
            };
        case REMOVE_COMMENT:
            return {
                ...state, comments: state.comments.filter(comment => comment.id !== action.payload.id)
            };
        default:
            return state;
    }
};