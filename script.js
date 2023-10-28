document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get user input
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const course = document.getElementById("course").value;

        // Perform registration logic here (e.g., send data to the server)

        alert("Registration successful!");
        registrationForm.reset(); // Clear the form
    });
});