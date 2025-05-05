
const taskNameInput = document.getElementById('taskNameInput');
const taskDescriptionInput = document.getElementById('taskDescriptionInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskName = taskNameInput.value.trim();
  const taskDescription = taskDescriptionInput.value.trim();

  if (taskName !== '') {
    const taskCard = document.createElement('div');
    taskCard.className = 'taskCard';
    taskCard.innerHTML = `
                    <h3>${taskName}</h3>
                    <p>${taskDescription}</p>
                    <div>
                        <button class="editBtn">Edit</button>
                        <button class="deleteBtn">Delete</button>
                    </div>
                `;

    const editBtn = taskCard.querySelector('.editBtn');
    const deleteBtn = taskCard.querySelector('.deleteBtn');

    editBtn.addEventListener('click', () => {
      const newName = prompt('Enter the new task name:', taskName);
      const newDescription = prompt('Enter the new task description:', taskDescription);
      if (newName && newName.trim() !== '') {
        taskCard.querySelector('h3').textContent = newName.trim();
      }
      if (newDescription && newDescription.trim() !== '') {
        taskCard.querySelector('p').textContent = newDescription.trim();
      }
    });

    deleteBtn.addEventListener('click', () => {
      taskCard.remove();
    });

    taskList.appendChild(taskCard);
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
  } else {
    alert('Please enter a task name!');
  }
});
