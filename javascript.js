function passwordValidate() {
    var password = document.getElementById("password").value;
    var validation = document.getElementById("passwordConfirm").value;

    if (password !== validation) {
        alert("Passwords do not match")
    }
}