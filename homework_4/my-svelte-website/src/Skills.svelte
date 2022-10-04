<!-- Makes a list of skills -->

<script lang="ts">
    export let skills: string[] = [];

    // Defines the maximum vertical length for the skills list
    // If the list exceeds this length, more columns are used
    export let max_length: number = 7;
</script>

<section id="skills">
    <h2>🍳 Skills</h2>
    <div>
        {#each Array(Math.ceil(skills.length / max_length)) as _, i}
            <ul>
                {#each skills.slice(i*max_length, (i+1)*max_length) as skill}
                    <li>{skill}</li>
                {/each}
            </ul>
        {/each}
    </div>
</section>

<style>

div {
  display: flex;
}
</style>
