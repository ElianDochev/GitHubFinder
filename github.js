class GetGIT {
  constructor() {
    this.client_id = "da2b587e63f8120fa038";
    this.client_secret = "1314744f4e4513833f46c3f253775359935165d4";
    this.repos_count = 6;
    this.repos_sort = "created: asc";
  }
  async GetUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}
