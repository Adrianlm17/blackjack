var totalScore = 0;

document.write("<p> TOTAL SCORE: " + totalScore + "</p>")

// ------- PLANT -------
function stand(){
    checkScore();
    if (totalScore <18) {

        // YOU'RE A CHICKEN
        document.getElementById("finalizado").innerText="FINISHED! You're a chicken!";

    } else {
        
        // YOU WIN!
        document.getElementById("finalizado").innerText="HAS GANADO!";
    }
}

// ------- LAUNCH AGAIN -------
function drop(){
    newThrow();

    if (!checkScore()) {
        
        document.getElementById("puntuacion").innerText="Your score is: " + totalScore;
    }
    
}

function newThrow(){

    score = Math.floor(Math.random() * 7);
    document.getElementById("roll").innerText="You have taken out a: " + score;
    console.log(score);

    totalScore += score;
    console.log(totalScore);
}


// CHECK SCORE
function checkScore() {
    
    if (totalScore > 21) {
        
        // YOU LOSE!
        document.getElementById("finalizado").innerText="HAS PERDIDO!";
        return true;

    } else {
        return false;
    }
}


// ------- RESTART GAME -------
function restart(){

    location.reload()

}
