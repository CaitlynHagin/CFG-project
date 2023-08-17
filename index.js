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
  }, 
  {
    id: 'avatar-url',
    label: 'Avatar link',
    type: 'text',
    name: 'avatar-url'
  }
];
// array of affirmations for card to be displayed 

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
/* gets a random number  and choses that affirmation so its random everytime*/ 

function affirmation() {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(Math.floor(Math.random() * 10));
  return affirmations[randomNumber];
};
function getInputs() {
  const inputElements = inputs.reduce((acc, curr) => {
    acc[curr.id] = document.getElementById(curr.id)
    return acc;
  }, {});
  return inputElements;
}

function getFormValues() {
  const formValues = inputs.reduce((acc, curr) => {
    acc[curr.id] = document.getElementById(curr.id).value
    return acc
  }, {});
  return formValues;
};

function isButtonDisabled() {
  const formValues = getFormValues();
  const values = Object.values(formValues);
  let shouldDisabledButton = false;

  for (let i = 0; i < values.length; i++) {
    if (!values[i]) {
      shouldDisabledButton = true;
    }
  };  
  const button = document.getElementById('creare-card-button');
  
  if (shouldDisabledButton) {
    button.disabled = true;
    button.style = 'background-color:  lightpink';
    
  } else {
    button.disabled = false;
    button.style = 'background-color:  rgb(197, 2, 152)'
    button.style = 'cursor: pointer';
  }
};

function handleInputsChage() {
  const inputElements = getInputs();
  const elements = Object.values(inputElements);
   
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', isButtonDisabled);
  }
};

function createCard() {
  toggleElement("form-container", "none");
  toggleElement("card-container", "flex");

  const formValues = getFormValues();

  const userName = document.getElementById('display-name');
  const userEmail = document.getElementById('display-email');
  const userNumber = document.getElementById('display-number');
  const avatar = document.getElementById('avatar');
  const userAffirmation = document.getElementById('display-affirmation');

  userName.textContent = formValues.fname + ' ' + formValues.lname;
  userEmail.textContent = formValues.email;
  userNumber.textContent = formValues.number;
  avatar.setAttribute('src', formValues["avatar-url"])
  userAffirmation.textContent = affirmation();
};

createInputs();
isButtonDisabled();
handleInputsChage();