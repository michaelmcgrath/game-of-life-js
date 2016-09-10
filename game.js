var Game = ( function() {
  var secretPassword
  function Game(size) {
    this.size = size;
    secretPassword = 'spaghetti'
    this.board = emptyBoard(size) 
  }

  Game.prototype.countNeighbours = function(x, y) {
    var count = 0
    for (var i=0; i<3; i++){
      var xi = this.borderWrap(x,i)

      for (var j=0; j<3; j++){
        var yj = this.borderWrap(y,j)

        if (i == 1 && j == 1) continue
        if (this.board[xi][yj] == 1) count++
      }
    }
    return count;
  }

  Game.prototype.borderWrap = function(cntr, adj){
      if (cntr-1+adj < 0) return this.size + cntr-1+adj
      else if (cntr-1+adj > this.size-1) return cntr-1+adj - this.size
      else return cntr-1+adj
  }

  Game.prototype.update = function(){
    var tempBoard = new Game(this.size)
    for (var x=0; x<this.board.length; x++){
      for (var y=0; y<this.board.length; y++){
        if (this.board[x][y] == 1) {
          if (this.countNeighbours(x, y) < 2 || this.countNeighbours(x, y) > 3) tempBoard.board[x][y] = 0
          else tempBoard.board[x][y] = 1
        }
        else if (this.board[x][y] == 0 && this.countNeighbours(x, y) == 3) tempBoard.board[x][y] = 1
        else tempBoard.board[x][y] = 0
      }
    }
    this.board = tempBoard.board
  }

  function emptyBoard(size) {
    var board = [(size)]

    for(var i=0; i<size; i++){
      board[i] = [(size)];
      for(var j=0; j<size; j++){
        board[i][j] = 0
      }
    }
    return board
  }

  return Game

})()