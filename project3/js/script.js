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

/*==================================================================*/
let inputName = document.getElementById("input-name");
let inputAddress = document.getElementById("input-address");
let inputPhone = document.getElementById("input-phone");
let inputDetails = document.getElementById("input-details");
let recordTable = document.getElementById("record-table");

let tableRow = document.getElementsByClassName("table-row");
let tableBody = document.getElementById("table-body");
// recordTable.style.display = "none"; // Initially hide the table

let studentList = [
  {
    name: "Mejbaul Mubin",
    phone: "01767880506",
    class: "BSc",
    description:
      "My name is Mejbaul Mubin, and I have recently completed my graduation in Computer Science. I currently reside in Noakhali.",
    address: "Noakhali", // Added address
  },
  {
    name: "Rakib Hasan",
    phone: "017xxxxxxxx",
    class: "BCA",
    description: "A diligent student with a keen interest in programming.",
    address: "Noakhali", // Added address
  },
  {
    name: "Sadia Akter",
    phone: "019yyyyyyyy",
    class: "BSC",
    description: "Excels in mathematics and has a strong analytical mind.",
    address: "Chittagong", // Added address
  },
  {
    name: "Arif Hossain",
    phone: "018zzzzzzzz",
    class: "B.TECH",
    description:
      "Passionate about technology and actively participates in coding clubs.",
    address: "Dhaka", // Added address
  },
  {
    name: "Taslima Khan",
    phone: "016aaaaaaaa",
    class: "BBA",
    description:
      "Demonstrates strong leadership skills and is actively involved in extracurricular activities.",
    address: "Barishal", // Added address
  },
  {
    name: "Imran Ali",
    phone: "015bbbbbbbb",
    class: "MBA",
    description:
      "Focused on business studies and aims to pursue a career in management.",
    address: "Sylhet", // Added address
  },
];

// studentList অ্যারে থেকে ডেটা টেবিলে অ্যাড করার ফাংশন
function populateTable(studentList) {
  // প্রথমে টেবিল ক্লিয়ার করুন
  tableBody.innerHTML = "";

  // প্রতিটি স্টুডেন্টের ডেটা টেবিলে যোগ করুন
  studentList.forEach((student, index) => {
    // একটি নতুন রো তৈরি করুন
    let row = document.createElement("tr");
    row.id = `row-${index + 1}`;
    row.className = "table-row";

    // রোতে কলাম যোগ করুন
    row.innerHTML = `
      <td class="table-cell">${index + 1}</td>
      <td class="table-cell">${student.name}</td>
      <td class="table-cell">${student.address}</td> <!-- Address কলাম -->
      <td class="table-cell">${student.class}</td>
      <td class="table-cell">${student.phone}</td>
      <td class="table-cell">
        <a href="edit.html" class="action-link edit-link">Edit</a>
        <a href="delete-inline.html" class="action-link delete-link">Delete</a>
        <a href="view-details.html" class="action-link view-link">View</a>
      </td>
    `;

    // রো টেবিলের tbody-তে যোগ করুন
    tableBody.appendChild(row);
  });
}

// studentList অ্যারে থেকে ডেটা টেবিলে যোগ করুন
populateTable(studentList);
