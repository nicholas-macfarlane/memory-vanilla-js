# memory-vanilla-js
Memory / Concentration game written with no frameworks


# basic rules
click two black "cards" to flip them and reveal the letters on the other side.


# purpose
I'm a fan of hot-seat style games, and one day I thought I'd make a simple game with no frameworks / images/ etc.

I remember playing a game like this as a child, where you'd take turns flipping over cards to try and match them, and thought that would be a good candidate for a game. 

I would also like to think that being able to play a friendly game with your quarantine-mates can help make these times more bearable.


# code
All in one file, and written that way intentionally - this is supposed to be about as simple as it can get, with opportunities for refactoring. This isn't best practice - professional developers wil split their code among as many files as it makes sense to split it among(being able to understand and manage the complexity as the human being writing the code is important!), and build that project into fewer files before deploying.

If I were going to use any frameworks or libraries here, I'd have used Vue.js for sure, and likely FontAwesome and Bootstrap as well. In general, if you're using jQuery, you're just slowing down page loads for things you can implement in vanilla JS.


# design
I wanted to go for the aesthetic of an old computer running the game, which works well with the lack of images, and is emphasized by the styling and "console" where the score and current player's turn are displayed. I might go back and add a typewriter effect to the console some day.

A feature which would be nice for most games is color-coding based on the player, but which I feel would take away from the overall low-tech, found an old computer in the basement kind of feeling I was going for.

# forking
Do it! Fork this project, play with it, make your own game, your own style, create and learn! 
Ths code is nowhere nesr perfect, so there's a lot of opportunity to find better ways to do things(one that I can point out is the way I'm generating the character pairs). :)

