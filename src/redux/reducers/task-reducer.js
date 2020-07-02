export default function taskReducer(state = [], action) {
    switch (action.type) {
        case "ADD_NEW_TASK":
            return [...state, { ...action.task }];
        default:
            return state;
    }
}