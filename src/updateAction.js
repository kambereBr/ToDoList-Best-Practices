import {
  updateLocalStorage,
} from './utils.js';

const editTask = (tasks, taskIndex, field, value) => {
  tasks[taskIndex - 1][field] = value;
  updateLocalStorage(tasks);
};

export default editTask;