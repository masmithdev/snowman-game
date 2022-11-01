# Snowman

This is a pretty lame Hangman clone (that uses a scary Snowman instead of hanging a stick man, as apparently that's no longer suitable...)

## Technologies used so far

- Frontend
  - React (using a Vite template)
  - MobX for state management
  - Axios
- Backend
  - Express JS

## Overview of the project

This is actually a remake of a project that I built a few years ago. The code for the original was unfortunately lost, but fortunately I retained the original images.

The main frontend of the game is built using React (using the Vite template), and incorporates state management using MobX, and Axios for accessing the API backend.

The API Backend is built using Express. The games are currently stored in a hardcoded array, but this will eventually be replaced with a simple database, possibly SQLite due to the very simple needs of the application.

## Project Progress

### 2022-11-01 day 4

Added the Snowman visuals and introduced a game win and game over display. Also added a New Game button.

### 2022-10-21 day 3

Refactored the front end to use the API. This resulted in most game logic now being removed from the front end.

### 2022-10-18 Day 2

Created a backend "rest" API server using ExpressJS with TypeScript which contains an in-memory (for now) repository of games, and provides an API for guesses to be made on the server instead of the frontend - where the solution could be found via some clever JavaScript in the console.

Will look at using the API in the frontend next, and then actually finish a minimal game UI/UX.

### 2022-10-17 Day 1

First time using Vite to set up a React project. There are suggestions that the bundling/transpiling is faster, which if it is, it's currently negligible, however one BIG bonus over create-react-app... the initial project is nice and clean! I think Vite will be the way forward for future projects (until something else comes out...)

Started by trying to re-engineer the game the same way I built it before... wth trying to handle the state management myself. Yes, I could do this, but decided to instead use MobX. Simply set up a store, add some observables and actions, hook these up and everything becomes a million times easier and faster! Win.

So far a single, hard-coded phrase is being used. Guessing works and responds nicely with correct and wrong guesses.

Next up? Show the Snowman! And actually detect when the game has been won or failed.
