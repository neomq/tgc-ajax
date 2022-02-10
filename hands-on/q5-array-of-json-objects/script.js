

document.querySelector('#load-users-btn').addEventListener('click', async function(){
        let response = await axios.get('users.json');
        let users = response.data;

        
        
    })