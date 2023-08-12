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

function createCard() {
  document.getElementById("main-container").style = "display: none";

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;

  const userName = document.getElementById('display-name');
  const userEmail = document.getElementById('display-email');
  const userNumber = document.getElementById('display-number');
  userName.textContent = fname + lname;
  userEmail.textContent = email;
  userNumber.textContent = number;
  const userAffirmation = document.getElementById('display-affirmation');
  userAffirmation.textContent = affirmation();
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

function affirmation() {
  const randomNumber = Math.floor(Math.random());
  return affirmations[randomNumber];
}

createInputs()
