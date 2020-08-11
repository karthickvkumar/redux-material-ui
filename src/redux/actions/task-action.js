import * as types from './action-types';
import axios from 'axios';

export function addTask(todoMessage) {
    return { type: types.ADD_NEW_TASK, message: todoMessage }
}

export function listProductSuccess(response) {
    return { type: types.GET_PRODUCT_LIST_SUCCESS, product: response.data }
}

export function listProductFailure(error) {
    return { type: types.GET_PRODUCT_LIST_ERROR, productError: error }
}

export function listProducts() {
    return function (dispatch) {
        const url = "https://shop143.herokuapp.com/api/products";
        return axios.get(url)
            .then((response) => {
                dispatch(listProductSuccess(response));
            })
            .catch((error) => {
                dispatch(listProductFailure(error));
            })
    }
}
