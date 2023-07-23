 const playerChoice = prompt("please choose rock, paper or scissors")


function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function Compaerchoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return `it's a tie`
    }
    else if (
        playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        return "You Won!"
    }
    else {
        return 'The computer Won'
    }
}


function play() {
    const computerChoice = getRandomChoice()
    const result = Compaerchoices(playerChoice, computerChoice)
    console.log(`you chose ${playerChoice} and the computer chose ${computerChoice} so the result is ${result}`)
}

play()
