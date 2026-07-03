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
    let humanChoice = prompt("What is your next move?").toLowerCase()
    return humanChoice
}


function playRound(humanChoice, computerChoice) {
    let result = 0
    if (humanChoice === "rock" && computerChoice === "paper") {
        result = 2
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = 1
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = 1
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = 2
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = 2
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = 1
    }

    return result    
}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i<5; i++ ) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        let result = playRound(humanChoice, computerChoice)

        if (result === 1) {
            humanScore += 1
        } else if (result === 2) {
            computerScore += 1
        }

        console.log(`Your choice: ${humanChoice}, the computers choice: ${computerChoice}.`)
        console.log(`Points: ${humanScore} : ${computerScore}.`)
    }


    if (computerScore > humanScore) {
        console.log("The computer won!")
    } else if (humanScore > computerScore) {
        console.log("You won!")
    } else {
        console.log("Its a draw!")
    }
}


playGame()

