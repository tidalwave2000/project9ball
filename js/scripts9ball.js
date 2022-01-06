
const teamNumber1 = document.getElementById("teamNum").value;
const teamNumber2 = document.getElementById("teamNum2").value;
let playerNumber1 = document.getElementById("playerNum1").value;
let playerNumber2 = document.getElementById("playerNum2").value;
let playerNam1 = document.getElementById("playerName1").value;
let playerNam2 = document.getElementById("playerName2").value;
let playerRank1 = document.getElementById("playerSkill1").value;
let playerRank2 = document.getElementById("playerSkill2").value;
let match = 1;


function playerInfo() {
    
    alert("Player Information Saved");
    window.location.href = "lag9-ball.html";
}

function lag() {
    alert('this is the lag function');
    let wonLag = document.getElementById("playerNum");
    alert("Player Information Saved");
    window.location.href = "scoreSheet9-ball.html";
}

function scoreSheet() {
    alert('this is the scoresheet function');
    
}

function matchPoints() {
    alert('this is the match points function');
    //let match = document.getElementById("matchNum").value;
    let totalPointsP1 = document.getElementById("player1TP").value;
    //delete matchPointP1 and P2 inputs after creation of switch 
    let matchPointsP1 = document.getElementById("player1MP").value;
    let totalPointsP2 = document.getElementById("player2TP").value;
    let matchPointsP2 = document.getElementById("player2MP").value;
    let totalRunningP1 = 0;
    let totalRunningP2 = 0; 
    let match = 2;
    //Calulate matchPoints from Total Points
    //Using Switch Statement 
    
    totalRunningP1 = totalRunningP1 + matchPointsP1;
    totalRunningP2 = totalRunningP2 + matchPointsP2;
    
    if (match >= 5) {
        alert("this a total score redirect ");
        location.href="totalTeamScores9-ball.html";
    } else {
        alert("enter player's data redirect");
        location.href="index9-ball.html";
    }


}

function totalTeamScore() {
    alert("this is the total points function");

    
}

function endOfMatches() {

}
    
