
let url = "https://randomuser.me/api/?results=10";


document.querySelector("#btn").addEventListener('click', async function(){

    await axios.get(url).then(function(response){
        let randUsers = response.data
        let randUsersList = document.querySelector('#display');

        for (let user of randUsers.results){
            let userName = user.name.first + " " + user.name.last;
            let userCity = user.location.city;

            randUsersList.innerHTML += `<p>Name: ${userName}<br>City: ${userCity}</p>`;

            let userImg = user.picture.medium;
            randUsersList.innerHTML += `<img src="${userImg}" alt="">`;

        }
    })

})
