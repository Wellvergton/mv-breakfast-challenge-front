<script>
  import { employees } from "../stores/employeeStore";
  import { contributions } from "../stores/contributionStore";

  import { capitalizeFistLetter } from "../shared/captalizeFirstLetter";
</script>

<table class="table is-striped is-hoverable is-fullwidth">
  <thead>
    <tr>
      <th>Participante</th>
      <th>Contribuição</th>
    </tr>
  </thead>
  <tbody>
    {#each $employees as employee}
      <tr>
        <td>{employee.name}</td>
        <td>
          {#each $contributions as contribution, i}
            {#if contribution.employee.id === employee.id}
              {`${capitalizeFistLetter(contribution.name)}, `}
            {/if}
          {/each}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
