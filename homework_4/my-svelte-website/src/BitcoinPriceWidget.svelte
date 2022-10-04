<!-- Asynchronously fetches the current Bitcoin price and displays it -->

<script lang="ts">
    import type { BitcoinPriceAPIResponse } from './lib/api_interface';
    import { onMount, onDestroy } from 'svelte';
    import Loader from './lib/Loader.svelte';
    
    var bitcoin_price: string | null = null;

    async function printBTC() {
        // API call
        const bitcoin_price_info: BitcoinPriceAPIResponse = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(r => r.json())
        console.log(bitcoin_price_info.bpi.USD.rate);
        return bitcoin_price_info.bpi.USD.rate.slice(0, -2) + " " + bitcoin_price_info.bpi.USD.symbol;
    }

    let interval: number | null = null;

    onMount(()=>{
        interval = window.setInterval(async ()=>{
            bitcoin_price = await printBTC()
        }, 2000);
    });

    onDestroy(()=>{
        if(interval != null) {
            clearInterval(interval);
        }
    });
    
</script>

<div>
    <div class="btc-price-title">
        <img src="/bitcoin.png" alt="Bitcoin logo"/>
        <h4>Here is the real-time Bitcoin price:</h4>
    </div>
    <div class="quote-content">
        {#if bitcoin_price == null}
            <p id="loading-text">Loading ...</p>
            <Loader/>
        {:else}
            <p id="btc-price">{@html bitcoin_price}</p>
        {/if}
    </div>
</div>

<style>
.quote-content {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#loading-text {
    padding-right: 1rem;
    font-style: italic;
    font-size: x-large;

}
#btc-price {
  padding-right: 1rem;
  font-style: italic;
  font-size: xx-large;
  font-weight: bold;
}

.btc-price-title {
display: flex;
align-items: center;
}

.btc-price-title>img {
width: 2.5rem;
height: 2.5rem;
padding-right: 1rem;
}
</style>
