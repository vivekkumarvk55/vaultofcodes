document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('n1').value;
    const email = document.getElementById('e1').value;
    const password = document.getElementById('p1').value;
    const confirmPassword = document.getElementById('p2').value;

    // Perform basic validation
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Account created successfully!');
        // Redirect to the login form
        window.location.href = 'loginform.html';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform basic validation (this example is very basic)
    if (email === '' || password === '') {
        alert('All fields are required.');
    } else {
        alert('Login successful!');
        // Redirect to the welcome page
        window.location.href = 'welcome.html';
    }
});
