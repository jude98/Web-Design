document.getElementById('getUsers').addEventListener('click', loadUsers);

function loadUsers(){
    var httpRequest = new XMLHttpRequest();
    if(!httpRequest){
        alert('Cannot load Server');
        return false;
    }

    httpRequest.open('GET', 'https://api.github.com/users', true);
    httpRequest.onload = function(){
        if(this.status === 200){
            var users = JSON.parse(this.responseText);
            var output = '';
            // console.log(users);
            for(var out in users){
                output += `<div class = "users">
                                <img src=${users[out].avatar_url} width="80px" height="80px">
                                <ul>
                                <li>User name : ${users[out].login}</li>
                                <li>ID : ${users[out].id}</li>
                                </ul>
                                </div>`;

            }
            document.getElementById('allUsers').innerHTML = output;
        }
    }

    httpRequest.send();
}