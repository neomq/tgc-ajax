const BASE_API_URL = "http://openlibrary.org/search.json"

document.querySelector('#search-btn').addEventListener('click', async function(){
    let book = document.querySelector('#search-input').value;

    let p = {
        'title': book
    }
    let response = await axios.get(BASE_API_URL,{
        "params": p
    })
    //console.log(response.data);
    let results = response.data;

    let searchResult = document.querySelector('#search-results');
    let bookTitle = document.createElement('h4');
    let bookAuthor = document.createElement('p');
    let pageCount = document.createElement('p');

    bookTitle.innerHTML = "Title: " + results.docs[0].title;
    bookAuthor.innerHTML = "Author: " + results.docs[0].author_name[0];
    pageCount.innerHTML = "Page Count: " + results.docs[0].number_of_pages_median;
    
    // append to #search-results div
    searchResult.appendChild(bookTitle);
    searchResult.appendChild(bookAuthor);
    searchResult.appendChild(pageCount);

})

