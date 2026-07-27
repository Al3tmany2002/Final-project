function register() {

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));

    var expires = "expires=" + date.toUTCString();

    document.cookie = "firstName=" + firstName + ";" + expires + ";path=/";
    document.cookie = "lastName=" + lastName + ";" + expires + ";path=/";
    document.cookie = "userName=" + userName + ";" + expires + ";path=/";
    document.cookie = "email=" + email + ";" + expires + ";path=/";
    document.cookie = "password=" + password + ";" + expires + ";path=/";

    alert("Registration Completed Successfully");
  
document.getElementById("fname").value = "";
document.getElementById("lname").value = "";
document.getElementById("username").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";

alert("Registration Completed Successfully");
}