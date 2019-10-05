// Score//


var score = 0;
document.getElementById('Score').innerHTML = score;


// first, I create an enemy//
var Enemy = function(x, y, speed){

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'https://raw.githubusercontent.com/udacity/frontend-nanodegree-arcade-game/master/images/enemy-bug.png';

  };

//here is the randomised movement and speed of our enemy//


Enemy.prototype.update = function(dt){

    this.x += this.speed *dt;

    if (this.x > 510){
    this.x = -50;
    this.speed = 100 + Math.floor(Math.random() * 222);
 }

//this is an equation for when the player and the enemy collide//

  if (player.x < this.x + 80 &&
      player.x + 80 > this.x &&
      player.y < this.y + 80 &&
      player.y + 60 > this.y){
        player.x = 200;
        player.y = 400;
       }
  };
//   //    this.checkCollision();
// };


Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now I create a player for our enemies to run into!!//
var Player = function(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.player = 'https://raw.githubusercontent.com/udacity/frontend-nanodegree-arcade-game/master/images/char-boy.png';
  };

Player.prototype.update = function(dt){
      if (player.y < 10 ) {
	    score++;
	    document.getElementById('Score').innerHTML = score;
	    this.reset();
}
      // this.checkCollisions();
};

Player.prototype.render = function (){
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};


  // This allows the user to use the arrow keys to jump from tile to tile

Player.prototype.handleInput = function(keyPress){
    if (keyPress == 'left' && this.x > 0){
        this.x -=this.speed + 50;
        }
    if (keyPress == 'right' && this.x < 380){
        this.x += this.speed + 50;
        }
    if (keyPress == 'up' && this.y > 0){
        this.y -= this.speed + 30;
        }
    if (keyPress == 'down' && this.y < 380){
        this.y += this.speed + 30;
        }
};

// this resets the player everytime it gets hit by a bug or reaches the water.//
Player.prototype.reset = function() {
    if (player.y < 10 ){
    this.x = 200;
    this.y = 380;
 }
};



//  I place all enemy objects in an array called allEnemies
// Then, I place the player object in a variable called player
//I do the same for the Gems//
var player=[];
var allEnemies = [];
var allGems = [];


 //enemy and player positions positions//
var enemyPosition = [50, 135, 220];
var player = new Player (200, 400, 50);
var enemy;
//
enemyPosition.forEach(function(posY){
  enemy = new Enemy(0,posY,100 + Math.floor(Math.random()* 499));
  allEnemies.push(enemy);
});


// document.addEventListener('keydown', function(e) {
//     if (e.keycode >=37 && e.keycode <= 40) e.preventDefault();
// });

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
   };

   player.handleInput(allowedKeys[e.keyCode]);
});
