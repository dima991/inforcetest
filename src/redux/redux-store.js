import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import thunk from 'redux-thunk'
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import { cardsReducer } from "./reducers/CardsReducer";
import { productsReducer } from "./reducers/ProductReducer";
import { commentsReducer } from "./reducers/CommentsReducer";
import {modalReducer} from "./reducers/ModalReducer"


let reducers = combineReducers({
    cards: cardsReducer,
    products: productsReducer,
    comments: commentsReducer,
    modal: modalReducer
});


// Middlewares
const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;