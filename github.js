class Github {
    constructor() {
        this.client_id = "66624f32098076e14e2b";
        this.client_secret = 'e26cf9c27ddb1a6e1464cbec9e0e525233336e37';
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profileData,
            repos
        }  
    }
}