# Git-hub Repo Tracker

The project involves a react-redux application that has 2 input type heads. The input type head-1 enables the user to select a list of users from a input type head. The application renders a list of repos and also updates the input type head-2 with the list of repo names. The user can select a repo from repo list input type head-2 or click on a repo from repo list rendered, this will render a chart with the selected repo contributor names on x axis and number of contributions on y axis.

## Getting Started

There are two methods for getting started with this repo.The app requires 2 terminal instances running in parallel.Terminal instance-1 can be used to install npm modules and to start the application. Terminal instance-2 can be used to watch-css changes and compile sass to css.

**if you are familar with git:**  
Checkout this repo, install dependencies, then start the gulp process with the following:

```
git clone https://github.com/DineshBabu1989/homeday_challenge.git
```

On terminal instance -1

```
npm install
npm start
```

On terminal instance -2

```
npm run watch-css
```

**if you are not familar with git:**

Click here then download the .zip file. Extract the contents of the zip file, then open your terminal,
change to the project directory, and:

On terminal instance -1

```
npm install
npm start
```

On terminal instance -2

```
npm run watch-css
```

## Architecture of the application

-React on the front end to render UI and respond to front-end events
-Redux store to manage data from RESTful APIs
-Actions contain API calls to predefined API end points
-Reducers contain data from API calls in the form of objects

## Prerequisities

-You need to have node.js installed in your system.
--URL: https://nodejs.org/en/

## Built With

- React, Redux, Bootstrap-4, SASS, autoprefixer - Front-end
- node.js - The server side framework
- VsCode - Text Editor with prettier setup

## Authors

- DINESH.B - FULL STACK DEVELOPER

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
