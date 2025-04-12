let choices = document.querySelectorAll('.choice');
let result = document.getElementById('result');
let playerValue = document.getElementById('player-score');
let computerValue = document.getElementById('computer-score');
let playerscore = 0;
let computerscore = 0;
window.onload = (event) => {
    playerValue.innerHTML = playerscore;
    computerValue.innerHTML = computerscore;
}
for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener('click',()=> 
{
    let userChoice = choices[i].id;
    let computerSelectedvalue = getComputerChoices();
    let winner = checkwinner(userChoice, computerSelectedvalue);
    result.innerHTML = `${winner} wins`;
    // console.log(`${userChoice} ${computerSelectedvalue}`);
    // if(userChoice == computerSelectedvalue)
    // {
    //     console.log("DRAW");[]
    // }
});
}
function getComputerChoices(){
    let getcomputerChoices = ['rock','paper','scissor'];
    let selectedIndex = parseInt(Math.random() * 3);
    return getcomputerChoices[selectedIndex];
}
function checkwinner(player, computer)
{
    console.log(`${player} ||||||| ${computer}`);
    if(player == computer)
        {
            return 'draw';
        }
        else if(player == 'rock' && computer == 'scissors' || player == 'paper' && computer =='rock'||
            player == 'scissors' && computer == 'paper')
            {
                playerValue.innerHTML = ++playerscore;
                return 'player';
            }
            else{
                computerValue.innerHTML = ++computerscore;
                return 'computer';
            }
}