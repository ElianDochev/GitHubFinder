function check(isNull) {
  if (isNull != null) {
    return isNull;
  } else {
    return "unknown";
  }
}

class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    //console.log(user.name);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <h1 class="text-center bg-light mb-3 p-4" style="font-weight:bold;text-transform:uppercase;">${check(user.name)}</h1>
      <div class="row">
         <div class="col-md-3">
            <img class="img-fluid mb-2" src="${check(user.avatar_url)}"/>
            <a href="${check(user.html_url)}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
         </div>
         <div class="col-md-9">
            <span class="badge badge-primary">Public Repos ${check(user.public_repos)}</span>
            <span class="badge badge-secondary">Public Gists ${check(user.public_gists)}</span>
            <span class="badge badge-success">Followers: ${check(user.followers)}</span>
            <span class="badge badge-info">Following ${check(user.following)}</span>
            <br><br>
            <ul class="list-group">
               <li class="list-group-item">Company: ${check(user.company)}</li>
               <li class="list-group-item">Website/Blog: ${check(user.blog)}</li>
               <li class="list-group-item">Location: ${check(user.location)}</li>
               <li class="list-group-item">Member since: ${check(user.created_at)}</li>
            </ul>
         </div>
      </div>
    </div>
    <h3 class=""page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
           <div class="card card-body mb-2">
               <div class="row">
                  <div class="col-md-6">
                     <a href="${check(repo.html_url)}" target="_blank">${check(repo.name)}</a>
                  </div>
                  <div class="col-md-6">
                     <span class="badge badge-secondary">Stars: ${check(repo.stargazers_count)}</span>
                     <span class="badge badge-secondary">Watchers: ${check(repo.watchers_count)}</span>
                     <span class="badge badge-secondary">Forks ${check(repo.forks)}</span>
                  </div>
               </div>
           </div> 
         `;
    });
    document.getElementById("repos").innerHTML = output;
  }
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    const search = document.querySelector(".search");
    const container = document.querySelector(".searchContainer");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 1500);
  }
  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
