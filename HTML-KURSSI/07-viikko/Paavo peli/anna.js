let statements = [];
let lieIndex = -1;
document.getElementById("inputForm").addEventListener("submit", function (e) {
  e.preventDefault();
// Get the statements
  statements = [
    document.getElementById("q1").value,
    document.getElementById("q2").value,
    document.getElementById("q3").value,
  ];
// Get the line index
  lieIndex = parseInt(
    document.querySelector('input[name="lie"]:checked').value
  );
  // Hide input, show guessing
  document.getElementById("inputPhase").classList.add("hidden");
  document.getElementById("guessPhase").classList.remove("hidden");
  // Show statements to player 2
  const guessContainer = document.getElementById("guessStatements");
  guessContainer.innerHTML = "";
  statements.forEach((stmt, index) => {
    guessContainer.innerHTML += `
          <p>
            <label>
              <input type="radio" name="guess" value="${index}" required />
              ${stmt}
            </label>
          </p>`;
  });
});
document.getElementById("guessForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const guess = parseInt(
    document.querySelector('input[name="guess"]:checked').value
  );
  const resultText = document.getElementById("result");
  if (guess === lieIndex) {
    resultText.textContent = ":white_check_mark: Oikein! Arvasit valheen.";
  } else {
    resultText.textContent = `:x:Väärin. Valhe oli: "${statements[lieIndex]}"`;
  }
});