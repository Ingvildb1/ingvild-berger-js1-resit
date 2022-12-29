const productContainer = document.querySelector(".joke");
const showhideBtn = document.getElementById("showhideBtn");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const baseUrl = "https://api.noroff.dev/api/v1/jokes/" + id;


async function getJoke(url){
    const response = await fetch(url);
    const joke = await response.json();

    productContainer.innerHTML = `<h1>${joke.setup}</h1>
    <div class="details-type"><h2>Joke type: ${joke.type}</h2></div>
    <div class="details-setup"><h3>${joke.setup}</h3></div>
    <div class="details-punchline" id="x" style="display:none;"><h3>${joke.punchline}</h3></div>`;

    
}

getJoke(baseUrl);

showhideBtn.onclick = function(e) {
    var x = document.getElementById('x');
    if(x.style.display == 'none')
        x.style.display = 'block';
    else
        x.style.display = 'none';
}



