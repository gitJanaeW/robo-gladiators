const playerName = window.prompt("What is your robo name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

let roundNum = 1;

var fight = function(){
    window.alert("Welcome to Robo Galdiators!");
    window.alert("Round " + roundNum + ": " + playerName + " vs. " + enemyName + "... BEGIN!");

    // Player attack enemy + health (HP) log
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " HP remaining.");

    // Check for enemy death:
    if (enemyHealth <= 0){
        window.alert(enemyName + " has signed off!");
    }
    else{
        window.alert(enemyName + " is still standing with " + enemyHealth + " HP remaining.");
    }

    // Enemy attacks player + health (HP) log
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + "! " + playerName + " now has " + playerHealth + " HP remaining.");

    if(playerHealth <= 0){
        window.alert(playerName + " has signed off!");
    }
    else{
        window.alert(playerName  + " is still standing with " + playerHealth + " HP remaining.");
    }

};

fight();
