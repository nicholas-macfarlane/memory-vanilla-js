# [memory-vanilla-js]

Single-file(Now modularized!) Memory / Concentration game written in [vanilla JS](http://vanilla-js.com/), with no external dependencies*, build tools*, or resource files.

*ES6 Module imports/exports(vs pre-bundling with a tool) require a web server hosting the files.

Development environment: [Visual Studio Code](https://code.visualstudio.com/) (free, using [Live Server extension for local development](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

# basic rules
Two players(using the same device - see [hotseat](https://en.wikipedia.org/wiki/Hotseat_(multiplayer_mode))) take turns clicking two black "cards" to flip them and reveal the letters on the other side.

After a small delay(so the second card can be viewed) the cards will be flipped back over, if they didn't match.

If they match, you score a point, and those cards cannot be flipped again. They turn green to signify this, but you can always view any matched card's value by hovering over it.

The player with the highest score, once all cards are matched, will receive a +1 to their win count, with no points awarded for a tie, and the cards are reshuffled for the next match.

Remembering what's under the cards that haven't been matched yet is the key to winning. :)


# purpose
I'm a fan of hot-seat style games, and one day I thought I'd make a simple game with no frameworks/images/etc.

I remember playing a game like this as a child, where you'd take turns flipping over cards to try and match them, and thought that would be a good candidate for a game. 

You can recreate this physically with as much of a deck of poker cards as you like - just match red-to-red, black-to-black, for each card value. Or leave out one color and make it simpler. :)

I would also like to think that being able to play a friendly game with your quarantine-mates can help make these times more bearable.


# code
Originally all in one file, and written that way intentionally - it was supposed to be about as simple as it could get, with opportunities for refactoring. 

This wasn't best practice - professional developers wil split their code among as many files as it makes sense to split it among(being able to understand and manage the complexity as the human being writing the code is important!), and build that project into fewer files before deploying.

This pass through the code, I've broken the code up into smaller logical modules, utilizing ES6 imports and exports, as well as moved the static css to a single file, imported by the index.

This setup makes management of the code much simpler, and paves the way for separation of concerns between a server and client(for future online multiplayer), much smoother refactoring, adding TypeScript, and/or implementation of automated testing.

I've "renamed" a handful of functions in constants.js, I'm not saying you should, I'm just saying I did.

There's also the future consideration of using an existing js framework(such as Vue, or React), or even creating one from scratch.

In general, if you're using jQuery, you're still just slowing down page loads for things you can implement in vanilla JS.

To elaborate, [the current version of jQuery, in full, is around 250kB to download](https://mathiasbynens.be/demo/jquery-size), which means this game, at < 12kB, would take over 21x the time to download. If you're getting a zipped and minified version, at about 28kB, then it would only take somewhere over 3x the time to download.

The overall file size of this game project, unbundled, has increased around 4x after moving to ES6 modules.


# design
I wanted to go for the aesthetic of an old computer running the game, which works well with the lack of images, and is emphasized by the styling and "console" where the score and current player's turn are displayed.

Feature in consideration:

Typewriter/cursor effect
More feedback onscreen/in console

A feature which would be nice for most games is color-coding based on the player, but I feel would take away from the overall monochrome, low-tech, found-an-old-computer-in-the-basement kind of feeling I was going for.

# forking
Do it! Fork this project, play with it, make your own game, your own style, create and learn!

This code is *nowhere near* perfect, so there's a lot of opportunity to find better ways to do things(one that I can point out is the way I'm generating the character pairs or even just adding more pairs of cards for a harder game). :)

# issues / features / project requests / donations
"Free time" for this developer is taking a break from other people's projects and doing something fun and personal - this might be coding, gaming, travelling(when the global situation allows), but considering the shortage of devs out there, it's also expensive to indulge in. 

It's my mission to one day be able focus completely on things that bring joy, knowledge, and inspiration to me, and hopefully to others as well.

I haven't currently set up any specific system for payments, but if you really want to support my creativity, request me for a project, or request additions to this one, [open an issue](https://github.com/nicholas-macfarlane/memory-vanilla-js/issues) in this repository with a descriptive name that indicates the nature of your request, and I'll have a look. :)


