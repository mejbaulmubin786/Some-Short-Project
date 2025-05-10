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
const buttonSubmit = document.getElementById('submit');
const tasklist = document.getElementById('taskList');

let tasks = []; // Array to store task objects

let currentlyEditingIndex = -1; // To keep track of the index being edited

function renderTasks() {
  tasklist.innerHTML = ''; // Clear the current display
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskCard');
    taskDiv.innerHTML = `
            <h3>${task.name}</h3> 
            <p>${task.description}</p>
            <div>
                <button class="editBtn" data-index="${index}">Edit</button>
                <button class="deleteBtn" data-index="${index}">Delete</button>
            </div>
        `;
    tasklist.appendChild(taskDiv);
  });
}

buttonSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  const taskName = nameInput.value.trim();
  const taskDesc = descInput.value.trim();

  if (taskName && taskDesc) {
    if (currentlyEditingIndex !== -1) {
      // Update existing task
      tasks[currentlyEditingIndex].name = taskName;
      tasks[currentlyEditingIndex].description = taskDesc;
      currentlyEditingIndex = -1; // Reset editing index
      buttonSubmit.textContent = 'Add Task'; // Change button text back
    } else {
      // Add new task
      tasks.push({ name: taskName, description: taskDesc });
    }
    renderTasks(); // Update the displayed list
    nameInput.value = ''; // Clear input fields
    descInput.value = '';
  }
});

taskList.addEventListener('click', function (event) {
  if (event.target.classList.contains('deleteBtn')) {
    const indexToDelete = parseInt(event.target.dataset.index);
    if (!isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < tasks.length) {
      tasks.splice(indexToDelete, 1); // Remove the task from the array
      renderTasks(); // Re-render the updated list
    }
  } else if (event.target.classList.contains('editBtn')) {
    const indexToEdit = parseInt(event.target.dataset.index);
    if (!isNaN(indexToEdit) && indexToEdit >= 0 && indexToEdit < tasks.length) {
      // Populate the form with the task details for editing
      nameInput.value = tasks[indexToEdit].name;
      descInput.value = tasks[indexToEdit].description;

      // Set the index being edited
      currentlyEditingIndex = indexToEdit;

      // Change the submit button text to "Update Task"
      buttonSubmit.textContent = 'Update Task';
    }
  }
});

// Initial rendering
renderTasks();