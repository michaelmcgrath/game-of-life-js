function Game() {
  this.size = 30;
}

Game.prototype.next = function() {
  console.log(this.size) 
}

var game = new Game();
var game2 = new Game();

console.log(game);
console.log(game2);
game.next();

