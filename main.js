const passwordBox = document.getElementById("Password");
const btn = document.getElementById("gtn-btn");
const copy = document.getElementById("copy");


const lenth = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const allCars = upperCase + lowerCase + Number + symbol;

function genaratePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < lenth) {
        password += allCars[Math.floor(Math.random() * allCars.length)];
    }

    return password;
    
}

btn.addEventListener("click", () => {
    passwordBox.value = genaratePassword();
})

copy.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
})