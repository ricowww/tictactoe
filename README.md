# tictactoe

//Tic Tac Toe pseudo code

/*To do
	[X] repo
	[X] boilerplate
	[X] planning
	[X] pseudocode
	[X] UI mock up
	[X] html
	[ ] js
	[ ] css
	[ ] submit
	
*/

/*
Planning
	Output
		Reset interface
		Game over message
		TicTac change
		Player names
		Current turn
		
		
	Input
		Click to place marks
		Name of player
		Click to start game
		Click to reset game
	Steps
		Upon click of button "New Game" A factory function to create player, with the following prompt
			Name - string
			Turn - yes/no
		New player is stored in an object called
			Players
		Else, the AI is called to pick a random between 1-9 except occupied tiles
		A 3x3 board of divs 
			can be clicked 
			colored white
			will occupy the available screen
		The beginning move is assigned by random as property "FirstMove" under
			Gamesettings
		Player 1 allowed to click on the board
			Player can only click in un-marked tiles
			upon click, mark "X"
			only one mark is allowed (just one increment of total unclicked)
			evaluate if three tic or tacs are lined up, if yes declare a winner and say "Game Over, ___ Wins!"
			if the number of clicked tiles are 9, stop the game and say "Draw"
			allow next player to click
		Player 2 allowed to click on the board
			Player can only click in un-marked tiles
			upon click, mark "O"
			only one mark is allowed (just one increment of total unclicked)
			evaluate if three tic or tacs are lined up, if yes declare a winner
			if the number of clicked tiles are 9, stop the game and say "Draw"
			allow next player to click
*/