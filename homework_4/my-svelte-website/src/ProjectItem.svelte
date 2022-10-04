<!-- Holds the description of one project -->
<script lang="ts">
    import type { Project } from "./lib/types";
    export let project: Project;
</script>

<div class="experience-item">
    <h3>{project.title}</h3>
    <strong>{project.context}</strong>
    <p>{project.description}</p>
</div>

<style>
.experience-item>strong {
  font-style: italic;
}

.experience-item {
  padding-top: 15px;
}
</style>
