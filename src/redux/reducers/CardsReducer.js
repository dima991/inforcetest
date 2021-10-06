import { ADD_CARD, FETCH_CARDS, REMOVE_CARD } from "../actions/types";


const initialState = {
    cards: [],
    isLoading: true,
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state, cards: [...action.payload.cards], isLoading: false
            };
        case ADD_CARD:
            return{
                ...state, cards: [...state.cards, action.payload.card]
            };
            case REMOVE_CARD:
            return {
                ...state, cards: state.cards.filter(card => card.id !== action.payload.id)
            };
        default:
            return state;
    }
};