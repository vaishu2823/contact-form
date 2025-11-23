const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach(e => e.innerText = ""); // clear old errors

  let successMsg = document.getElementById("successMsg");
  successMsg.innerText = ""; // clear success message

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.querySelectorAll(".error")[0].innerText = "Name is required";
    isValid = false;
  }

  // Validate Email with regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.querySelectorAll(".error")[1].innerText = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.querySelectorAll(".error")[1].innerText = "Enter a valid email";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.querySelectorAll(".error")[2].innerText = "Message cannot be empty";
    isValid = false;
  }

  // If valid → show success message
  if (isValid) {
    successMsg.innerText = "Form submitted successfully!";
    form.reset(); // clear form input fields
  }
});
