function playGame(userChoice) {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if(randomNumber > 0 && randomNumber <= 1){
        computerChoice = 'bat';
    } else if(randomNumber > 1 && randomNumber <= 2){
        computerChoice = 'ball';
    } else {
        computerChoice = 'stump';
    }


    let resultText = `You chose ${userChoice}. Computer chose ${computerChoice}. `;

    if(userChoice === computerChoice){
        resultText += "It's a tie!";
    } else if(
        (userChoice === 'bat' && computerChoice === 'ball') ||
        (userChoice === 'ball' && computerChoice === 'stump') ||
        (userChoice === 'stump' && computerChoice === 'bat')
    ){
        resultText += "You won!! 🎉";
    } else {
        resultText += "Computer won!! 😢";
    }
    document.getElementById('result').innerText = resultText;
}
