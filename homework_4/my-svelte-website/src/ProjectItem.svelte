<script lang="ts">
    import type { Project } from "./lib/types";
    export let project: Project;
</script>

<div class="experience-item">
    <h3>{project.title}</h3>
    <strong>{project.context}</strong>
    <p>{project.description}</p>
</div>
