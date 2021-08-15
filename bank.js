document.getElementById('submit-btn').addEventListener('click', function () {
    // get user email
    const textField = document.getElementById('text-field');
    const usertext = textField.value;
    // get user password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    // get email and password
    if (usertext == 'musfiq@gmail.com' && userPassword == 'secret') {
        window.location.href = 'hotel-banking.html'

    }
});