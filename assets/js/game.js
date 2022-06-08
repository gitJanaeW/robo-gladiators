// INITIALIZE PLAYER + ENEMIES
const playerName = window.prompt("What is your robo name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

var enemyNames = ["Mr. Roboto", "Cindi Mayweather", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var newFight = 1;

// Round variable (for counting)
let roundNum = 1;

// FIGHT
var fight = function(enemyName){    
    while(enemyHealth > 0 && playerHealth > 0){

        // Prompting the use to pick fight or skip
        if(newFight){
            window.alert("Round " + roundNum + ": " + playerName + " vs. " + enemyName + "... BEGIN!");
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this round of battle? Enter 'FIGHT' or 'SKIP' to choose.");
            newFight--;
        }else{
            var promptFight = window.prompt("FIGHT on, or SKIP this round?")
        }
    
        // QUESTION: Why does the skip code have to be put above the fight code in order for the "break;" to work?
        if(promptFight === "SKIP" || promptFight === "skip"){
            var confirmSkip = window.confirm("Skipping costs 10MP (money points). Are you sure?");
            
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. " + playerMoney + "MP remaining.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        
        // ROUND START        
        // Player attack enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            enemyName + " is still standing with " + enemyHealth + " HP remaining."
        );

        // Check for enemy death:
        if (enemyHealth <= 0){
            window.alert(enemyName + " has signed off! You've won 20MP (money points)");
            playerMoney = playerMoney + 20;
            break;
        }else{
            window.alert(playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " HP remaining.");
        }

        // Enemy attacks player
        playerHealth = playerHealth - enemyAttack;
        console.log(
            playerName  + " is still standing with " + playerHealth + " HP remaining."
        );

        // Check for player death:
        if(playerHealth <= 0){
            window.alert(playerName + " has signed off!");
            break;
        }else{
            window.alert(enemyName + " attacked " + playerName + "! " + playerName + " now has " + playerHealth + " HP remaining.");
        } 
    }
    roundNum++;
};


const startGame = function(){
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    // Why reset money...?
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++){
        if(playerHealth > 0){
            window.alert("Welcome to Robo Galdiators!");
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            newFight = 1;
            fight(pickedEnemyName);

            // Why do we need to check player health if the parent if statement already checks if the player is alive?
            if(playerHealth > 0 && i < enemyNames.length - 1){
                var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");

                if(storeConfirm){
                    shop();
                }
            }
        }else{
            window.alert("You have lost your robot in battle! GAME OVER.");
            break;
        }
    }
    endGame();
};

// End pf the entire game
const endGame = function(){
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.")
    }
    
    const playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        // restart game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// Shop function
var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', UPGRADE', 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt){
        // Because there's no break in "refill", it falls through to the conditions that are applied to "REFILL". You can add as many conditions as you want
        case "refill":
        case "REFILL":
            if(playerMoney < 7){
                window.alert("You do not have enough money to purchase this item. Player money: " + playerMoney + ".");
            }else{
                window.alert("Refilling player's health by 20 for 7MP (money points).");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if(playerMoney < 7){
                window.alert("You do not have enough money to purchase this item. Player money: " + playerMoney + ".");
            }else{
                window.alert("Upgrading player's attack by 6 for 7MP (money points).");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store...");
            break;
        default:
            window.alert("You did not pick a valid option. Please try again.");
            shop();
            break;
    }
};

// Start first game when page loads
startGame();

