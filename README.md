# arcade-connect-four

#requirements

#multiplayer

<ul>
    <ul>enter player names and have them displayed</ul>
    <ul>have game choose which player goes first</ul>
    <ul>take turns by dropping player chip into a column on the grid</ul>
    <ul>prevent player from dropping a chip into a totally filled column</ul>
    <ul>tell player when a move causes a player to win or draw</ul>
    <ul>restart game without refreshing browser</ul>
</ul>

#singleplayer

<ul>
    <ul>set opponent as computer, label as "Computer"</ul>
    <ul>have the computer choose columns as if it were a human player</ul>
</ul>

#optionals

#singleplayer

<ul>
    <ul>have computer choose correct column for a win, when possible</ul>
</ul>

#approach

<ol>
    <li>Have the option to choose one or two players</li>
        <ul>
            <li>buttons for one player (vs CPU) and two players</li>
            <li>if "Versus CPU" is clicked, load the board with computer as opponent</li>
            <li>else, load the board for two players</li>
        </ul>
    </li>
    <li>Enter the player names and have them displayed</li>
    <ul>
        <li>store player names in an array</li>
        <li>display names via DOM</li>
    </ul>
    <li>Prepare the Connect Four board</li>
    <ul>
        <li>load board into DOM to display</li>
        <li>initialize empty array</li>
        <li>track board in game object</li>
    </ul>
    <li>Have game choose which player goes first</li>
    <ul>
        <li>choose a player name by selecting a random index of the array</li>
    </ul>
    <li>Take turns by dropping player chip into a column on the grid</li>
    <ul>
        <li>push player chip into an index of the board array</li>
        <li>integrate DOM so that the chip is pushed into the column on click</li>
    </ul>
    <li>Prevent player from dropping a chip into a totally filled column</li>
    <ul>
        <li>check if column is totally filled</li>
            <ul>
                <li>if column is filled, tell the player it is filled and that they should pick another column</li>
            </ul>
    </ul>
    <li>Tell player when a move causes a player to win or draw</li>
    <ul>
        <li>check if either player has four chips in a row or if both players have filled the board</li>
            <ul>
                <li>if player 1 has four chips in a row, display message in browser saying they win</li>
                <li>else if player 2 has four chips in a row, display message saying they win</li>
                <li>else display a message saying it's a draw, as the board is full</li>
            </ul>
    </ul>
    <li>Restart game without refreshing browser</li>
    <ul>
        <li>button to restart game</li>
        <li>build button dynamically with javascript</li>
    </ul>
    <li>(For multiplayer) Set opponent as computer, label as "Computer"</li>
    <ul>
        <li>store computer into player array</li>
        <li>display as "Computer" with DOM in browser</li>
    </ul>
    <li>Have the computer choose columns as if it were a human player</li>
    <ul>
        <li>push computer's chip into an index of the board array</li>
    </ul>
</ol>
