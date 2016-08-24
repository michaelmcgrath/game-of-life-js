function setupDefaultBoard() {
	gol.board[1][2] = 1
	gol.board[2][3] = 1
	gol.board[3][1] = 1
	gol.board[3][2] = 1
	gol.board[3][3] = 1

}

function setupEventListeners() {
	$(".new-game").click(function(){
		pause()
		gol = new Game(boardSize)
		draw(gol)
	})

	$(".start").click(function(){
		interval = setInterval(function(){
			draw(gol)
			gol.update()	
		},1000/speed)
		$(this).hide()
		$(".pause").show()
	})

	$(".pause").click(pause)

	$(window).mousedown(function() {
		mouseHeld = true
	})

	$(window).mouseup(function() {
		mouseHeld = false
	})

	$("#game tr td").mousedown(function(){
		paint(this)
	})

	$("#game tr td").mouseover(function(e) {
		if(mouseHeld){
			paint(this)
		}
	})

	$(".set-speed").click(function(){
		speed = $(".speed").val()
	})
}

function paint(cell){
    var x = $(cell).parent().attr('class')
    var y = $(cell).attr('class')
    x = parseInt(x.replace('r',''))
    y = parseInt(y.replace('c',''))
    if (gol.board[x][y] == 0){
      gol.board[x][y] = 1
    }
    else if (gol.board[x][y] == 1) {
      gol.board[x][y] = 0
    }
    draw(gol)
}

function pause(){
  clearInterval(interval)
  draw(gol)
  $(".pause").hide()
  $(".start").show()
}