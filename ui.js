class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="btn btn-primary disabled mb-2">Public Repos: ${user.public_repos}</span>
                        <span class="btn btn-secondary disabled mb-2">Public Gists: ${user.public_gists}</span>
                        <span class="btn btn-success disabled mb-2">Followers: ${user.followers}</span>
                        <span class="btn btn-info disabled mb-2">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

    showRepos(repos) {
        let output = "";
        console.log(repos);
        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="btn btn-primary disabled mb-2">Stars: ${repo.stargazers_count}</span>
                            <span class="btn btn-secondary disabled mb-2">Watchers: ${repo.watchers_count}</span>
                            <span class="btn btn-success disabled mb-2">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // output repos
        document.getElementById("repos").innerHTML = output;
    }

    showAlert(msg, className) {
        // clear any remaining alerts
        this.clearAlert();
        // create a div
        const div = document.createElement("div");
        // Add classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(msg));
        // get parent
        const container = document.querySelector(".searchContainer");
        // get search box
        const search = document.querySelector(".search");
        // Insert alert (div) before search box
        container.insertBefore(div, search);

        // timeout after 3 sec
        setTimeout(() => this.clearAlert(), 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if(currentAlert) {
            currentAlert.remove();
        }
    }
}