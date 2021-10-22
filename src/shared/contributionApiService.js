import { contributions } from "../stores/contributionStore";

export function getAllContributions() {
  fetch("http://mv-breakfast-challenge.herokuapp.com/contribution/list", {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => contributions.setContributions(data));
}

function saveContribution(contributionName, employeeId) {
  fetch(
    "http://mv-breakfast-challenge.herokuapp.com/contribution/save/" +
      employeeId,
    {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: contributionName }),
    }
  )
    .then((response) => response.json())
    .then((data) => contributions.updateContributions(data));
}

export function saveArrayOfContributions(contributionArray, employeeId) {
  contributionArray.forEach((value) => {
    saveContribution(value, employeeId);
  });
}
