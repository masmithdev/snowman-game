# Snowman

This is a pretty lame Hangman clone (that uses a scary Snowman instead of hanging a stick man, as apparently that's no longer suitable...)

## Technologies used so far

- React (using a Vite template)
- MobX for state management

## Overview of the project

This is actually a remake of a project that I built a few years ago. The code for the original was unfortunately lost, but fortunately I retained the original images.

The main frontend of the game is built using React. At the moment the phrases used in the game will be stored in the front-end, but I would like to extend the project to use an ExpressJS backend to deliver the games, along with guesses being sent to the server insted of the solution being stored in front-end code.

## Project Progress

### 2022-10-17 Day 1

First time using Vite to set up a React project. There are suggestions that the bundling/transpiling is faster, which if it is, it's currently negligible, however one BIG bonus over create-react-app... the initial project is nice and clean! I think Vite will be the way forward for future projects (until something else comes out...)

Started by trying to re-engineer the game the same way I built it before... wth trying to handle the state management myself. Yes, I could do this, but decided to instead use MobX. Simply set up a store, add some observables and actions, hook these up and everything becomes a million times easier and faster! Win.

So far a single, hard-coded phrase is being used. Guessing works and responds nicely with correct and wrong guesses.

Next up? Show the Snowman! And actually detect when the game has been won or failed.
