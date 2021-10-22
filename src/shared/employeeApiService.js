import { employees } from "../stores/employeeStore";

export async function getAllEmployees() {
  const response = await fetch(
    "https://mv-breakfast-challenge.herokuapp.com/employee/list",
    {
      mode: "cors",
    }
  );
  const responseData = await response.json();

  employees.setEmployees(responseData);
}

export async function saveEmployee(name, cpf) {
  const response = await fetch(
    "https://mv-breakfast-challenge.herokuapp.com/employee/save",
    {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        cpf: cpf,
      }),
    }
  );
  const responseData = await response.json();

  employees.updateEmployees(responseData);

  return responseData;
}
