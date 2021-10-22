import { writable } from "svelte/store";

function createEmployeesStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    setEmployees: (newEmployeesArray) => set(Array.from(newEmployeesArray)),
    updateEmployees: (newEmployee) =>
      update((oldEmployees) => [...oldEmployees, newEmployee]),
  };
}

export const employees = createEmployeesStore();
