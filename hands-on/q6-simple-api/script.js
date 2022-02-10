let url = "https://programming-quotes-api.herokuapp.com/quotes/random";


document.querySelector("#btn").addEventListener('click', async function(){

    await axios.get(url).then(function(response){
        console.log(response.data);
        document.querySelector('#quotebox').innerText = response.data.en;
    })

})


