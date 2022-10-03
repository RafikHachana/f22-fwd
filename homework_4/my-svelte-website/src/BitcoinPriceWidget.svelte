<script lang="ts">
    // import { BitcoinPriceAPIResponse } from './lib/api_interface.ts';
    import { onMount, onDestroy } from 'svelte';
    interface BitcoinPriceAPIResponse {
        disclaimer: string,
        time: TimeInformation,
        bpi: MultiCurrencyPriceIndex
    }

    interface TimeInformation {
        updated: string,
        updatedISO: string,
        updateduk: string
    }

    interface CurrencyPriceIndex {
        code: string,
        symbol: string,
        rate: string,
        description: string,
        rate_float: number
    }

    interface MultiCurrencyPriceIndex {
        USD: CurrencyPriceIndex,
        GBP: CurrencyPriceIndex,
        EUR: CurrencyPriceIndex
    }

    // var bitcoin_price: string | null = null;

    async function printBTC() {
        // API call
        const bitcoin_price_info: BitcoinPriceAPIResponse = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(r => r.json())
        console.log(bitcoin_price_info.bpi.USD.rate);
        return bitcoin_price_info.bpi.USD.rate.slice(0, -2) + " " + bitcoin_price_info.bpi.USD.symbol;
    }

    // onMount(() => {printBTC()});
</script>

<div>
    <div class="btc-price-title">
        <img src="/bitcoin.png"/>
        <h4>Here is the real-time Bitcoin price:</h4>
    </div>
    <div class="quote-content">
        {#await printBTC()}
            <p id="btc-price">Loading ...<span id="btc-currency"></span></p>
            <div class="lds-ellipsis" id="btc-price-loader"><div></div><div></div><div></div><div></div></div>
        {:then value}
            <p id="btc-price">{@html value}<span id="btc-currency"></span></p>
        {/await}
    </div>
</div>

