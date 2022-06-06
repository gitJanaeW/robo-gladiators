// INITIALIZE PLAYER + ENEMIES
const playerName = window.prompt("What is your robo name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

var enemyNames = ["Mr. Roboto", "Cindi Mayweather", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// SKIP CHOICE
var skip = function(){
    playerMoney = playerMoney - 10;
}

// FIGHT CHOICE
// Round variable (for counting)
let roundNum = 1;

var fight = function(enemyName){
    window.alert("Welcome to Robo Galdiators!");

    // Prompting the use to pick fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    if(promptFight === "FIGHT" || promptFight === "fight"){
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
    }
    else if(promptFight === "SKIP" || promptFight === "skip"){
        var confirmSkip = window.confirm("Skipping costs 2 MP (money points). Are you sure?");
        if(confirmSkip){
            playerMoney = playerMoney - 2;
            window.alert(playerName + " has decided to skip this fight. " + playerMoney + "MP remaining.");
        }
    }
    else{
        fight();
    }

    // Game States
    // "WIN" - Player robot has defeated all enemy-robots

    //    * Fight all enemy-robots

    //    * Defeat each enemy-robot

    // "LOSE" - Player robot's health is zero or less

};

// fight();