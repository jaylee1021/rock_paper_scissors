// picks one choice from choices array randomly
function computerChooses() {
    return Math.floor(Math.random() * choices.length);
}

let playerTieCount = 0;
let playerWinCount = 0;
let playerLoseCount = 0;
let totalCount = 0;


// compares computer choice with player choice
function compareChoices(computer, player) {
    let output = "";

    if (computer === player) {
        playerTieCount = playerTieCount + 1;
        document.getElementById("box").innerText = "It's a Tie!";
        document.getElementById("box").style.backgroundColor = "Yellow";
    } else if (computer === choices[0]) {
        if (player === choices[1]) {
            playerWinCount = playerWinCount + 1;
            document.getElementById("box").innerText = "You Win!";
            document.getElementById("box").style.backgroundColor = "Green";
        } else if (player === choices[2]) {
            playerLoseCount = playerLoseCount + 1;
            document.getElementById("box").innerText = "You Lose!";
            document.getElementById("box").style.backgroundColor = "Red";
        }
    } else if (computer === choices[1]) {
        if (player === choices[0]) {
            playerLoseCount = playerLoseCount + 1;
            document.getElementById("box").innerText = "You Lose!";
            document.getElementById("box").style.backgroundColor = "Red";
        } else if (player === choices[2]) {
            playerWinCount = playerWinCount + 1;
            document.ggetElementById("box").innerText = "You Win!";
            document.getElementById("box").style.backgroundColor = "Green";
        }
    } else if (computer === choices[2]) {
        if (player === choices[0]) {
            playerWinCount = playerWinCount + 1;
            document.getElementById("box").innerText = "You Win!";
            document.getElementById("box").style.backgroundColor = "Green";

        } else if (player === choices[1]) {
            playerLoseCount = playerLoseCount + 1;
            document.getElementById("box").innerText = "You Lose!";
            document.getElementById("box").style.backgroundColor = "Red";
        }
    }
    // add tie, win, and lose counts to get total game played
    totalCount = playerTieCount + playerWinCount + playerLoseCount;

    // outputs how many games played so far
    // document.getElementById("gameCount").innerHTML =
    //     "You've played " + totalCount + " games so far";
    return output;
}

// when Lapis button is clicked, sets playerChoice to Lapis
function buttonLapis() {
    player.playerChoice = "Rock";
    printResult();
}

// when Papyrys button is clicked, sets playerChoice to Papyrus
function buttonPapyrus() {
    player.playerChoice = "Paper";
    printResult();
}
// when Scalpellus button is clicked, sets playerChoice to Scalpellus
function buttonScalpellus() {
    player.playerChoice = "Scissors";
    printResult();
}

//
function printResult() {
    // picks one choice from choices array randomly by using function computerChooses
    computer.computerChoice = choices[computerChooses()];
    // compares between computerChoice and playerChoice by using function compareChoices
    compareChoices(computer.computerChoice, player.playerChoice);
    // outputs results from above line
    document.getElementById("result").innerText = "";
    document.getElementById("player-win-count").innerText = playerWinCount;
    document.getElementById("player-lose-count").innerText = playerLoseCount;
    document.getElementById("player-tie-count").innerText = playerTieCount;
    document.getElementById("player-choice").innerText = player.playerChoice;
    document.getElementById("computer-choice").innerText = computer.computerChoice;

}

// choices for computer to choose from
const choices = ["Rock", "Paper", "Scissors"];

// computer's initial value
const computer = {
    computerChoice: null
};

// player's initial value
const player = {
    playerChoice: null
};

// when scalpellus button is clicked, function buttonLapis runs
document.getElementById("rock").addEventListener("click", buttonLapis);

// when scalpellus button is clicked, function buttonPapyrus runs
document
    .getElementById("paper")
    .addEventListener("click", buttonPapyrus);

// when scalpellus button is clicked, function buttonScalpellus runs
document
    .getElementById("scissors")
    .addEventListener("click", buttonScalpellus);

// When "Reset" button is clicked, counts go to 0 and result disappears
document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("result").innerText = "";
    playerTieCount = 0;
    playerWinCount = 0;
    playerLoseCount = 0;
    totalCount = 0;
    document.getElementById("player-win").innerHTML = "";
    document.getElementById("player-lose").innerHTML = "";
    document.getElementById("player-tie").innerHTML = "";
    document.getElementById("gameCount").innerHTML = "";
    document.getElementById("player-win-count").innerHTML = "0";
    document.getElementById("player-lose-count").innerHTML = "0";
    document.getElementById("player-tie-count").innerHTML = "0";
    document.getElementById("player-choice").innerText = "";
    document.getElementById("computer-choice").innerText = "";
    document.getElementById("result2").innerText = "";
    document.getElementById("box").innerText = "?";
    document.getElementById("box").style.backgroundColor = "White";
});

// when "View Final Result" button is clicked, win count, lose count, and tie count appears
document
    .getElementById("final-result-button")
    .addEventListener("click", function () {
        document.getElementById("player-win").innerText =
            "You've won " + playerWinCount + " time(s)";
        document.getElementById("player-lose").innerText =
            "You've lost " + playerLoseCount + " time(s)";
        document.getElementById("player-tie").innerText =
            "You've tied " + playerTieCount + " time(s)";
    });




