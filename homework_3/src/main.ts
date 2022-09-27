import { BitcoinPriceAPIResponse } from "./interfaces";

/*
    NOTE: I previously used the random number fact API, but it only returned text so it was not very interesting to
    make interfaces for it. I switched to the BTC price API from Coindesk because it has nested JSON fields.
*/

async function printBTC() {
    // API call
    const bitcoin_price_info: BitcoinPriceAPIResponse = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(r => r.json())
    console.log(bitcoin_price_info.bpi.USD.rate);

    // Get the HTML elements to update
    const text_element = document.getElementById('btc-price') as HTMLDivElement | null;
    const loader = document.getElementById('btc-price-loader') as HTMLDivElement | null;

    // Important type guards to avoid errors
    if(text_element != null) {
        text_element.innerHTML = bitcoin_price_info.bpi.USD.rate.slice(0, -2) + " " + bitcoin_price_info.bpi.USD.symbol;

        // Update the style of the loading text once it displays the actual price
        text_element.style.fontSize = "x-large";
        text_element.style.fontWeight = "bold";
    }
    if(loader != null) {
        loader.style.display = "none";
    }
}


// Runs when the document is ready
((e) => {
    setInterval(printBTC, 2000);
})();
