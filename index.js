function createCard(event) {
    document.getElementById("main-container").style = "display: none"
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
}


