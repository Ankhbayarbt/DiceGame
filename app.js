var activePlayer = 0;
var isGameOver = false;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны оноо(1-6)
var diceNumber;
var diceDom = document.querySelector(".dice");
newGame();

function newGame() {
  isGameOver = false;
  document.getElementById("name-" + activePlayer).textContent =
    "player " + (activePlayer + 1);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  diceDom.style.display = "none";
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

// Шинэ тоглолт эхлүүлэх
document.querySelector(".btn-new").addEventListener("click", newGame);

// Шоо шидэх
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver) return;
  diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = diceNumber + ".png";
  if (diceNumber > 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchPlayer();
  }
});

// HOLD дарах
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver) return;
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 50) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    isGameOver = true;
  } else {
    switchPlayer();
  }
});

// Тоглогч солих
function switchPlayer() {
  if (isGameOver) return;
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  diceDom.style.display = "none";
}
