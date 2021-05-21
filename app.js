// Init GitHub
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
    // Get input text
    let userText = e.target.value;

    // make sure it's not empty
    if(userText !== '') {
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    // show alert
                    ui.showAlert("User not found", "alert alert-danger");
                    
                    // clear profile
                    ui.clearProfile();
                    
                } else{
                    // clear alert
                    ui.clearAlert();
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }     
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
});