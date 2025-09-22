function sendToGmail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let myEmail = "giovanni.udakalu@gmail.com";
   
    let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.open(gmailURL, "_blank");
}

function toggleMenu() {
    document.getElementById("menuBar").classList.add("show");
}

function closeMenu() {
    document.getElementById("menuBar").classList.remove("show");
}

function goBack() {
    window.location.href = "giovanniTwo.html";
}