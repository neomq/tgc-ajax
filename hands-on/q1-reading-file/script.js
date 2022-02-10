document.querySelector('#load-btn').addEventListener('click', async function(){
    
    await axios.get('contact.txt').then(function(response){
        document.querySelector('#content').innerHTML = response.data;
    })
})



