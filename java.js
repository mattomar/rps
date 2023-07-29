let playerScore = 0
let computerScore = 0
let playerChoice = null

function setPlayerChoice(choice) {
    playerChoice = choice
}


function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}



function Compaerchoices(playerChoice, computerChoice) {


    if (playerChoice === computerChoice) {
        return "a tie"
    }
    else if (
        playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        return "a win for you"
    }

    else if (
        computerChoice === 'rock' && playerChoice === 'scissors' ||
        computerChoice === 'paper' && playerChoice === 'rock' ||
        computerChoice === 'scissors' && playerChoice === 'paper'
    ) {
        return "a win for the computer"
    }


}





function playRound() {
    const computerChoice = getRandomChoice()
    const result = Compaerchoices(playerChoice, computerChoice)
    const resultElement = document.querySelector('.result')
    resultElement.textContent = `you chose ${playerChoice} and the computer chose ${computerChoice} so It's a ${result}`
    const scoreElement = document.querySelector('.score')


    if (result === "a win for the computer") {
        computerScore++
    }

    else if (result === "a win for you") {
        playerScore++
    }

    else if (result === "a tie") {

    }




    if (playerScore < 5 && computerScore < 5) {

        scoreElement.textContent = `the current score is ${computerScore} points for the computer and ${playerScore} points for you`

    }
    else {
        if (playerScore == 5) {
            resultElement.textContent = "you Won the game"
            scoreElement.textContent = `the current score is 0 points for the computer and 0 points for you`

        }

        if (computerScore == 5) {
            resultElement.textContent = "the computer won the game"
            scoreElement.textContent = `the current score is 0 points for the computer and 0 points for you`
        }
        resetResult()
    }
}



function resetResult() {
    playerScore = 0
    computerScore = 0
    playerChoice = null
    attachButtonEventListener
}





function attachButtonEventListener() {
    const buttons = document.querySelectorAll('.buttons button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.textContent.toLowerCase()
            setPlayerChoice(choice)
            playRound()
        })

    });

}


attachButtonEventListener()


