const btnEl = document.getElementById("btn");

const quote = document.getElementById("api-quote");

const authorName = document.getElementById("author-name");

const apiUrlQuote = "https://api.quotable.io/random";


btnEl.addEventListener("click", getApiQuote);


async function getApiQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        const response = await fetch(apiUrlQuote);
        const result = await response.json();
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        const apiQuote = result.content;
        const quoteAuthor = result.author;
        quote.innerText = apiQuote;
        authorName.innerText = quoteAuthor;

    } catch (error) {
        console.log(error);
        quote.innerText = "An error happened, try again later";
        authorName.innerText = "N/A";
        btnEl.innerText = "Error";
    }
    


};
