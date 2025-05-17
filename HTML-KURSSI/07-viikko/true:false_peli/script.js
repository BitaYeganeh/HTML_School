
// Listen for the Save Claims button click

document.getElementById("saveClaimsBtn").addEventListener("click", () => {
    const claim1 = document.getElementById("claim1").value.trim();
    const claim2 = document.getElementById("claim2").value.trim();
    const claim3 = document.getElementById("claim3").value.trim();
  
    const truth1 = document.querySelector('input[name="truth1"]:checked');
    const truth2 = document.querySelector('input[name="truth2"]:checked');
    const truth3 = document.querySelector('input[name="truth3"]:checked');
  

      // Check if all claims are entered and truth/false are selected

    if (!claim1 || !claim2 || !claim3 || !truth1 || !truth2 || !truth3) {
      alert("Please fill all claims and select true/false for each.");
      return;
    }
  

      // Validate only 1 false claim


    const falseCount = [truth1, truth2, truth3].filter(t => t.value === "false").length;
    if (falseCount !== 1) {
      alert("Player 1 must select exactly ONE false claim.");
      return;
    }
    // Save claims and truth values in session storage

    sessionStorage.setItem("claim1", claim1);
    sessionStorage.setItem("claim2", claim2);
    sessionStorage.setItem("claim3", claim3);
    sessionStorage.setItem("truth1", truth1.value);
    sessionStorage.setItem("truth2", truth2.value);
    sessionStorage.setItem("truth3", truth3.value);

      // Hide Player 1 form and show Player 2 guessing form
  document.getElementById("player1Form").classList.add("hidden");
  const guessClaims = document.getElementById("guessClaims");
  guessClaims.innerHTML = `
    <label><input type="radio" name="guess" value="1"> ${claim1}</label><br>
    <label><input type="radio" name="guess" value="2"> ${claim2}</label><br>
    <label><input type="radio" name="guess" value="3"> ${claim3}</label><br><br>
  `;

  alert("Claims saved! Player 2, make your guess.");
  document.getElementById("player2Form").classList.remove("hidden");
});
  
// Reveal the result after Player 2 guesses
document.getElementById("revealBtn").addEventListener("click", () => {
    const guess = document.querySelector('input[name="guess"]:checked');
    if (!guess) {
      alert("Player 2 must select one claim as the lie.");
      return;
    }
  
    const guessedIndex = parseInt(guess.value); // 1, 2, or 3
    const truths = [
      sessionStorage.getItem("truth1"),
      sessionStorage.getItem("truth2"),
      sessionStorage.getItem("truth3")
    ];
    const claims = [
      sessionStorage.getItem("claim1"),
      sessionStorage.getItem("claim2"),
      sessionStorage.getItem("claim3")
    ];
  
    const actualLieIndex = truths.findIndex(t => t === "false") + 1;
  
    const result = document.getElementById("result");
    if (guessedIndex === actualLieIndex) {
      result.innerHTML = `<p class="true">✅ Correct! Claim ${guessedIndex} was the lie.</p>`;
    } else {
      result.innerHTML = `<p class="false">❌ Nope! Claim ${actualLieIndex} was actually the lie.</p>`;
    }
  });









