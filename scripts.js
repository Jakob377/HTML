const rollDice = () => {
    let diceNumber = Math.floor(Math.random() * 6) + 1
    let dice = `img/dice${diceNumber}.png`
    document.getElementById("dice").src = dice
    if (diceNumber == 1) {
        document.getElementById("score").textContent = 0
        alert("YOU LOSE")
    }
    playerScore = parseInt(document.getElementById("score").textContent) + diceNumber;
    document.getElementById("score").textContent = playerScore;
    console.log(diceNumber)
    if (playerScore >= 20) {
        alert("You win well done")
    document.getElementById("score").textContent = 0
    }
 }