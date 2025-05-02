const form = document.getElementById('task-form');
const nameInput = document.getElementById('task-name');
const descInput = document.getElementById('task-desc');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const desc = descInput.value.trim();

  const newTask = { name, description: desc };

  // Get old tasks
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Add new
  tasks.push(newTask);

  // Save again
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert("✅ Task saved!");
  form.reset();
});
