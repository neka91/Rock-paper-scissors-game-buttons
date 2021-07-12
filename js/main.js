let output = document.getElementById("output");
let html = "";

let usersChoice = "";
let compChoice = "";

let win = false;
let userScore = 0;
let compScore = 0;

let clickedBtn = false;

function start() {
    document.getElementById("picHidden").style.display = "none";
    document.getElementById("flex-container").style.display = "flex";
    document.getElementById("p").style.display = "none";
    clickedBtn = false;

    compChoice = Math.random();
    if (compChoice < 0.34) {
        compChoice = "Rock";
    } else if (compChoice < 0.67) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    updateBtn();
}

function rock() {
    if (clickedBtn == false) {
        usersChoice = "Rock";
        playGame();
        displayOutput();
        clickedBtn = true;
    } else {
        alert("To play once again, press 'Try again' button.");
    }
}

function paper() {
    if (clickedBtn == false) {
        usersChoice = "Paper";
        playGame();
        displayOutput();
        clickedBtn = true;
    } else {
        alert("To play once again, press 'Try again' button.");
    }
}

function scissors() {
    if (clickedBtn == false) {
        usersChoice = "Scissors";
        playGame();
        displayOutput();
        clickedBtn = true;
    } else {
        alert("To play once again, press 'Try again' button.");
    }
}

function playGame() {
    let uc = usersChoice.charAt(0);
    let cc = compChoice.charAt(0);
    if (uc == cc) {
        html = "It is a tie!";
    } else if ((uc == "P" && cc == "R") || (uc == "S" && cc == "P") || (uc == "R" && cc == "S")) {
        win = true;
        html = "Congratulations! You have won!";
        userScore += 1;
    } else {
        win = false;
        html = "You have lost. Try again!";
        compScore += 1;
    }
    html = html.toUpperCase().fontcolor("orange").fontsize("5px");
}

function updateBtn() {
    let btn = document.getElementById("btn");
    btn.value = "Try again";
}

function displayOutput() {
    output.innerHTML = html + "<br>" + "You vs Computer<br>" + usersChoice + " vs " + compChoice + "<br>" +
        "Total score is " + userScore + " : " + compScore;
}
