function getComputerChoice() {
    let random_n = Math.round((Math.random()*(3-1)+1))
    let computerChoice = null
    if (random_n === 1) {
        computerChoice = "rock"
    } else if (random_n === 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice() {
    let choice = prompt("What is your next move?").toLowerCase()
    return choice
}

/* ˇˇˇ This function should run once, decide who won and the return the result of the game: 1: human won, 2: ai won, 3: draw */
function playRound() {
    let result = 0
    if (humanChoice === "rock" && computerChoice === "paper") {
        result = 1
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = 2
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = 2
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = 1
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = 1
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = 2
    } else {
        result = 3
    }

    return result

    /* ˇˇˇ This part should be separate, since the loop can iterate numbers according to how many rounds are played */
    console.log(`Your choice: ${humanChoice}, the computers choice: ${computerChoice}.`)
    console.log(`Points: ${humanPoint} : ${computerPoint}.`)
    if (computerPoint > humanPoint) {
        console.log("The computer won!")
    } else if (humanPoint > computerPoint) {
        console.log("You won!")
    } else {
        console.log("Its a draw!")
    }
}


let computerChoice = getComputerChoice() /* This way we have the human choice here too, not just in the fuction */
let humanChoice = getHumanChoice() /* This way we have the computer choice here too, not just in the fuction */


if (playRound() === 1) {

}
console.log(playRound())

