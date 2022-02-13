const BASE_API_URL = "http://openlibrary.org/search.json"



document.querySelector('#search-btn').addEventListener('click', async function(){
    let book = document.querySelector('#search-input').value;

    let p = {
        'title': book
    }
    let response = await axios.get(BASE_API_URL,{
        "params": p
    })
    console.log(response.data);

    
})

