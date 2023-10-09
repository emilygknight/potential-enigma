// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs") // this si alibrary that deals with creating files or editing files etc..





// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the title of your application?'
    }, {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }, {
        type: "input",
        name: "installation",
        message: "What are the instructions to install your application?"
    }, {
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    }, {
        type: "input",
        name: "contributions",
        message: "What contributions did you use?"
    }, {
        type: "input",
        name: "tests",
        message: "How do you test this application?"
    }, {
        type: "list",
        name: "license",
        message: "what license did you use for this project ?",
        choices: ["MIT", "APACHE", "NONE"]
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {

    fs.writeFile('README.md', answers, (err) =>
    err ? console.log(err) : console.log('Successfully created readme!')
  );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            console.log("THE ANSWERS!!!! ", answers);
            console.log("This is title ", answers.title)

            var template = `## ${answers.title}`
            writeToFile(template);

        })


}

// Function call to initialize app
init();

