// Init GitHub
const GitHub = new GetGIT();
//Init UI
const ui = new UI();

// Input search
const searchUser = document.getElementById("searchUser");

// Input Seacrch event listener
searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    //console.log(userText);

    //GEt date from GitHub
    GitHub.GetUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("Account not found", "alert alert-danger");
      } else {
        // Show rezult
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // ClearProfile
    ui.clearProfile();
  }
});
