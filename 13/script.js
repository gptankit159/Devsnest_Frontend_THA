// var quotes = "https://api.quotable.io/random?tags=technology,famous-quotes";
const pos = document.getElementById('quotes');
const auth = document.getElementById('author');
async function randomQuote(){
    const response=await fetch('https://api.quotable.io/random?tags=technology');
    const quote = await response.json();
    console.log(quote);
    pos.innerHTML=quote.content;
    auth.innerHTML="---" + quote.author;

}