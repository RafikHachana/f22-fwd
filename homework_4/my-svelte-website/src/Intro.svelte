<script lang="ts">
    import BitcoinPriceWidget from "./BitcoinPriceWidget.svelte";
</script>

<section id="intro">
    <h2>💁 Intro</h2>
    <div id="intro-content">
        <img id="portrait" src="/portrait.jpg"/>
        <div id="intro-text">
            <p>I am an enthusiastic CS and Data Science student with 4 years of
                competitive programming experience, 2 years of software engineering experience,
                and 1 year experience in Machine Learning Research.
                Currently pursuing a B.Sc. degree in CS
                and Data Science in Innopolis University while freelancing
                projects and working on ML research.</p>
            <p>On a side note, I am also a musician, guitarist and a newbie producer.
                More info about my music will be added soon on this website 😜.
            </p>
            <p>
                Recently, I have also been interested in investing into assets and equity. Therefore, I have decided
                to display the current <strong>Bitcoin</strong> price for you (maybe it will get you interested in investing). 
            </p>
        </div>
    </div>
    <BitcoinPriceWidget/>  
</section>