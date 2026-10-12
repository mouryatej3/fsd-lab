```javascript
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");
    let success = document.getElementById("success");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        nameError.textContent = "Name should contain only letters.";
        valid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must contain at least 3 characters.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    }

    // Subject validation
    if (subject === "") {
        subjectError.textContent = "Subject is required.";
        valid = false;
    } else if (subject.length < 3) {
        subjectError.textContent = "Subject must contain at least 3 characters.";
        valid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Message is required.";
        valid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message should contain at least 10 characters.";
        valid = false;
    }

    // Final result
    if (valid) {
        success.textContent = "Form Submitted Successfully!";
        document.getElementById("contactForm").reset();
    }
});
```
