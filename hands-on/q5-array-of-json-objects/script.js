document.querySelector('#load-users').addEventListener('click', async function(){
        let response = await axios.get('users.json');
        let userData = response.data;
        
        
        for(let user of userData.users){
            //console.log(user);
            
            let userFirstName = user.firstName;
            let userLastName = user.lastName;
            let userEmail = user.emailAddress;

            let userInfo = document.createElement('li');
            let displayName = document.createElement('div');
            let displayEmail = document.createElement('small');

            displayName.innerHTML = userFirstName + " " + userLastName;
            displayEmail.innerHTML = userEmail;

            userInfo.appendChild(displayName);
            userInfo.appendChild(displayEmail); 
            document.querySelector('#all-users-list').appendChild(userInfo);

            // bootstrap
            userInfo.className = "list-group-item justify-content-between align-items-start";
            displayName.className = "fw-bold";
        }
});

document.querySelector('#search-btn').addEventListener('click', async function(){
        let response = await axios.get('users.json');
        let userData = response.data;

        let searchInput = document.querySelector('#search-input').value;
        
        ///// Incomplete /////
});