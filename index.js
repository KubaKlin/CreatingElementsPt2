const taskInput = document.querySelector('.add-task-input');
const taskInputButton = document.querySelector('.add-task-button');
const tasksWrapper = document.querySelector('.tasks-wrapper');

taskInputButton.addEventListener('click', function() {
  let taskTitle = taskInput.value;
  const singleTask = document.createElement('div');
  singleTask.classList.add('single-task');
  singleTask.innerText = taskTitle;

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('task-button-wrapper');
  singleTask.append(buttonsWrapper);

  const leftArrowButton = document.createElement('button');
  leftArrowButton.classList.add('button-left-arrow');
  buttonsWrapper.append(leftArrowButton);

  const binButton = document.createElement('button');
  binButton.classList.add('button-bin');
  buttonsWrapper.append(binButton);

  const rightArrowButton = document.createElement('button');
  rightArrowButton.classList.add('button-right-arrow');
  buttonsWrapper.append(rightArrowButton);

  binButton.addEventListener('click', function() {
    singleTask.remove();
  });

  if (taskTitle !== '') {

    tasksWrapper.append(singleTask);
  } else {
    taskTitle = '';
  }
});
