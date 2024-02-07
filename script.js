



function validateForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    

    if (firstName.trim() === "") {
        alert("Please enter your First Name.");
        return false;
    }

    if (lastName.trim() === "") {
        alert("Please enter your Last Name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your Email.");
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter your Phone.");
        return false;
    }

    if (address.trim() === "") {
        alert("Please enter your Address.");
        return false;
    }

    if (city.trim() === "") {
        alert("Please enter your City.");
        return false;
    }

    if (state.trim() === "") {
        alert("Please enter your State.");
        return false;
    }

    if (zip.trim() === "") {
        alert("Please enter your ZIP.");
        return false;
    }

    if (dob.trim() === "") {
        alert("Please enter your Date of Birth.");
        return false;
    }

    if (gender === "") {
        alert("Please select your Gender.");
        return false;
    }

    if (username.trim() === "") {
        alert("Please enter your username.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter your password.");
        return false;
    }
    return true;
}