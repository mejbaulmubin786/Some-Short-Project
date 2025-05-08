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
// const tableBody = document.querySelector('#task-table tbody');

buttonSubmit.addEventListener('click', function () {
  event.preventDefault()
  const tasklist = document.getElementById('taskList');
  tasklist.innerHTML += `<div class="taskCard">
<h3>${nameInput.value}</h3>
<p>${descInput.value}</p>
<div>
  <button class="editBtn">Edit</button>
  <button class="deleteBtn">Delete</button>
</div>`;
});

taskList.addEventListener('click', function (event) {
  if (event.target.classList.contains('editBtn')) {
    nameInput.value = nameInput.value;

  } else if (event.target.classList.contains('deleteBtn')) {
    console.log('Delete button clicked');
    // এখানে ডিলিট বাটনের ক্লিক হ্যান্ডলারের কোড লিখুন
  }
});