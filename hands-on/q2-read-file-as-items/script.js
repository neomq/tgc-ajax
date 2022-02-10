document.querySelector('#btn').addEventListener('click', async function(){
    
    await axios.get('items.txt').then(function(response){
        // document.querySelector('#content').innerHTML = response.data;

        let items = response.data;
        let itemsArray = items.split(",");
        
        let list = document.querySelector('#content');

        for (let i of itemsArray){
            let itemElement = document.createElement('li');
            itemElement.innerText = i;
            list.appendChild(itemElement);
        }
    });

    

    
});
