const tableBody = document.querySelector('#task-table tbody');

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tableBody.innerHTML = '';

  tasks.forEach((task, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.name}</td>
      <td>${task.description}</td>
    `;
    tableBody.appendChild(row);
  });
}

renderTasks();
