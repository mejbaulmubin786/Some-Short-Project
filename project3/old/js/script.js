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
// ইনপুট ফিল্ড এবং অন্যান্য এলিমেন্ট সিলেক্ট করা
const form = document.getElementById("post-form");
const inputName = document.getElementById("input-name");
const inputAddress = document.getElementById("input-address");
const selectClass = document.getElementById("select-class");
const inputPhone = document.getElementById("input-phone");
const inputDetails = document.getElementById("input-details");
const tableBody = document.getElementById("table-body");
const tableRow = document.getElementsByClassName("table-row");
const formSubmit = document.getElementById("form-submit");



// let studentList = [];

let studentList = [
  {
    name: "Mejbaul Mubin",
    phone: "01676880506",
    class: "BSc",
    description:
      "My name is Mejbaul Mubin, and I have recently completed my graduation in Computer Science. I currently reside in Noakhali.",
    address: "House #12, Road #05, Block C, Banani, Dhaka",
  },
  {
    name: "Najifa Rahman",
    phone: "01712345678",
    class: "BCA",
    description:
      "Keen on computer science, regularly practices programming. Attentive in class and has a friendly relationship with teachers. An active member of the debate club.",
    address: "House #12, Road #05, Block C, Banani, Dhaka",
  },
  {
    name: "Soumya Sengupta",
    phone: "01987654321",
    class: "BSC",
    description:
      "Exceptional skills in mathematics, adept at solving complex problems. Highly intelligent and dedicated to studies. Represented the college in the science olympiad.",
    address: "Flat B-3, Jamuna Apartment, Agrabad, Chattogram",
  },
  {
    name: "Afia Tabassum",
    phone: "01811223344",
    class: "B.TECH",
    description:
      "Strong interest in technology, researches various electronic gadgets. Regularly participates in coding competitions and eager to learn new technologies.",
    address: "Village: Dokkhin Char, P.O.: Maijdee Court, Noakhali",
  },
  {
    name: "Farhan Ahmed",
    phone: "01655667788",
    class: "BBA",
    description:
      "Student of business administration, dreams of becoming an entrepreneur. Interested in creating various business plans and has knowledge in marketing. President of the college business club.",
    address: "Sector #07, Road #10, Uttara, Dhaka",
  },
  {
    name: "Tanjila Islam",
    phone: "01500112233",
    class: "MBA",
    description:
      "Master of Business Administration student, special interest in finance. Aims to build a career in the banking sector. Involved in various social activities alongside studies.",
    address: "West Dhanmondi, Road #27, Dhaka",
  },
  {
    name: "Rahat Khan",
    phone: "01777889900",
    class: "BCA",
    description:
      "Attracted to web development and design. Has created a personal portfolio website and has done some work through freelancing. Very sociable and friendly.",
    address: "Moddhom Gram, P.O.: Begumganj, Noakhali",
  },
  {
    name: "Sumaiya Akter",
    phone: "01999001122",
    class: "BSC",
    description:
      "Studying zoology, interested in biodiversity and environmental conservation. Has a hobby of drawing and is a member of the college art club.",
    address: "Holdings No: 23, Ward No: 12, Chandpur",
  },
  {
    name: "Ishtiak Ahmed Chowdhury",
    phone: "01888990011",
    class: "B.TECH",
    description:
      "Mechanical engineering student, eager to work on robotics and automation. Has participated in various projects and believes in teamwork.",
    address: "Flat No: 4A, Eastern Plaza, Cumilla",
  },
  {
    name: "Nadia Sultana",
    phone: "01666778899",
    class: "BBA",
    description:
      "Studying Human Resource Management, interested in human behavior and their role in the workplace. Has good presentation skills and has participated in various seminars.",
    address: "House No: 56, Road No: 1, Block E, Khilgaon, Dhaka",
  },
  {
    name: "Tushar Roy",
    phone: "01511223344",
    class: "MBA",
    description:
      "Has special knowledge in marketing and branding. Studies various case studies with interest and has internship experience. Also skilled in sports.",
    address: "Dokkhin Nalapara, Maijdee, Noakhali",
  },
];


// ফর্ম সাবমিট হলে ডেটা টেবিলে যোগ করার জন্য

if(studentList.length>0){
  studentList.forEach((student, index)=>{
    let row = document.createElement('tr');
    row.classList.add("table-row");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.address}</td>
    <td>${student.class}</td>
    <td>${student.phone}</td>
    <td class="table-cell">
                <a
                  id="row-2-edit"
                  class="action-link edit-link"
                  href="edit.html"
                  >Edit</a
                >
                <a
                  id="row-2-delete"
                  class="action-link delete-link"
                  href="delete-inline.html"
                  >Delete</a
                >
                <a
                  id="row-2-view"
                  class="action-link view-link"
                  href="view-details.html"
                  >View</a
                >
              </td>
    `;
    tableBody.appendChild(row);
  });
}
