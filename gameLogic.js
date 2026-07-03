function getComputerChoice() {
    /*      Will have to return the choice as a parameter       */
    let random_n = Math.round((Math.random()*(3-1)+1))
    if (random_n === 1) {
        console.log("Rock")
    } else if (random_n === 2) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}
function getHumanChoice() {
    let choice = prompt("What is your next move?")
    console.log(choice)
}

getComputerChoice()
getHumanChoice()