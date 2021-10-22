import { writable } from "svelte/store";

function createContributionsStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    setContributions: (newContributions) => set(Array.from(newContributions)),
    updateContributions: (newContribution) =>
      update((oldContributions) => [...oldContributions, newContribution]),
  };
}

export const contributions = createContributionsStore();
