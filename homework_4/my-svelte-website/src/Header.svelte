<script lang="ts">
    import type {HeaderMenuItem} from './lib/types';
    import {afterUpdate} from 'svelte';

    // const {HeaderMenuItem} = menuItem;
    export let menu_items: HeaderMenuItem[] = [];

    afterUpdate(() => console.log(menu_items))
</script>

<header>
    <h1>Rafik Hachana's portfolio</h1>
    <nav id="menu">
    {#each menu_items as item}
        <a class="menu-item" href="#{item.target}">{item.text}</a>
    {/each}
    </nav>
</header>

<style>


</style>