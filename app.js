// Тоглогчийн ээлж хадгалах хувьсагч, 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны оноо(1-6)
var diceNumber = 2;
var diceDom = document.querySelector(".dice");

// Програм эхлэхэд бэлдэж байна.
diceDom.style.display = "none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

document.querySelector(".btn-roll").addEventListener("click", function () {
  diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = diceNumber + ".png";
  if (diceNumber > 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    diceDom.style.display = "none";
  }
});
