<script lang="ts">
    interface HeaderMenuItem {
        text: string,
        target: string
    }

    let menu_items: HeaderMenuItem[] = [];
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