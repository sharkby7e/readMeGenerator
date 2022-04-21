// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const generate = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the name of your application?",
    name: 'name'
  }, 
  {
    input: "select",
    message: "Please select a license",
    choices: [],
    name: 'license'
  }, 
  {
    message: "Describe your application in 3 sentences",
    name: 'description'
  }, 
  {
    message: 'What is your e-mail address',
    name: 'email'
  }, 
  {
    message: "What is your github username",
    name: 'github'
  }, 

];

function askUser(qArray) {
  inquirer.prompt(
    qArray
  )
  .then((answers) => {
    generate.generateMarkdown(answers)
  })
}
let generatedMD =  

// TODO: Create a function to write README file
//
function writeToFile(, data) {

}

// TODO: Create a function to initialize app
function init() {
  askUser(questions)
  generateMarkdown()
}

// Function call to initialize app
init();
