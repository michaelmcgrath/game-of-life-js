function setupDefaultBoard() {
	gol.board[4][6] = 1
	gol.board[4][7] = 1
	gol.board[4][8] = 1
	gol.board[4][12] = 1
	gol.board[4][13] = 1
	gol.board[4][14] = 1

	gol.board[9][6] = 1
	gol.board[9][7] = 1
	gol.board[9][8] = 1
	gol.board[9][12] = 1
	gol.board[9][13] = 1
	gol.board[9][14] = 1

	gol.board[11][6] = 1
	gol.board[11][7] = 1
	gol.board[11][8] = 1
	gol.board[11][12] = 1
	gol.board[11][13] = 1
	gol.board[11][14] = 1

	gol.board[16][6] = 1
	gol.board[16][7] = 1
	gol.board[16][8] = 1
	gol.board[16][12] = 1
	gol.board[16][13] = 1
	gol.board[16][14] = 1

	gol.board[6][4] = 1
	gol.board[7][4] = 1
	gol.board[8][4] = 1

	gol.board[6][9] = 1
	gol.board[7][9] = 1
	gol.board[8][9] = 1

	gol.board[6][11] = 1
	gol.board[7][11] = 1
	gol.board[8][11] = 1

	gol.board[6][16] = 1
	gol.board[7][16] = 1
	gol.board[8][16] = 1

	gol.board[12][4] = 1
	gol.board[13][4] = 1
	gol.board[14][4] = 1

	gol.board[12][9] = 1
	gol.board[13][9] = 1
	gol.board[14][9] = 1

	gol.board[12][11] = 1
	gol.board[13][11] = 1
	gol.board[14][11] = 1
	
	gol.board[12][16] = 1
	gol.board[13][16] = 1
	gol.board[14][16] = 1
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