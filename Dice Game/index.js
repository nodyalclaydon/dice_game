let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const activeDice = document.getElementsByClassName("active")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const stayBtn = document.getElementById("stayBtn")
const diceIcon = document.getElementById("dice-icon")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Roll Dice Button Stuff */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Dice.classList.add("shake-dice")
        player2Dice.classList.remove("shake-dice")
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        message.textContent = "Player 1 rolled " + randomNumber + "!"
        diceRight = setTimeout(function(){
            if (player1Score < 21) {
                player1Dice.classList.remove("active")
                player2Dice.classList.add("active")
                diceIcon.classList.add("dice-icon-right")
                diceIcon.classList.remove("dice-icon-left")
                message.textContent = "Player 2 Turn"
            }
        }, 1500)
    } else {
        player2Dice.classList.add("shake-dice")
        player1Dice.classList.remove("shake-dice")
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        message.textContent = "Player 2 rolled " + randomNumber + "!"

        diceLeft = setTimeout(function(){
            if (player2Score < 21) {
                player2Dice.classList.remove("active")
                player1Dice.classList.add("active")
                diceIcon.classList.remove("dice-icon-right")
                diceIcon.classList.add("dice-icon-left")
                message.textContent = "Player 1 Turn"
            }
        }, 1500)

    }
    
    if (player1Score > 21) {
        message.textContent = "Player 1 Busts!!! 😭"
        showResetButton()

    }  else if (player2Score > 21) {
        message.textContent = "Player 2 Busts!!! 😭"
        showResetButton()
    }

    if (player1Score === 21) {
        message.textContent = "Player 1 Wins!!! 🥳"
        showResetButton()
    } else if (player2Score === 21) {
        message.textContent = "Player 2 Wins!!! 🥳"
        showResetButton()
    }
    player1Turn = !player1Turn
})

// ------- STAY BUTTON STUFF ---------

stayBtn.addEventListener("click", function(){
    if (player1Turn) {
        message.textContent = "Player 1 Stays!"
        diceRight = setTimeout(function() {
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            diceIcon.classList.add("dice-icon-right")
            diceIcon.classList.remove("dice-icon-left")
            message.textContent = "Player 2 Turn"
        }, 1500)
    }

    player1Turn = false
})


// ----- RESET BUTTON STUFF ------
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    diceIcon.classList.remove("dice-icon-right")
    diceIcon.classList.add("dice-icon-left")
}