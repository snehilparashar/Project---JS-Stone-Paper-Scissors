// We will be making two variable a) to track the user score b) to track the computer score

let userScore = 0;
let computerScore = 0;

// Now we have given the same class to the Choice in Rock paper and Scissors, so we will access those

const choices = document.querySelectorAll(".choice"); // ".choice is the class name"
const message = document.querySelector("#message"); // The message box is selected for making changes
const myscore = document.querySelector("#yourscore"); // Here we access the user score div 
const CompScore = document.querySelector("#computerscore"); // Here we access the comp score div

// We first want to make the computer make a random selection out of the three

const genCompChoice = () => {
    // Rock, paper , scissors
    const options = ["rock","paper","scissors"];
    const RandomIndex = Math.floor(Math.random()*3);
    return options[RandomIndex];
}


//Here is the function that we will make to play the final game

const playgame = (userChoice) => { // Here user choice is given as the function variable because computer would know what user has selected
    console.log("User choice =",userChoice)
    // The above generated random choice will be now given here as the computer choice
    const computerChoice = genCompChoice();
    console.log("Computer Choice =",computerChoice)

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // The computer choices would be paper and scissors as rock would have given draw
            // userWin = computerChoice === "paper" ? false : true;
            if (computerChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            // The computer choices would be rock and scissors as paper would have given draw
            // userWin = computerChoice === "scissors" ? false : true;
            if (computerChoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            // The user would be left with scissors and computer will have rock and paper
            if (computerChoice == "rock") {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        showWinner(userWin);
    }
    
}
// The user Win print function

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        myscore.innerText = userScore;
        console.log("You won!")
        message.innerText = "You Win!"
        message.style.backgroundColor = "green"
    } else {
        computerScore++;
        CompScore.innerText = computerScore;
        console.log("Computer Won!")
        message.innerText = "Computer Win!"
        message.style.backgroundColor = "Pink"
        message.style.color = "Black"
    }
}
// Now we will access each of the indivisual choice and add an event listener to it which will track each click

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playgame(userChoice);
    })
})

// Conditions
// Draw Game

const drawGame = () => {
    console.log("The game is draw")
    message.innerText = "Draw!"
    message.style.backgroundColor = "black"
    message.style.color = "white"
}