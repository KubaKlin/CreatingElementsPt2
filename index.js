const taskInput = document.querySelector('.add-task-input');
const taskInputButton = document.querySelector('.add-task-button');
const tasksWrapper = document.querySelector('.tasks-column');
const errorLabel = document.querySelector('.add-input-error-label');
errorLabel.innerText = 'Tast title cannot be empty';

const firstColumn = document.querySelector('#first-column');
const secondColumn = document.querySelector('#second-column');
const thirdColumn = document.querySelector('#third-column');


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

  let columnCount = 1;
  rightArrowButton.addEventListener('click', function() {
    singleTask.cloneNode(true);
    singleTask.remove();
    if (columnCount === 1) {
      secondColumn.append(singleTask);
      columnCount = ++columnCount;
    } else if (columnCount === 2) {
      thirdColumn.append(singleTask);
      columnCount = ++columnCount;
    }
  })

  leftArrowButton.addEventListener('click', function() {
    singleTask.cloneNode(true);
    singleTask.remove();
    if (columnCount === 2) {
      firstColumn.append(singleTask);
      columnCount = --columnCount;
    } else if (columnCount === 3) {
      secondColumn.append(singleTask);
      columnCount = --columnCount;
    }
  })

  if (taskTitle !== '') {
    tasksWrapper.append(singleTask);
    taskInput.value = '';
    errorLabel.classList.remove('active');
    errorLabel.innerText = 'Task title cannot be empty';
  } else {
    errorLabel.classList.add('active');
  }
});
