var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT", 
            "Apache2.0",
            "GPI3.0",
            "BSD3",
            "none"
          ]
    }, 
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    }, 
    {
        type: "input",
        message: "What is your project name?",
        name: "projectName",
    }, 
    {
        type: "input",
        message: "Write a description",
        name: "description",
    }, 
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "commandTests",
    }, 
    {
        type: "input",
        message: "What command should be run to install?",
        name: "commandInstall",
    }, 
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "knowRepo",
    }, 
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributingRepo",
    },
    {
        type: "input",
        message: "Table of contents in the repo",
        name: "tableContents",
    }

]).then(function (data) {
    console.log(data);

    fs.appendFile("README.md", name(data), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

    function name() {
        return `
# Welcome! My name is ${data.name}

![GitHub Profile Picture](https://avatars3.githubusercontent.com/u/59455474?s=460&v=4)

## Project Title:
${data.projectName}

<br>

## Description:
${data.description}

<br>

## Table of Contents:
${data.tableContents}

<br>

## Installation Command:
\`${data.commandInstall}\`

<br>

## Tests:
\`${data.commandTests}\`

<br>

## Usage:
${data.knowRepo}

<br>

## License:
![License](https://img.shields.io/badge/license-${data.license}-green.svg)

<br>

## Contributing:
${data.contributingRepo}

<br>

`
    }
});
