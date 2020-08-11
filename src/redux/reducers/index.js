import { combineReducers } from 'redux';

import taskReducer from "./task-reducer";

const rootReducer = combineReducers({
    taskReducer
});

export default rootReducer;