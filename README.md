# Market App

This project is a sample market app. It is initiated with CRA.

It provides a default implementation of React functional components.

Before running the application, first you need to ensure the followings are installed on your system:

- Node
- json-server

## Server

- On development mode the server runs on http://localhost:3004
- On production, server runs on a glitch server which is accessible from the url: https://familiar-global-pram.glitch.me

## Main Project Dependencies

**@reduxjs/toolkit** - Helps managing the global state with a certain convention of writing Redux.

**concurrently** - Runs multiple CLI commands simultaneously.
Helps running the app in the development mode and running the json-server in a single command.

**json-server** - Creates demo REST webservice with a JSON file.
You need to install the package to your system globally.

**styled-components** - Helps to create component based and semantically meaningful styles.

**tailwindccss** - Helps styling with predefined classes and media queries.
It provides easier theming with a root config file.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs two tasks:

1) Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. 

    The page will reload when you make changes.\
You may also see any lint errors in the console.

2) Runs the demo server in http://localhost:3004/items.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
