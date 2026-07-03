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

let humanPoint = 0
let computerPoint = 0

/*  This loop runs 5 times, asks for human input each time, generates computer input each time, compares them and gives a point
    to the one who beat the other in each round, if its a draw the loop jumps to the beginning  */
for (let i=0; i<5; i+=1) {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerPoint += 1
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanPoint += 1 
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanPoint += 1 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerPointPoint += 1 
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerPointPoint += 1 
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanPoint += 1 
    } else {
        continue
    }    
}
console.log(humanPoint)
console.log(computerPoint)

