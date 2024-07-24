function validateForm() {
    var username = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var pinCode = document.getElementById('pinCode').value;
    var panNumber = document.getElementById('panNumber').value;
    var password = document.getElementById('password').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    var usernamePattern = /^[a-zA-Z0-9]{8,10}$/;
    var pinCodePattern = /^[0-9]{6}$/;
    var panNumberPattern = /^[A-Z]{5}[0-9]{4}[a-z]{1}$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    var phoneNumberPattern = /^[8-9][0-9]{9}$/;

    if (!usernamePattern.test(username)) {
        alert("Username must be between 8 to 10 characters.");
        return false;
    }

    if (!(age > 0 && age < 100)) {
        alert("Age must be between 1 and 99.");
        return false;
    }

    if (!pinCodePattern.test(pinCode)) {
        alert("Pin Code must be 6 digits.");
        return false;
    }

    if (!panNumberPattern.test(panNumber)) {
        alert("PAN Number must be  having 10 characters.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be 10 characters  and at least one uppercase letter,lowercase letter,digit,special character");
        return false;
    }

    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Phone Number must be 10 digits and start with 8.");
        return false;
    }


    return true;
}