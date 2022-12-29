const baseUrl = "https://api.noroff.dev/api/v1/jokes";
const productContainer = document.querySelector(".posts");

//Filter buttons
const generalBtn = document.getElementById('generalBtn');
const programmingBtn = document.getElementById('programmingBtn');
const knockknockBtn = document.getElementById('knockknockBtn');

generalBtn.onclick = function(e) {
    getJokes(baseUrl, "general");
}
programmingBtn.onclick = function(e) {
    getJokes(baseUrl, "programming");
}
knockknockBtn.onclick = function(e) {
    getJokes(baseUrl, "knock-knock");
}


async function getJokes(url, joketype){
    const response = await fetch(url);
    const products = await response.json();
    productContainer.innerHTML = "";
    products.forEach(function(joke) {
        if(joke.type == joketype)
        {
            productContainer.innerHTML += ` 
            <a href="joke.html?id=${joke.id}" class="card">
            <div class="product-setup"><h2>${joke.setup}</h2>
            <div class="product-type"><h2>Joke type: ${joke.type}</h2>
        
            </a>
            </div>
            <hr>
            `;
        }
    })
};

getJokes(baseUrl, "general");







