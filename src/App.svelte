<script>
  import { onMount } from "svelte";
  import List from "./list-screen/List.svelte";
  import Form from "./form-screen/Form.svelte";

  import { getAllContributions } from "./shared/contributionApiService";
  import { getAllEmployees } from "./shared/employeeApiService";

  let selectedScreen = "list";

  onMount(() => {
    getAllContributions();
    getAllEmployees();
  });

  function setScreen(screen) {
    selectedScreen = screen;
  }
</script>

<nav class="navbar is-primary">
  <div class="navbar-menu">
    <div class="navbar-start">
      <a
        href="!#"
        class={`navbar-item ${selectedScreen === "list" ? "is-active" : ""}`}
        on:click|preventDefault={() => setScreen("list")}>Lista</a
      >
      <a
        href="!#"
        class={`navbar-item ${selectedScreen === "form" ? "is-active" : ""}`}
        on:click|preventDefault={() => setScreen("form")}>Contribuir</a
      >
    </div>
  </div>
</nav>
<main>
  <div class="columns">
    <div class="column" />
    <div class="column is-half">
      {#if selectedScreen === "form"}
        <Form />
      {:else}
        <List />
      {/if}
    </div>
    <div class="column" />
  </div>
</main>
