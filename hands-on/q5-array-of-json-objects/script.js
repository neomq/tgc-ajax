document.querySelector('#load-users-btn').addEventListener('click', async function(){
        let response = await axios.get('users.json');
        let userData = response.data;
        
        
        for(let user of userData.users){
            //console.log(user);
            
            let userInfo = document.createElement('li');
            let userFirstName = user.firstName;
            let userLastName = user.lastName;
            let userEmail = user.emailAddress;

            userInfo.innerText = "First Name: " + userFirstName + "\n" + "Last Name: " + userLastName + "\n" + "Email: " + userEmail;
            document.querySelector('#users').appendChild(userInfo);

            

        }
});