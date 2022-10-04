<!-- Intro section -->

<script lang="ts">
    import BitcoinPriceWidget from "./BitcoinPriceWidget.svelte";

    export let content: string[] = [];
</script>

<section id="intro">
    <h2>💁 Intro</h2>
    <div id="intro-content">
        <img id="portrait" src="/portrait.jpg" alt="My face"/>
        <div id="intro-text">
            {#each content as paragraph}
                <p>{@html paragraph}</p>
            {/each}
        </div>
    </div>
    <BitcoinPriceWidget/>  
</section>

<style>
#portrait {
  width: 150px;
  margin: 1rem;
}

#intro {
  display: inline;
}

#intro-content {
  display: flex;
  align-items: flex-start;
}

#intro-text {
  text-align: justify;
}
</style>
