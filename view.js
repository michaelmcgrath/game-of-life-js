
function draw(game){
  for (var x=0; x<game.board.length; x++){
    for (var y=0; y<game.board.length; y++){
      if (game.board[x][y] == 1){
        $('#game .r'+x+' .c'+y).css('background-color', getRandomColor())
      }
      else{
        $('#game .r'+x+' .c'+y).css('background-color', 'white')
      }
    }
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}