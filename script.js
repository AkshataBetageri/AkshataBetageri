// Array to store user names
let users = [];

// Function to add a new user
function addUser() {
  // Get the user name input field
  const userNameInput = document.getElementById("userName");
  const userName = userNameInput.value;

  // Check if the input is empty
  if (userName.trim() === "") {
    alert("Please enter a user name.");
    userNameInput.focus();
    return;
  }

  // Check if the user name already exists
  if (users.includes(userName)) {
    alert("User name already exists.");
    userNameInput.focus();
    return;
  }

  // Add the user name to the users array
  users.push(userName);

  // Clear the input field
  userNameInput.value = "";

  // Update the user list
  renderUsers();
}

// Function to delete a user
function deleteUser(index) {
  // Remove the user from the users array
  users.splice(index, 1);

  // Update the user list
  renderUsers();
}

// Function to render the user list
function renderUsers() {
  // Get the user list body
  const userListBody = document.getElementById("userListBody");

  // Clear the user list body
  userListBody.innerHTML = "";

  // Add a row for each user
  for (let i = 0; i < users.length; i++) {
    userListBody.innerHTML += `<tr>
                                      <td>${i + 1}</td>
                                      <td>${users[i]}</td>
                                      <td>
                                          <button onclick="editUser(${i})">Edit</button>
                                          <button onclick="deleteUser(${i})">Delete</button>
                                      </td>
                                    </tr>`;
  }
}

// Function to edit a user
function editUser(index) {
  // Prompt the user to enter a new user name
  const userName = prompt("Please enter new user name", users[index]);

  // Check if the user entered a name
  if (userName != null && userName != "") {
    // Update the user name in the users array
    users[index] = userName;

    // Update the user list
    renderUsers();
  }
}
