<!-- Header with a Nav menu -->

<script lang="ts">
    import type {HeaderMenuItem} from './lib/types';
    export let menu_items: HeaderMenuItem[] = [];
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
header {
  background-color: #01161e;
  display: flex;
  color: #EFF6E0;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  /* box-shadow: 2px 2px 4px #000000; */
  position: sticky;
  top: 0;
}

#menu {
  display: flex;
  gap: 1rem;
}

a {
  color: #EFF6E0;
}

</style>