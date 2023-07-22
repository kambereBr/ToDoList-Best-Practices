const localData = window.localStorage;
const OPERATION = {
  ALL: 'ALL',
  ONE: 'ONE',
};
const UPDATE = {
  STATUS: 'completed',
  DESCRIPTION: 'description',
};

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const updateLocalStorage = (data) => {
  data.forEach((itemTask, index) => {
    itemTask.index = index + 1;
  });

  localData.setItem('taskData', JSON.stringify(data));
};

const addTask = (tasks, description) => {
  const newTask = new Task(description, false, tasks.length + 1);
  tasks.push(newTask);
  updateLocalStorage(tasks);
};

const filterTask = (tasks) => tasks.completed === false;
const deleteTasks = (operation, tasks = [], taskIndex = 1) => {
  if (operation === OPERATION.ALL) {
    tasks = (tasks.length === 1) ? [] : tasks.filter(filterTask);
  } else if (operation === OPERATION.ONE) {
    tasks = tasks.length === 1 ? [] : tasks.splice(taskIndex - 1, 1);
  }
  tasks.forEach((item, index) => {
    item.index = index + 1;
  });
  updateLocalStorage(tasks);
};

export {
  addTask,
  UPDATE,
  localData,
  deleteTasks,
  updateLocalStorage,
  OPERATION,
};