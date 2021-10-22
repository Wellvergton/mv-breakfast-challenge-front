<script>
  import { capitalizeFistLetter } from "../shared/captalizeFirstLetter";

  export let contributions;
  export let onDelete;
</script>

<div class="field">
  <p class="label">Contributions:</p>
  {#each contributions as contribution, i}
    {#if i === 0}
      <span class="tag is-primary is-medium mr-2">
        {capitalizeFistLetter(contribution)}
        <button
          class="delete"
          on:click|preventDefault={onDelete(contribution)}
        />
      </span>
    {:else}
      <span class="tag is-primary is-medium mx-2">
        {capitalizeFistLetter(contribution)}
        <button
          class="delete"
          on:click|preventDefault={onDelete(contribution)}
        />
      </span>
    {/if}
  {/each}
</div>
