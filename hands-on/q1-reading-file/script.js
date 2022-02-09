document.querySelector('#load-btn').addEventListener('click', function(){
    
    axios.get('contact.txt').then(function(response){
        document.querySelector('#content').innerHTML = response.data;
    })
})

