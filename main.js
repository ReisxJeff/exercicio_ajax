document.addEventListener('DOMContentLoaded', function(){
    const nomeElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document. querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingsElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/ReisxJeff')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nomeElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingsElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})