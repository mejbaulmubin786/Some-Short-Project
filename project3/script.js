function changeBackgroundImage() {
  const colors = [
    "./img/img-1.jpg",
    "./img/img-2.jpg",
    "./img/img-3.jpg",
    "./img/img-4.jpg",
    "./img/img-5.jpg",
    "./img/c-4.jpg",
    "./img/c-1.jpg",
    "./img/c-2.jpg",
    "./img/c-3.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  if (colors[randomIndex].startsWith("#")) {
    // যদি এটি একটি রঙের কোড হয়
    document.body.style.transition = "background-color 5s ease-in-out"; // Smooth transition for color
    document.body.style.backgroundColor = colors[randomIndex];
    document.body.style.backgroundImage = ""; // Background image সরিয়ে ফেলা
  } else {
    // যদি এটি একটি ইমেজ পাথ হয়
    document.body.style.transition = "background-image 5s ease-in-out"; // Smooth transition for image
    document.body.style.backgroundImage = `url('${colors[randomIndex]}')`;
    document.body.style.backgroundSize = "cover"; // ইমেজ পুরো ব্যাকগ্রাউন্ড জুড়ে দেখানোর জন্য
    document.body.style.backgroundRepeat = "no-repeat"; // ইমেজ রিপিট হওয়া বন্ধ করার জন্য
  }
}

// প্রতি ৫ সেকেন্ডে ফাংশনটি চালানোর জন্য
setInterval(changeBackgroundImage, 5000);



// =============================================================================







const form = document.getElementById('todo-form');
const nameInput = document.getElementById('task-name');
const descInput = document.getElementById('task-desc');
const tableBody = document.querySelector('#task-table tbody');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editIndex = null;

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  tableBody.innerHTML = '';
  tasks.forEach((task, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.name}</td>
      <td>${task.description}</td>
      <td class="actions">
        <button class="view" onclick="viewTask(${index})">View</button>
        <button class="edit" onclick="editTask(${index})">Edit</button>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function addOrUpdateTask(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const description = descInput.value.trim();

  if (editIndex !== null) {
    tasks[editIndex] = { name, description };
    editIndex = null;
  } else {
    tasks.push({ name, description });
  }

  saveTasks();
  renderTasks();
  form.reset();
}

function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

function editTask(index) {
  const task = tasks[index];
  nameInput.value = task.name;
  descInput.value = task.description;
  editIndex = index;
}

function viewTask(index) {
  const task = tasks[index];
  alert(`Task Name: ${task.name}\n\nDescription:\n${task.description}`);
}

form.addEventListener('submit', addOrUpdateTask);
renderTasks();
