const baseUrl = "https://api.noroff.dev/api/v1/jokes";
const productContainer = document.querySelector(".posts");
const categories = document.querySelectorAll(".categories");


async function getJokes(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(joke){
        productContainer.innerHTML += ` <a href="joke.html?id=${joke.id}" class="card">
        <div class="product-setup"><h2>${joke.setup}</h2>
        <div class="product-type"><h2>Joke type: ${joke.type}</h2>
       
        </a>
    </div>
        `
    })

};

getJokes(baseUrl);

categories.forEach(function(category){
    category.onclick = function(event){
        let newUrl;
        if(event.target.id === "general"){
            newUrl = baseUrl + "?general=true";
        }
        else{
            const categoryChosen = event.target.value;
            newUrl = baseUrl + `?category=${categoryChosen}`
        }
        productContainer.innerHTML = "";
        getJokes(newUrl);
    }
})





