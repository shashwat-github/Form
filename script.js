const formDataArray = [];

function saveFormData() {
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    dob: document.getElementById("dob").value,
    parentsName: document.getElementById("parentsName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    phone: document.getElementById("phone").value,
  };
  formDataArray.push(formData);
  document.getElementById("myForm").reset();
  displayFormData();
}

function displayFormData() {
  let tableBody = document.getElementById("formDataBody");
  tableBody.innerHTML = "";

  formDataArray.forEach((formData) => {
    let row = document.createElement("tr");

    let firstNameCell = document.createElement("td");
    firstNameCell.textContent = formData.firstName;
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.textContent = formData.lastName;
    row.appendChild(lastNameCell);

    let dobCell = document.createElement("td");
    dobCell.textContent = formData.dob;
    row.appendChild(dobCell);

    let parentsNameCell = document.createElement("td");
    parentsNameCell.textContent = formData.parentsName;
    row.appendChild(parentsNameCell);

    let addressCell = document.createElement("td");
    addressCell.textContent = formData.address;
    row.appendChild(addressCell);

    let cityCell = document.createElement("td");
    cityCell.textContent = formData.city;
    row.appendChild(cityCell);

    let phoneCell = document.createElement("td");
    phoneCell.textContent = formData.phone;
    row.appendChild(phoneCell);

    tableBody.appendChild(row);
  });
}
