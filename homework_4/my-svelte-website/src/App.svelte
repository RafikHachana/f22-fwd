<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  import Header from './Header.svelte';
  import Intro from './Intro.svelte';
  import Skills from './Skills.svelte';
  import Experience from './Experience.svelte';
  import Footer from './Footer.svelte';

  let menu_items = [
    {text: "Intro", target: "intro"}
  ];
</script>
<svelte:head>
  <title>Rafik's portfolio</title>
  <link rel="icon" type="image/x-icon" href="public/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,300&display=swap" rel="stylesheet"> 
</svelte:head>
<Header {menu_items}/>
<main>
  <Intro></Intro>
  <Skills></Skills>
  <Experience/>
  
</main>
<Footer/>
<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>