// Imports the "file system" and "inquirer" libraries
const fs = require("fs");
const inquirer = require("inquirer");
const license = require("./assets/licenses/GNU-GPLv3");

// Creates an array of questions to be used in the inquirer.prompt() method
const questions = [
    {type: "input",
     message: "Project Name:",
     name: "projectName"},

     {type: "input",
     message: "Application Link (can be left blank):",
     name: "appLink"},

     {type: "input",
     message: "Repository Link (can be left blank):",
     name: "repoLink"},

    {type: "input",
     message: "Description:",
     name: "projectDesc"},

    {type: "input",
     message: "Installation Instructions (can be left blank):",
     name: "installInstr"},

    {type: "input",
     message: "Usage Instructions:",
     name: "usageInstr"},

    {type: "input",
     message: "Screenshot Link/Path (can be left blank):",
     name: "screenshotLink"},

    {type: "input",
     message: "Collaborators (including yourself):",
     name: "collabNames"},

    {type: "input",
     message: "Third-Party Assets (can be left blank):",
     name: "thirdPartyAssets"},

    {type: "list",
     message: "License:",
     choices: ["MIT License", "GNU GPLv3.0", "Unlicensed"],
     name: "licenseName"}
];

function tableOfContents(data) {


}

function hasLinks(appLink, repoLink) {

    let linkString = "";

    if (appLink.trim() != "") {
        linkString = linkString + "\n\n## Application Link\n" + appLink;
    }

    if (repoLink.trim() != "") {
        linkString = linkString + "\n\n## Repository Link\n" + repoLink;
    }

    return linkString + "\n";
}

function hasInstall(installInstr) {
    
    if (installInstr.trim() != "") {
        return "\n\n## Installation\n" + installInstr;
    }

    return "";
}

function hasScreenshot(screenshotLink) {

    if (screenshotLink.trim() != "") {
        return `\n\n![Demo Screenshot](${screenshotLink})`;
    }

    return "";
}

function hasThirdPartyAssets(thirdPartyAssets) {

    if (thirdPartyAssets.trim() != "") {
        return "\n**Third-Party Assets:**\n" + thirdPartyAssets;
    }

    return "";
}

function getLicense(licenseName) {

    let licenseText = "";

    switch (licenseName) {
        case "MIT License":
            console.log("For this license, you will need to add your full name and the current year in the readme.")
            licenseText = require("./assets/licenses/MIT-License.js");
            break;

        case "GNU GPLv3.0":
            licenseText = require("./assets/licenses/GNU-GPLv3.js");
            break;

        case "Unlicensed":
            licenseText = require("./assets/licenses/Unlicense.js");
            break;
    }

    return licenseText;
}

function writeToFile(data) {

    // This deconstructs the data object
    const {projectName, appLink, repoLink, projectDesc, installInstr,
           usageInstr, screenshotLink, collabNames, thirdPartyAssets, licenseName} = data;

// ========================================================================================================
    /* This uses the data object to create a string of the contents of the file. For any
       information that may be left blank by the user, */
    readmeString = 
`# ${projectName}

## Table of Contents

${tableOfContents(data)}${hasLinks(appLink, repoLink)}
## Description

${projectDesc}${hasInstall(installInstr)}

## Usage

${usageInstr}${hasScreenshot(screenshotLink)}

## Credits

**Collaborators:** ${collabNames}${hasThirdPartyAssets(thirdPartyAssets)}

## License

${getLicense(licenseName)}`;
// ========================================================================================================

    // This writes the file using the string constructed above
    fs.writeFileSync("test.md", readmeString, err => err ? console.error(err) : console.log('Success!'));
}

// This function is called immediately to start the app
function init() {

    console.log("Please enter the following information.");

    /* Inquirer.prompt() method that uses the questions array to get user input.
       Then, a function is run using that user input. The "response" should be an
       object with a number of values in it equal to the number of questions. */
    inquirer.prompt(questions).then(response => {

        // This passes the object containing the user input into the writeToFile() method
        writeToFile(response);
    });
}

// Function call to initialize app
init();
