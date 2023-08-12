const inputs = [
  {
    id: 'fname',
    label: 'First name',
    type: 'text',
    name: 'first_name'
  },
  {
    id: 'lname',
    label: 'Last name',
    type: 'text',
    name: 'last_name'
  },
  {
    id: 'email',
    label: 'E-mail adress',
    type: 'email',
    name: 'email'
  },
  {
    id: 'number',
    label: 'Number',
    type: 'text',
    name: 'number'
  }
]

function createCard() {
  document.getElementById("main-container").style = "display: none"
}


const createInputs = () => {
  const form = document.getElementById("form");
  for (let i = 0; i < inputs.length; i++) {
    const inputContainer = form.appendChild(document.createElement("div"));
    inputContainer.classList.add("input-container");
    const label = inputContainer.appendChild(document.createElement("label"));
    label.textContent = inputs[i].label
    label.setAttribute("for", inputs[i].id);
    const input = inputContainer.appendChild(document.createElement("input"));
    input.setAttribute("id", inputs[i].id);
    input.setAttribute("type", inputs[i].type);
    input.setAttribute("name", inputs[i].name);
  }
}

createInputs()