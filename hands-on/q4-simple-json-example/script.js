axios.get('artwork.json').then(function(response){
    
    // cache response.data into a variable
    let article = response.data;
    let title = `<h1>${article.title}<h1>`;

    document.querySelector('#load-image-btn').addEventListener('click', function(){
        let articleDiv = document.querySelector('#artwork');
        articleDiv.innerHTML = title;
        
        let image = `<img src="${article.image_url}" class="image" alt=""></img>`;
        articleDiv.innerHTML += image;
    })
    
})



