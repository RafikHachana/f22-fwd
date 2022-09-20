
// Fetches a number fact from the API
function fetchSomeNumberFact() {
    return fetch('http://numbersapi.com/random/math').then(r => r.text());
}

// Updates the quote elements when a new quote is available
function updateQuote(text) {
    const text_element = document.getElementById('quote-text');
    const loader = document.getElementById('quote-loader');
    text_element.innerHTML = "\"" + text + "\"";
    loader.style.display = "none";
}

// Sets the loading text and loader while we wait for the API's response
function loadingQuote() {
    const text_element = document.getElementById('quote-text');
    const loader = document.getElementById('quote-loader');
    text_element.innerHTML = "Loading ...";
    loader.style.display = "block";
}

// Performs the quote refresh procedure (API call + HTML updates)
async function refreshQuote() {
    loadingQuote();
    result = await fetchSomeNumberFact();
    console.log(result);
    updateQuote(result);
}

// Sets the interval for the periodic number fact fetching
function quoteRefreshSetup() {
    refreshQuote();
    setInterval(refreshQuote, 10000);
}

// Runs when the document is ready
((e) => {

    // Added a timeout at the start so the user can see the nice loading animation
    setTimeout(quoteRefreshSetup, 2000);
})();