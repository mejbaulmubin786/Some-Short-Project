let records = []; // Array to store records
let idCounter = 1; // For auto-generating IDs

// Show specific section
function showSection(section) {
  document.querySelectorAll(".section").forEach((sec) => {
    sec.style.display = "none";
  });
  document.getElementById(section).style.display = "block";
}

// Add a record
function addRecord(event) {
  event.preventDefault();
  const name = document.getElementById("addName").value;
  const address = document.getElementById("addAddress").value;
  const sclass = document.getElementById("addClass").value;
  const phone = document.getElementById("addPhone").value;

  records.push({ id: idCounter++, name, address, sclass, phone });
  renderRecords();
  alert("Record added successfully!");
  event.target.reset();
}

// Update a record
function updateRecord(event) {
  event.preventDefault();
  const id = parseInt(document.getElementById("updateId").value);
  const name = document.getElementById("updateName").value;
  const address = document.getElementById("updateAddress").value;
  const sclass = document.getElementById("updateClass").value;
  const phone = document.getElementById("updatePhone").value;

  const record = records.find((rec) => rec.id === id);
  if (record) {
    record.name = name;
    record.address = address;
    record.sclass = sclass;
    record.phone = phone;
    renderRecords();
    alert("Record updated successfully!");
  } else {
    alert("Record not found!");
  }
}

// Delete a record
function deleteRecord(event) {
  event.preventDefault();
  const id = parseInt(document.getElementById("deleteId").value);

  const index = records.findIndex((rec) => rec.id === id);
  if (index !== -1) {
    records.splice(index, 1);
    renderRecords();
    alert("Record deleted successfully!");
  } else {
    alert("Record not found!");
  }
}

// Render records in the table
function renderRecords() {
  const tableBody = document.querySelector("#recordTable tbody");
  tableBody.innerHTML = "";

  records.forEach((rec) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${rec.id}</td>
      <td>${rec.name}</td>
      <td>${rec.address}</td>
      <td>${rec.sclass}</td>
      <td>${rec.phone}</td>
      <td>
        <button onclick="populateUpdateForm(${rec.id})">Edit</button>
        <button onclick="deleteDirect(${rec.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Populate update form
function populateUpdateForm(id) {
  const record = records.find((rec) => rec.id === id);
  if (record) {
    showSection("update");
    document.getElementById("updateId").value = record.id;
    document.getElementById("updateName").value = record.name;
    document.getElementById("updateAddress").value = record.address;
    document.getElementById("updateClass").value = record.sclass;
    document.getElementById("updatePhone").value = record.phone;
  }
}

// Delete record directly from table
function deleteDirect(id) {
  const index = records.findIndex((rec) => rec.id === id);
  if (index !== -1) {
    records.splice(index, 1);
    renderRecords();
  }
}
