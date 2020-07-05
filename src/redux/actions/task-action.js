import * as types from './action-types';
import axios from 'axios';

export function addTask(task) {
    return { type: types.ADD_NEW_TASK, task }
}

export function listProductSuccess(response) {
    return { type: types.GET_PRODUCT_LIST_SUCCESS, response }
}

export function listProducts() {
    return function (dispatch) {
        const url = "https://shop143.herokuapp.com/api/products";
        return axios.get(url).then((response) => {
            dispatch(listProductSuccess(response));
        }).catch((error) => {
            console.error(error);
        })

    }
}