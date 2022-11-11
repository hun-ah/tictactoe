# Tic Tac Toe 

Everyone's favourite pen and paper game brought to the digital world!

**You can check it out here:** [Tic Tac Toe](https://tic-tac-toe-hwm.netlify.app/)

![Screen Shot 2022-11-11 at 11 09 53 AM](https://user-images.githubusercontent.com/103898493/201382673-83919784-fdfb-40b5-995b-844521b7a488.png)

## How It's Made:
**Languages used: HTML, CSS, JavaScript**

This tic tac toe game was made completely from scratch - meaning that I didn't reference any tutorials or use any tips online on how to create the game. 
This is a big step for me in my programming journey, as it shows I have the knowledge and skill to build my own programs. This is not to say that the
program is done in the most efficient way possible (because it isn't) and there is a lot of room for improvement and refactoring down the line.

I knew this program would have a lot of moving parts, so I started out by writing pseudo code for each piece of the program that I thought I would
need, including displaying an X or O on the screen, switching players, checking for a win or a tie, updating the score etc. I added more functions as I 
went along, realizing I would need to add in some additional behaviours to the program. 
I knew I would need some click events and created those accordingly. 

I really wanted to try and program this game with OOP in mind. I created a class of Player and a constructor function that would allow me to create both
a Player 1 and Player 2 object, that shared a displayMarker method. I found this to be very helpful when I was trying to change the colour of the O to be 
pink and have a pink text shadow on it, as all I had to do was pass in a few arguments. I decided to change the colour of the O at the end of the project 
and I found that I only had to add a couple bits of code and knew that I wouldn't be breaking something else in my program by making these changes. 

I tried my best to keep each piece of behaviour in a single function. I feel like this kept the code looking quite organized and clean. I really realized
in this project how having local variables comes in handy and being able to reuse the same variable name in different functions, without running the risk
of reassignment, is very important to keeping good code.

Keeping my HTML as organized as possible was a goal for this project. Practicing this helped me to better understand parent-child relationships between 
elements and how to better organize my HTML to set myself up for success with the CSS. 

When it came to the CSS, my goal was to better understand flexbox and how parent/child/sibling relationships work (inheritance).
Out of all of my projects so far, this one has the most organized and ideal layout (nothing is spilling out of its container, everything has its own 
container, there is less random addition of margins/padding because I didn't lay things out correctly).

Overall, I am very pleased with the product, despite some of its flaws!

## Optimizations:
Like mentioned earlier, I intially had both the X's and O's the same colour. I decided it would be better visually to have them be different colours and
feel like this elevates my game a little more than the first iteration I had made. I utilized local storage to keep track of each player's score, which 
my first iteration did not include. 

Like most of my projects so far, I haven't worked from "mobile first" and had some sizing issues on mobile. I was able to fix that, although the website
doesn't look very good on Safari, as part of the grid seems to be cut off (yet it is still playable). 

One thing I would really like to improve on this project when I have some more time, is to refactor my checkWin function that checks to see if there are
three markers (X or O) in a row. The code there is painfully repetitive. I was struggling to think of a way to keep things short and wanted to get the 
game working and haven't re-visited it yet. I feel confident that I can fix that at some point!

The last thing I would like to re-work is how each game is reset (whether that be a new game after a win or resetting the score). Currently the code I
have written will refresh the page in both instances but I feel like that isn't the most ideal way to start up a new game.

## Lessons Learned: 
- use of OOP, classes and constructor functions
- better comprehension of how flexbox works
- use of get and set attribute and how they can be used to add more functionality to a program
- how to better problem solve and work through the logic needed to perform a certain action
