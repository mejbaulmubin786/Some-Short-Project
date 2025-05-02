document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");
  if (!tableBody) {
    console.error("Error: Element with ID 'table-body' not found in the DOM.");
    return;
  }
  const form = document.getElementById("post-form");
  const inputName = document.getElementById("input-name");
  const inputAddress = document.getElementById("input-address");
  const selectClass = document.getElementById("select-class");
  const inputPhone = document.getElementById("input-phone");
  const inputDetails = document.getElementById("input-details");
  
  const formSubmit = document.getElementById("form-submit");
  let studentList = [
    {
      name: "Mejbaul Mubin",
      phone: "01676880506",
      class: "BSc",
      description: "My name is Mejbaul Mubin, and I have recently completed my graduation in Computer Science. I currently reside in Noakhali.",
      address: "House #12, Road #05, Block C, Banani, Dhaka",
    },
    // অন্যান্য ডাটা ...
  ];

  formSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // ফর্ম রিফ্রেশ বন্ধ
    saveData();
  });

  function saveData() {
    if (!inputName.value || !inputPhone.value || !selectClass.value || !inputAddress.value || !inputDetails.value) {
      alert("Please fill out all fields.");
      return;
    }
    studentList.push({
      name: inputName.value,
      phone: inputPhone.value,
      class: selectClass.value,
      description: inputDetails.value,
      address: inputAddress.value,
    });
    renderTable();
    form.reset();
  }

  function renderTable() {
    tableBody.innerHTML = ""; // আগের রো মুছে ফেলা
    studentList.forEach((student, index) => {
      let row = document.createElement("tr");
      row.classList.add("table-row");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.address}</td>
        <td>${student.class}</td>
        <td>${student.phone}</td>
        <td class="table-cell">
          <a class="action-link edit-link" href="edit.html">Edit</a>
          <a class="action-link delete-link" href="delete-inline.html">Delete</a>
          <a class="action-link view-link" href="view-details.html">View</a>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  renderTable(); // পেজ লোড হওয়ার সময় টেবিল রেন্ডার
});
