// ================= REGISTER =================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    // Save user in localStorage (fake backend)
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! Please login.");

    window.location.href = "index.html";
  });
}

// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("userEmail", email);

      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password");
    }
  });
}
