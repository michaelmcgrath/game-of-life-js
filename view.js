
function draw(game){
  for (var x=0; x<game.board.length; x++){
    for (var y=0; y<game.board.length; y++){
      if (game.board[x][y] == 1){
        $('#game .r'+x+' .c'+y).css('background-color', 'yellow')
      }
      else{
        $('#game .r'+x+' .c'+y).css('background-color', 'white')
      }
    }
  }
}