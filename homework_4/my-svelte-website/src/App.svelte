<script lang="ts">
  import type {HeaderMenuItem, Project} from './lib/types';
  import Header from './Header.svelte';
  import Intro from './Intro.svelte';
  import Skills from './Skills.svelte';
  import Experience from './Experience.svelte';
  import Footer from './Footer.svelte';
  import json_data from './assets/experience.json';
    import { experience_data } from './assets/experience';

  let menu_items: HeaderMenuItem[] = [
    {text: "Intro", target: "intro"},
    {text: "Skills", target: "skills"},
    {text: "IT Experience", target: "experience"},
    {text: "Contact Me", target: "contact"},
  ];

  let projects: Project[] = experience_data;
  console.log(projects)
  console.log(json_data)
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
  <Intro></Intro>
  <Skills></Skills>
  <Experience {projects} />
</main>

<Footer/>
