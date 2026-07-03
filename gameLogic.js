function getComputerChoice() {
    let random_n = Math.round((Math.random()*(3-1)+1))
    if (random_n === 1) {
        console.log("Rock")
    } else if (random_n === 2) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}
getComputerChoice()