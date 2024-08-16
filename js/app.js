const navBtn = document.getElementById("resource-nav-btn");
const navbar = document.getElementById("resource-navbar");
const navClose = document.getElementById("resource-nav-close");

navBtn.addEventListener("click", () => { navbar.classList.add("resource-showNav") });

navClose.addEventListener("click", () => { navbar.classList.remove("resource-showNav") });


//begin- main menu navigation (right side hamburger menu)
const mainNavBtn = document.getElementById("main-nav-btn");
const mainNavbar = document.getElementById("main-navbar");
const mainNavClose = document.getElementById("main-nav-close");

mainNavBtn.addEventListener("click", () => { mainNavbar.classList.add("main-showNav") });

mainNavClose.addEventListener("click", () => { mainNavbar.classList.remove("main-showNav") });
//end - main menu navigation (right side hamburger menu)


//assignment qa begin
function revealAnswer() {
    var answer = document.getElementById("answer");
    if (answer.style.display === "none") {
      answer.style.display = "block"; // Show answer
    } else {
      answer.style.display = "none"; // Hide answer
    }
  }

  function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    var correctAnswer = "A"; // Correct answer is option A
    var resultMessage = document.getElementById("result-message");
    if (selectedAnswer === correctAnswer) {
      resultMessage.innerText = "Correct!";
      resultMessage.classList.remove("incorrect");
      resultMessage.classList.add("correct");
    } else {
      resultMessage.innerText = "Incorrect!";
      resultMessage.classList.remove("correct");
      resultMessage.classList.add("incorrect");
    }
  }
  //assignment qa end