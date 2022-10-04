<script lang="ts">
  import type {HeaderMenuItem, Project} from './lib/types';
  import Header from './Header.svelte';
  import Intro from './Intro.svelte';
  import Skills from './Skills.svelte';
  import Experience from './Experience.svelte';
  import Footer from './Footer.svelte';
  import { experience, skills, intro_content } from './data';

  let menu_items: HeaderMenuItem[] = [
    {text: "Intro", target: "intro"},
    {text: "Skills", target: "skills"},
    {text: "IT Experience", target: "experience"},
    {text: "Contact Me", target: "contact"},
  ];

  let projects: Project[] = experience;

</script>

<svelte:head>
  <title>Rafik's portfolio</title>
  <link rel="icon" type="image/x-icon" href="public/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,300&display=swap" rel="stylesheet"> 
</svelte:head>

<Header menu_items={menu_items}/>

<main>
  <Intro content={intro_content}/>
  <Skills {skills} />
  <Experience {projects} />
</main>

<Footer/>

<style>
:global(body) {
  padding: 0px;
  margin: 0px;
  box-shadow: 10px 20px #000000;
  background-color: #AEC3B0;
  font-family: 'Poppins', sans-serif;
}

main {
  background-color: #EFF6E0;
  color: #01161E;
  max-width: 50%;
  margin: auto;
  padding: 2rem;
  text-align: justify;
  margin-bottom: 0px;
}

:global(main>section) {
  padding-top: 75px;
}
</style>
