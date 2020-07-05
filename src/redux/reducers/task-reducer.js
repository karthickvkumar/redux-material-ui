import * as types from '../actions/action-types';
import * as initialState from './initial-state';

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return { ...state, tasks: [...state.tasks, action.task] };
        case types.GET_PRODUCT_LIST_SUCCESS:
            return { ...state, products: action.response.data }
        default:
            return state.default;
    }
}