// Random number RANGE
const randomNumber = function(min, max){
    if(min > max){
        console.log("ERROR: Min number is bigger than max num.");
    }
    else if(min === max){
        console.log("ERROR: Min and max numbers are equal.");
    }
    else{
        break;
    }
    // LONG EXPLANATION OF RANDOMIZER
    // Math.floor will round down whatever the value of Math.random is
    // Whatever value is * by random() will be the max value because:
        // The max value here is the max value minus the min value (since min value will be added back on at the end of the line of code)
        // + 1 is added (since the Math.random will never equal it's highest number. max won't be possible if there's no +1)
    // The min value is on the outside of the Math methods. This ensures that even with a randomizer value of 0, the min is still achievable
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

// INITIALIZE PLAYER + ENEMIES

const player = {
    name: window.prompt("What is your robo name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        // The following line the shorthand of this.health = this.heal + 20;
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function(){
        this.attack += 6;
        this.money -= 7;
    }
}


const enemies = [
    {
        name: "Roboto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }

];

var pickedEnemyObj.health randomNumber(40, 60);

var newFight = 1;

// Round variable (for counting)
let roundNum = 1;

// FIGHT
var fight = function(enemies){    
    while(enemies.health > 0 && player.health > 0){

        // Prompting the use to pick fight or skip
        if(newFight){
            window.alert("Round " + roundNum + ": " + player.name + " vs. " + enemies.name + "... BEGIN!");
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this round of battle? Enter 'FIGHT' or 'SKIP' to choose.");
            newFight--;
        }else{
            var promptFight = window.prompt("FIGHT on, or SKIP this round?")
        }
    
        // QUESTION: Why does the skip code have to be put above the fight code in order for the "break;" to work?
        if(promptFight === "SKIP" || promptFight === "skip"){
            var confirmSkip = window.confirm("Skipping costs 10MP (money points). Are you sure?");
            
            if(confirmSkip){
                window.alert(player.name + " has decided to skip this fight. " + player.money + "MP remaining.");
                player.money = Math.max(0, player.money - 10);
                console.log("player.money", player.money);
                break;
            }
        }

        // ROUND START        
        // Player attack enemy
        var damage = randomNumber(player.attack - 3, player.attack);
        // Ensures that player health never drops below 0
        enemies.health = Math.max(0, enemies.health - damage);
        console.log(
            enemies.name + " is still standing with " + enemies.health + " HP remaining."
        );

        // Check for enemy death:
        if (enemies.health <= 0){
            window.alert(enemies.name + " has signed off! You've won 20MP (money points)");
            break;
        }else{
            window.alert(player.name + " attacked " + enemies.name + "! " + enemies.name + " now has " + enemies.health + " HP remaining.");
        }

        // Enemy attacks player
        var damage = randomNumber(enemies.health - 3, enemies.health);
        // enemies.health = randomNumber(0, enemies.health - damage); <<<< IF I KEPT THIS, WOULD THAT MEAN THE ENEMY CAN "MISS" AN ATTACK, DOING NO DAMAGE?
        enemies.health = randomNumber(0, enemies.health - damage);
        console.log(
            player.name  + " is still standing with " + player.health + " HP remaining."
        );

        // Check for player death:
        if(player.health <= 0){
            window.alert(player.name + " has signed off!");
            break;
        }else{
            window.alert(enemies.name + " attacked " + player.name + "! " + player.name + " now has " + player.health + " HP remaining.");
        } 
    }
    roundNum++;
};


const startGame = function(){
    // Reset player stats
    player.reset();

    for(var i = 0; i < enemies.length; i++){
        if(player.health > 0){
            window.alert("Welcome to Robo Galdiators!");
            const pickedEnemyObj = enemies[i];
            enemies.health = 50;
            newFight = 1;
            fight(pickedEnemyObj);

            // Why do we need to check player health if the parent if statement already checks if the player is alive?
            if(playerHealth > 0 && i < enemies.length - 1){
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
        window.alert("Great job, you've survived the game! You now have a score of " + player.money + ".");
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
            player.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            player.upgradeAttack();
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

