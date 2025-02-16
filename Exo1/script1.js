function ChooseDifficulty(){
    let difficulty;
    while(true){
        difficulty=prompt("Choose a Difficulty (Facile,Intermediaire,Difficile): ");
        if(["Facile","Difficile","Intermediaire","facile","difficile","intermediaire"].includes(difficulty))
            return difficulty;
        else
        alert("Choose the right Difficulty please!");
    }
}
function getRandomNumber(difficulty){
    let max;
    if (difficulty==="Facile"||difficulty==="facile") max=10;
    if (difficulty==="Intermediaire"||difficulty==="intermediaire") max=25;
    if (difficulty==="Difficile"||difficulty==="dificile") max=50;
    return Math.floor(Math.random() * max)+1;
}
function getMaxAttempts(difficulty){
    let Attempts;
    if (difficulty==="Facile"||difficulty==="facile") Attempts=5;
    if (difficulty==="Intermediaire"||difficulty==="intermediaire") Attempts=7;
    if (difficulty==="Difficile"||difficulty==="dificile") Attempts=10;
    return Attempts;  
}
function PlayGame(){
    let difficulty=ChooseDifficulty();
    let Attempts=getMaxAttempts(difficulty);
    let number=getRandomNumber(difficulty);
    alert("Game is Starting in 3..2..1.. GO!");
    while (Attempts>0){
        let guess=prompt(`Try and guess a number between 1 and ${difficulty === "facile" || difficulty==="Facile" ? 10 : difficulty === "intermediaire" ? 50 || difficulty==="Intermediaire" : 100}.\nyou have ${Attempts} Attempts left `);
        if (guess===null){
            alert("Game Canceled");
            break;}
        guess=Number(guess);
        if(isNaN(guess)){
            alert("please enter a number!");
            continue;}
        if (guess<number)
            alert("Higher!");
        if (guess>number)
            alert("Lower!");
        if (guess===number){
            alert("Lets Goooo You got it!");
            break;}
        Attempts--;
        }
        if (Attempts===0)
            alert("Oh noo You ran out of Attempts :( ");
        if(confirm("Would you like to play again?"))
            PlayGame();
        else{
            alert("Thank you for playing see you next time :) ");
            }


        


            
    }


PlayGame();
