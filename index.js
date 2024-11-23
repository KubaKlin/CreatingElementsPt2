const taskInput = document.querySelector('.add-task-input');
const taskInputButton = document.querySelector('.add-task-button');
const tasksWrapper = document.querySelector('.tasks-column');
const errorLabel = document.querySelector('.add-input-error-label');
errorLabel?.innerText = 'Task title cannot be empty';

const firstColumn = document.querySelector('#first-column');
const secondColumn = document.querySelector('#second-column');
const thirdColumn = document.querySelector('#third-column');

function getButtonsWrapper() {
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('task-button-wrapper');

  const leftArrowButton = document.createElement('button');
  leftArrowButton.classList.add('button-left-arrow');
  buttonsWrapper.append(leftArrowButton);

  const binButton = document.createElement('button');
  binButton.classList.add('button-bin');
  buttonsWrapper.append(binButton);

  const rightArrowButton = document.createElement('button');
  rightArrowButton.classList.add('button-right-arrow');
  buttonsWrapper.append(rightArrowButton);

  return buttonsWrapper;
}

function moveTaskForward(taskCard, currentColumnNumber, leftArrowButton, rightArrowButton) {
  taskCard.cloneNode(true);
  taskCard.remove();
  if (currentColumnNumber === 1) {
    secondColumn?.append(taskCard);
    leftArrowButton?.classList.remove('hidden');
  } else if (currentColumnNumber === 2) {
    thirdColumn?.append(taskCard);
    rightArrowButton?.classList.add('hidden');
  }
}

function moveTaskBackward(taskCard, currentColumnNumber, leftArrowButton, rightArrowButton) {
  taskCard.cloneNode(true);
  taskCard.remove();
  if (currentColumnNumber === 2) {
    firstColumn?.append(taskCard);
    leftArrowButton?.classList.add('hidden');
  } else if (currentColumnNumber === 3) {
    secondColumn?.append(taskCard);
    rightArrowButton?.classList.remove('hidden');
  }
}

taskInputButton?.addEventListener('click', function() {
  taskTitle = taskInput?.value;
  const taskCard = document.createElement('div');
  const buttonsWrapper = getButtonsWrapper();
  taskCard.classList.add('single-task');
  taskCard.innerText = taskTitle;

  taskCard.append(buttonsWrapper);

  const binButton = buttonsWrapper.querySelector('.button-bin');
  const rightArrowButton = buttonsWrapper.querySelector('.button-right-arrow');
  const leftArrowButton = buttonsWrapper.querySelector('.button-left-arrow');
  leftArrowButton?.classList.add('hidden');

  binButton.addEventListener('click', function() {
    taskCard.remove();
  });

  let currentColumnNumber = 1;
  rightArrowButton.addEventListener('click', function() {
    moveTaskForward(taskCard, currentColumnNumber, leftArrowButton, rightArrowButton);
    currentColumnNumber += 1;
  })

  leftArrowButton.addEventListener('click', function() {
    moveTaskBackward(taskCard, currentColumnNumber, leftArrowButton, rightArrowButton);
    currentColumnNumber -= 1;
  })

  if (taskTitle !== '') {
    tasksWrapper?.append(taskCard);
    taskInput?.value = '';
    errorLabel?.classList.remove('active');
  } else {
    errorLabel?.classList.add('active');
  }
});
