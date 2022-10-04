<!-- Lists the given projects as ProjectItems -->
<script lang='ts'>
    import ProjectItem from "./ProjectItem.svelte";
    import type { Project } from "./lib/types";
    export let projects: Project[] = [];
</script>

<section id="experience">
    <h2>🧪 IT Experience</h2>
    {#each projects as project}
        <ProjectItem {project}/>
    {/each}
</section>
