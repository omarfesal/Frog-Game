// Enemies our player must avoid
var Enemy = function(xCooredinate , yCooredinate) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    this.x = xCooredinate;
    this.y = yCooredinate;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Player of the game
var Player = function(sprite, xCooredinate , yCooredinate) {
    this.x = xCooredinate;
    this.y = yCooredinate;
    this.sprite = sprite;
};

// inheret all methods of enemy to player
Player.prototype = Object.create(Enemy.prototype);

Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if(this.x == 0 ){return}
            this.x -= 100;
            console.log(this.x);
            break;
        case 'right':
            if(this.x == 400 ){return}
            this.x += 100;
            console.log(this.x);
            break;

        case 'up':
            if(this.y == -25 ){return}
            this.y -= 85;
            console.log(this.y);
            break;
            
        case 'down':
            if(this.y == 400 ){return}
            this.y += 85;
            console.log(this.y);
            break;
        default:
            break;
    }
    
}



let allEnemies = [new Enemy(0,60),
                  new Enemy(0,143),
                  new Enemy(0,225)];
let player = new Player("images/char-boy.png",200,400);





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
