// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the name of your application?",
    name: 'name'
  }, 
  {
    type: "list",
    message: "Please select a license",
    choices: ['gnu','mit','apache'],
    name: 'license'
  }, 
  {
    message: "Describe your application in 3 sentences?",
    name: 'description'
  }, 
  {
    message: 'How do you install your application?',
    name: 'installation'
  }, 
  {
    message: 'How do you use your application?',
    name: 'usage'
  }, 
  {
    message: 'How can we test your application?',
    name: 'testing'
  }, 
  {
    message: 'How can we contribute to your project?',
    name: 'contributing'
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
    generate.renderLicenseBadge(answers.license)
    let generateMD = generate.generateMarkdown(answers)
    writeToFile(generateMD)
  })
}

// TODO: Create a function to write README file

function writeToFile(data) {
  fs.writeFile("generated.md", data, err =>{
    err ? console.log(err) : console.log("Markdown Successfully Generated")
  })
}


// TODO: Create a function to initialize app
function init() {
  askUser(questions)
}

// Function call to initialize app
init();
