function createCard(event) {
    document.getElementById("main-container").style = "display: none"
    document.getElementById('fname').value

    console.log(document.getElementById('fname').value)
    return{
        name:document.getElementById('fname').value + document.getElementById('lname').value,
        email:document.getElementById('email').value,
        number:document.getElementById('number').value,
    }
}

