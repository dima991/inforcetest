import { FETCH_PRODUCT } from "../actions/types";
import api from "../../utils/api";

export const fetchProduct = (id) => async (dispatch) => {
    try {
        const response = await api.get(`/products/${id}`);
        dispatch({
            type: FETCH_PRODUCT,
            payload: {
                product: response.data
            }
        });
    } catch (err) {
        throw err;
    } 
};
export const editProduct = (id, product) => async (dispatch) => {
    try {
        const response = await api.post(`/products/${id}`, product);
        dispatch({
            type: FETCH_PRODUCT,
            payload: {
                product: response.data
            }
        });
    } catch (err) {
        throw err;
    }
};



