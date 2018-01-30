var xe1 = 60,
    xe2 = 143,
    xe3 = 225;


// Enemies our player must avoid
var Enemy = function(xCooredinate , yCooredinate) {
    // Variables applied to each of our instances go here, we've provided one for you to get started
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    
    this.x = xCooredinate;
    this.y = yCooredinate;
    this.sprite = 'images/enemy-bug.png';
};



Enemy.prototype.update = function(dt) {
    if (this.x < 500) {
        this.x = this.x + this.speed * Math.random() * 20 * dt;
    } else {
        this.x = -50;
        this.speed = 10*Math.random();

    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player of the game
var Player = function(sprite, xCooredinate , yCooredinate) {
    this.x = xCooredinate;
    this.y = yCooredinate;
    this.sprite = sprite;
};

Player.prototype.update = function() {
    allEnemies.map(
        enemie=>{
                if ( Math.abs(player.x -  enemie.x) < 100 && player.y === enemie.y) {
                    player.x= 200;
                    player.y = 400;
                };
        }
    );
    if(player.y === -25){
        setTimeout(function(){
            player.y = 400;
            player.x = 200;
            $("#congrats").css({"display":"block"});
            $("canvas").css("display","none");

        },100);
    }

};

$("#AgainBtn").on("click",function(){
    $("#congrats").css("display","none");
    $("canvas").css("display","block");

})


// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if(this.x == 0 ){return}
            this.x -= 100;
            break;
        case 'right':
            if(this.x == 400 ){return}
            this.x += 100;
            break;

        case 'up':
            if(this.y === -25 ){return}
            this.y -= 85;
            break;
            
        case 'down':
            if(this.y == 400 ){return}
            this.y += 85;
            break;
        default:
            break;
    }
    
}


// declare enemies 
let e1 = new Enemy(0,60),
    e2 = new Enemy(0,145),
    e3 = new Enemy(0,230),
    e4 = new Enemy(-50,230),
    e5 = new Enemy(-80,145);

let allEnemies = [e1,e2,e3,e4,e5];

// declare plyer
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
