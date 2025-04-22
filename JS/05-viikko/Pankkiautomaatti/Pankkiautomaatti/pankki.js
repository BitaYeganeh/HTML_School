// initial balance
let balance = 0;
const correctPIN = "1234";

// DOM elements
const loginDiv = document.getElementById("login");
const bankingDiv = document.getElementById("banking");
const pinInput = document.getElementById("pinInput");
const pinButton = document.getElementById("pinButton");
const pinError = document.getElementById("pinError");

const balanceDisplay = document.getElementById("balance");
const depositInput = document.getElementById("depositInput");
const depositButton = document.getElementById("depositButton");
const withdrawInput = document.getElementById("withdrawInput");
const withdrawButton = document.getElementById("withdrawButton");
const alertMessage = document.getElementById("alert");



// Login functionality
pinButton.addEventListener("click", function () {
  if (pinInput.value === correctPIN) {
    pinError.textContent = "";
    checkBalance();
  } else {
    pinError.textContent = "Incorrect PIN. Try again!";
  }
});

// Check balance
function checkBalance() {
  balanceDisplay.textContent = balance.toFixed(2);
}

// Deposit
depositButton.addEventListener("click", function () {
  const amount = parseFloat(depositInput.value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    checkBalance();
    depositInput.value = "";
    alertMessage.style.display = "none";
  } else {
    alertMessage.textContent = "Please enter a valid number.";
    alertMessage.style.display = "block";
  }
});


function naytaviestin (teksti, onVirhe = true){
  const viesti =document.getElementById("viesti");
  viesti.textContent = teksti;
  viesti.style.coclor = onVirhe ? "red" : "green";
}

// Withdraw
withdrawButton.addEventListener("click", function () {
  const amount = parseFloat(withdrawInput.value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      checkBalance();
      withdrawInput.value = "";
      alertMessage.style.display = "none";
    } else {
      alertMessage.textContent = "Not enough balance!";
      alertMessage.style.display = "block";
    }
  } else {
    alertMessage.textContent = "Please enter a valid number.";
    alertMessage.style.display = "block";
  }
});