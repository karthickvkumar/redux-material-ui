import * as types from '../actions/action-types';
// import * as initialState from './initial-state';
const initialData = {
    todoList: [],
    products: [],
    error: {}
}
export default function taskReducer(state = initialData, action) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return { ...state, todoList: [...state.todoList, action.message] };
        case types.GET_PRODUCT_LIST_SUCCESS:
            return { ...state, products: action.product }
        case types.GET_PRODUCT_LIST_ERROR:
            return { ...state, error: action.productError }
        default:
            return state;
    }
}