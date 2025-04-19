const correctPIN = "1234";
let balance = 2000;

const pinInput = document.getElementById("pinInput");
const pinButton = document.getElementById("pinButton");
const pinError = document.getElementById("pinError");
const banking = document.getElementById("banking");

const balanceDisplay = document.getElementById("balance");
const depositInput = document.getElementById("depositInput");
const depositButton = document.getElementById("depositButton");

const withdrawInput = document.getElementById("withdrawInput");
const withdrawButton = document.getElementById("withdrawButton");
const alertMessage = document.getElementById("alert");

// Hide banking section at start
banking.style.display = "none";

// Login
pinButton.addEventListener("click", () => {
  if (pinInput.value === correctPIN) {
    banking.style.display = "block";
    pinError.textContent = "";
  } else {
    pinError.textContent = "Wrong PIN!";
  }
});

// Deposit
depositButton.addEventListener("click", () => {
  const amount = parseFloat(depositInput.value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    balanceDisplay.textContent = balance.toFixed(2);
    depositInput.value = "";
  }
});

// Withdraw
withdrawButton.addEventListener("click", () => {
  const amount = parseFloat(withdrawInput.value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      balanceDisplay.textContent = balance.toFixed(2);
      alertMessage.style.display = "none";
      withdrawInput.value = "";
    } else {
      alertMessage.style.display = "block";
    }
  }
});