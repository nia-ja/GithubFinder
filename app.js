// Init GitHub
const github = new Github;

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
                    
                } else{
                    // show profile
                    console.log(data);
                }     
            })
    } else {
        // clear profile
    }
});