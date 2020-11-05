const form = document.querySelector("form");
const questionCards = document.querySelectorAll(".card-question")
const resultCard = document.querySelector(".results")

const displayScore = (score) => {
  let text = "";

  if (score < 5) {
    text = "<h3>Peux mieux faire</h3><p>Retenez une autre réponse dans les cases rouges, puis re-validez !</p>"
  } else {
    text = "<h3>Félicitation ! </h3>"
  }
  resultCard.innerHTML = `${text} <p>${score}/5</p>`

}

const checkAnswer = (event) => {
  event.preventDefault();
  const correctAnswers = ["Bonaparte", "4 juillet 1776", "395 ap J-C", "Ljubljana", "4.9 Millions"];
  let score = 0;

  questionCards.forEach((card, i) => {
    if (card.querySelectorAll('input[type=radio]:checked')[0]) {
     const answer = card.querySelectorAll('input[type=radio]:checked')[0].labels[0].innerText;
     if (answer === correctAnswers[i]) {
      score += 1
      card.classList.remove("false");
      card.classList.add("true");
     } else {
      card.classList.remove("true");
      card.classList.add("false");
     }
    }
  });
  displayScore(score);
};




form.addEventListener("submit", checkAnswer);
