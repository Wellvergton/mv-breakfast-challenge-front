<script>
  import Contributions from "./Contributions.svelte";

  import { saveArrayOfContributions } from "../shared/contributionApiService";
  import { saveEmployee } from "../shared/employeeApiService";

  let name = "";
  let cpf = "";
  let contributionField = "";
  let formContributions = [];

  function addContributions() {
    formContributions = [...formContributions, contributionField];
    contributionField = "";
  }

  function removeContribution(name) {
    formContributions = formContributions.filter((c) => c !== name);
  }

  async function saveInformationsOnServer() {
    const employeeResponseData = await saveEmployee(name, cpf);

    saveArrayOfContributions(formContributions, employeeResponseData.id);
  }

  function clearFields() {
    name = "";
    cpf = "";
    contributionField = "";
    formContributions = [];
  }
</script>

<form class="mt-5" action="">
  <div class="field">
    <label for="name" class="label"> Nome </label>
    <div class="control">
      <input id="name" type="text" class="input" bind:value={name} />
    </div>
  </div>

  <div class="field">
    <label for="cpf" class="label"> CPF </label>
    <div class="control">
      <input id="cpf" type="text" class="input" bind:value={cpf} />
    </div>
  </div>

  <label for="contribution" class="label"> Contribuições </label>
  <div class="field has-addons">
    <div class="control">
      <input
        id="contribution"
        type="text"
        class="input"
        bind:value={contributionField}
      />
    </div>
    <div class="control">
      <button
        class="button is-info"
        on:click|preventDefault={() => addContributions()}
      >
        Adicionar
      </button>
    </div>
  </div>

  <Contributions
    contributions={formContributions}
    onDelete={removeContribution}
  />

  <div class="field is-grouped-centered">
    <div class="control">
      <button
        class="button is-link"
        on:click|preventDefault={async () => {
          await saveInformationsOnServer();
          clearFields();
        }}
      >
        Enviar
      </button>
    </div>
  </div>
</form>
