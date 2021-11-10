var playerMove = ""
var compMove = ""
playerScore = 0
compScore = 0

function compChoice(){
    var choice = Math.floor(Math.random()*3) + 1;
    console.log(choice)
    if (choice === 1) {
        compMove = "rock"
    }
    else if (choice === 2) {
        compMove = "paper"
    }
    else {
        compMove = "scissors"
    }
    console.log(`Computer move is ${compMove}`)
}

function checkWinner() {
    if (playerMove === "rock" && compMove === "rock"){

    }
    else if (playerMove === "rock" && compMove === "scissors") {
        playerScore += 1
        $("#p-score").text(`${playerScore}`)
    }
    else if (playerMove === "rock" && compMove === "paper"){
        compScore += 1
        $("#c-score").text(`${compScore}`)
    }
    else if (playerMove === "paper" && compMove === "rock"){
        playerScore += 1
        $("#p-score").text(`${playerScore}`)
    }
    else if (playerMove === "paper" && compMove === "paper"){
        
    }
    else if (playerMove === "paper" && compMove === "scissors"){
        compScore += 1
        $("#c-score").text(`${compScore}`)
    }
    else if (playerMove === "scissors" && compMove === "rock"){
        compScore += 1
        $("#c-score").text(`${compScore}`)
    }
    else if (playerMove === "scissors" && compMove === "paper"){
        playerScore += 1
        $("#p-score").text(`${playerScore}`)
    }
    else if (playerMove === "scissors" && compMove === "scissors"){
        
    }
    $(".playerChoice").removeClass("playerChoice")
}



$(".emoji-big").click(function(){
     $(this).addClass("playerChoice")
     if($("#rock").hasClass("playerChoice")) {
         playerMove = "rock"
     }
     else if($("#paper").hasClass("playerChoice")) {
        playerMove = "paper"
    }
     else {
        playerMove = "scissors"
    }
     console.log(`Player move is ${playerMove}`)
     compChoice()
     checkWinner()
})