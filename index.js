
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

function createCard(event) {
    document.getElementById("main-container").style = "display: none"
    // document.getElementById("display-container").style = "display: "
    document.getElementById('fname').value
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

function affirmation () {
    const randomNumber = Math.floor(Math.random() );
    return affirmations[randomNumber];
}

