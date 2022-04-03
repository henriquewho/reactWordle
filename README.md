# React "Competitive" Wordle clone

Link: [https://henriquewho.github.io/reactWordle/](https://henriquewho.github.io/reactWordle/)

## Status

In development. 

## Idea

In this project, I'm creating a Wordle (https://www.nytimes.com/games/wordle/index.html) clone that you can play with a friend.

The standalone Wordle part of the project is based on the PedroTech tutorial ([https://www.youtube.com/watch?v=WDTNwmXUz2c](https://www.youtube.com/watch?v=WDTNwmXUz2c)).

## Frontend / Backend / Communication

The frontend part is written with ReactJS. The backend is available at ([xxx](xxx)) and it's written in Node, using Express to serve the application.
The communication between the players is done using the socket.io library.

## How does it work 

Two players must be assigned to the same room. When the first one logs in, the word is generated randomly via the word bank txt file and it's shared to the second player, via socket.io communication.
The player who created the room will play first, and then will alternate rounds with the player 2, using the original Wordle game rules, until the 6 guesses run out. 

