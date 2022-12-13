// Тоглогчийн ээлж хадгалах хувьсагч, 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны оноо(1-6)
var dice = 2;

document.querySelector(".dice").style.display = "none";
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
