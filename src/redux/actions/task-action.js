const { func } = require("prop-types");

export function addTask(task) {
    return { type: "ADD_NEW_TASK", task }
}