// Imports the "file system" and "inquirer" libraries
const fs = require("fs");
const inquirer = require("inquirer");

// Creates an array of questions to be used in the inquirer.prompt() method
const questions = [
    {type: "input",
     message: "Project Name:",
     name: "projectName"},

    {type: "input",
     message: "Description:",
     name: "projectDesc"},

    {type: "input",
     message: "Your Name:",
     name: "userName"},

    {type: "input",
     message: "Repository Link:",
     name: "repoLink"},

    {type: "input",
     message: "Application Link:",
     name: "appLink"}
];

// TODO: Create a function to write README file
function writeToFile(data) {

    readmeString = 
`# ${data.projectName}

## Application Link

${data.appLink}

## Repository Link

${data.repoLink}

## Description

${data.projectDesc}

### Creator

${data.userName}`;

    fs.writeFileSync("README.md", readmeString, err => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {

    console.log("Please enter the following information.");

    /* Inquirer.prompt() method that uses the questions array to get user input.
       Then, a function is run using that user input. The "response" should be an
       object with a number of values in it equal to the number of questions. */
    inquirer.prompt(questions).then(response => {

        console.log(response);

        writeToFile(response);
    });
}

// Function call to initialize app
init();
