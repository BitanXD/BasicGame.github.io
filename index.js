let resultBox = document.getElementById("game-result");
let scoreBox = document.getElementById("game-score");
var userPoints = 0;
var computerPoints = 0;
for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
  let activeButton = document.querySelectorAll(".box")[i];
  // set(activeButton);
  document.querySelectorAll(".box")[i].addEventListener("click", function () {
    document.querySelectorAll(".box")[i].classList.add("on-click");
    setTimeout(() => {
      document.querySelectorAll(".box")[i].classList.remove("on-click");
    }, 200);
  });
}

let clickItems = Array.from(document.getElementsByClassName("box"));
// console.log(clickItems);
clickItems.forEach((elements) => {
  elements.addEventListener("click", (e) => {
    // console.log(elements.id);
    resultBox.style.opacity = 1;
    scoreBox.style.opacity = 1;
    document.getElementById("user").setAttribute("src", `${elements.id}.webp`);
    computerChoice(elements.id);
    // CheckGame(elements.id);
  });
});

// display the image accordingly
// console.log(userChoice);
function computerChoice(choice) {
  const randomCompChoice = Math.floor(Math.random() * 3);
  const arr = ["stone", "paper", "scissor"];
  const randomChoiceMade = arr[randomCompChoice];
  // console.log(randomChoiceMade)
  document
    .getElementById("computer")
    .setAttribute("src", `${randomChoiceMade}.webp`);

  // game logic
 
  let resultHeading = document.getElementById("result-heading");
  let userScore = document.getElementById("user-score");
  let compScore = document.getElementById("comp-score");
    // console.log(choice == randomChoiceMade);
    if (choice == randomChoiceMade) {
      resultHeading.textContent = `Round Draw`;
    } 
    else if (choice == "stone" && randomChoiceMade == "paper") {
      computerPoints+=1;
      resultHeading.textContent = `User won!`;
      userScore.innerText = `User Score is ${userPoints}`;
      compScore.innerText = `Computer Score is ${computerPoints}`;
    }
    else if (choice == "stone" && randomChoiceMade == "scissor") {
      userPoints+=1;
      resultHeading.textContent = `User Won!`;
      userScore.innerText = `User Score is ${userPoints}`;
      compScore.innerText = `Computer Score is ${computerPoints}`;
    }
    else if (choice == "paper" && randomChoiceMade == "scissor") {
      computerPoints+=1;
      resultHeading.textContent = `Computer won!`;
      userScore.innerText = `User Score is ${userPoints}`;
      compScore.innerText = `Computer Score is ${computerPoints}`;
    }
    else if (choice == "scissor" && randomChoiceMade == "paper") {
      userPoints+=1;
      resultHeading.textContent = `Use Won!`;
      userScore.innerText = `User Score is ${userPoints}`;
      compScore.innerText = `Computer Score is ${computerPoints}`;
    }
    else if (choice == "paper" && randomChoiceMade == "stone") {
      userPoints+=1;
      resultHeading.textContent = `Computer Won!`;
      userScore.innerText = `User Score is ${userPoints}`;
      compScore.innerText = `Computer Score is ${computerPoints}`;
    }
  
}

function displayUserScore() {
  `USER SCORE IS ${userPoints}`;
}
function displayCompScore() {
  `USER SCORE IS ${computerPoints}`;
}
function displayDraw() {
  `Round Draw`;
}
