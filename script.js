// Show Login Form and hide Signup
function showLogin() {
  document.getElementById("signup-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}

// Show Signup Form and hide Login
function showSignup() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("signup-box").classList.remove("hidden");
}

// Toggle password visibility
function togglePassword(id, el) {
  const input = document.getElementById(id);
  if (input.value.length === 0) return; // Do nothing if input is empty
  if (input.type === "password") {
    input.type = "text";
    el.textContent = "🙈";
  } else {
    input.type = "password";
    el.textContent = "🐵";
  }
}

// Signup Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {

  //  reloading page
  e.preventDefault();
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;
  const message = document.getElementById("signMsg");

  // Validation
  if (!first || !last) {
    message.style.color = "red";
    message.textContent = "Please enter your full name.";
    return;
  }

  if (!validateEmail(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match.";
    return;
  }

  if (!terms) {
    message.style.color = "red";
    message.textContent = "You must agree to privacy and policy.";
    return;
  }

  // On success
  message.style.color = "green";
  message.textContent = "Signup successful!";
  document.getElementById("signupForm").reset();    // On success all the feilds reset
});

// Email format validator
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}




// Login Form validation
document.getElementById("loginForm").addEventListener("submit", function (e) {

  //reloading page
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("loginMsg");

  //Fixed email and pswrd
  const correctEmail = "aarti.gupta@gmail.com";
  const correctPassword = "aarti1234";


  // Validation
  if (!validateEmail(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  let errors = [];  // Get Errors

  if (email !== correctEmail) {
    errors.push("Invalid Email"); 
  }

  if (password !== correctPassword) {
    errors.push("Invalid Password");
  }

  if (errors.length > 0) {
    message.textContent = errors.join(" & ");  // show error both and indiviually
    message.style.color = "red";
  } else {
    message.textContent = "Successfully Logged In!";
    message.style.color = "green";
    document.getElementById("loginForm").reset();     // On success all the feilds reset
  }

});
