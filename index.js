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
];

const affirmations = [
  "I am full of positive energy.",
  "I have the strength to achieve my goals.",
  "Every day, I am becoming a better version of myself.",
  "I possess the abilities needed to overcome challenges.",
  "My actions bring me success.",
  "I feel gratitude for each new day.",
  "I believe in myself and my abilities.",
  "I love and accept myself unconditionally.",
  "I have control over my thoughts and emotions.",
  "My possibilities are limitless."
];

function createInputs() {
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
};

function toggleElement(el, style) {
  document.getElementById(el).style = `display: ${style}`;
};

function affirmation() {
  const randomNumber = Math.floor(Math.random());
  return affirmations[randomNumber];
};

createInputs();

const formValues = {
  fname: document.getElementById('fname').value,
  lname: document.getElementById('lname').value,
  email: document.getElementById('email').value,
  number: document.getElementById('number').value
};

function createCard() {
  toggleElement("form-container", "none");
  toggleElement("card-container", "flex");

  const userName = document.getElementById('display-name');
  const userEmail = document.getElementById('display-email');
  const userNumber = document.getElementById('display-number');
  const userAffirmation = document.getElementById('display-affirmation');

  userName.textContent = formValues.fname + formValues.lname;
  userEmail.textContent = formValues.email;
  userNumber.textContent = formValues.number;
  userAffirmation.textContent = affirmation();
};
