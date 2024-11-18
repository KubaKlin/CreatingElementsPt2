const taskInput = document.querySelector('.add-task-input');
const taskInputButton = document.querySelector('.add-task-button');
const tasksWrapper = document.querySelector('.tasks-column');
const errorLabel = document.querySelector('.add-input-error-label');
errorLabel.innerText = 'Task title cannot be empty';

const firstColumn = document.querySelector('#first-column');
const secondColumn = document.querySelector('#second-column');
const thirdColumn = document.querySelector('#third-column');


taskInputButton.addEventListener('click', function() {
  let taskTitle = taskInput.value;
  const taskCard = document.createElement('div');
  taskCard.classList.add('single-task');
  taskCard.innerText = taskTitle;

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('task-button-wrapper');
  taskCard.append(buttonsWrapper);

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
    taskCard.remove();
  });

  let columnCount = 1;
  rightArrowButton.addEventListener('click', function() {
    taskCard.cloneNode(true);
    taskCard.remove();
    if (columnCount === 1) {
      secondColumn.append(taskCard);
      columnCount += 1;
    } else if (columnCount === 2) {
      thirdColumn.append(taskCard);
      columnCount += 1;
    }
  })

  leftArrowButton.addEventListener('click', function() {
    taskCard.cloneNode(true);
    taskCard.remove();
    if (columnCount === 2) {
      firstColumn.append(taskCard);
      columnCount -= 1;
    } else if (columnCount === 3) {
      secondColumn.append(taskCard);
      columnCount -= 1;
    }
  })

  if (taskTitle !== '') {
    tasksWrapper.append(taskCard);
    taskInput.value = '';
    errorLabel.classList.remove('active');
  } else {
    errorLabel.classList.add('active');
  }
});
