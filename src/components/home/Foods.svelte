<script>
    import Card from '@components/common/Card.svelte'
    export let data;
    export let title;
</script>
<main >
    <h1 class="text-3xl m-4 mt-12 mb-4 font-bold border-b-4 border-blue-500 max-w-max">{title}</h1>
  <div class='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
    {#each data as food}
        <Card food={food} />
    {/each}
  </div>
</main>