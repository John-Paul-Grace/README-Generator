// Imports the "file system" and "inquirer" libraries
const fs = require("fs");
const inquirer = require("inquirer");

// Creates an array of questions to be used in the inquirer.prompt() method
const questions = [
    {type: "input",
    message: "Name?",
    name: "name"},

    {type: "input",
    message: "Location?",
    name: "location"},

    {type: "input",
    message: "Gender?",
    name: "gender"},

    {type: "input",
    message: "Hair Color?",
    name: "hairColor"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    /* Inquirer.prompt() method that uses the questions array to get user input.
       Then, a function is run using that user input. The "response" should be an
       object with a number of values in it equal to the number of questions. */
    inquirer.prompt(questions).then(response => {

        console.log(response);
    });
}

// Function call to initialize app
init();
