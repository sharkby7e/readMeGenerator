# readMeGenerator

## Description 
This is a command line application that aims to create a professional and polished README for the user. 
When the application is run, the user is asked a series of questions about their application, and once they are done
generates and writes a file called GENERATED.md, which they can use in their project. The user also has a chance to choose
a license, and the program adds the license badge to the page.

## Table of contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Testing](#testing)
   * [Contact/Questions](#questions)

## Video Preview of Application 
This application is not deployed, please click the link below to view video

[Click to view the application video demo](https://drive.google.com/file/d/1UIA4LEYFkMaztVQ66JRQd9l9-16n4Odi/view)

## Technologies Employed

| Techlogy                    | Implementation/Use       |
|-----------------------------|--------------------------|
|Node.js                      | JavaScript runtime       |
|Node Package Manager         | Manage node packages     |
|inquirer                     | Prompt the user in CL    |
|node file system             | Used to write a MD file  |

## Key Functions
### askUser

This is the main function that prompts the user all of the questions in the question array 
that is defined above. Once the prompts are completed, then two functions are run,
which are invoked from a custom external module. Once those are done, the writeToFile
function is run.

```javascript
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
```

### writeToFile
This function is invoked once the promise from askUser is fulfilled. It writes the GENERATED.md 
file, using the data that is generated in the generateMarkdown function, within my custom module.

```javascript
function writeToFile(data) {
  fs.writeFile("GENERATED.md", data, err =>{
    err ? console.log(err) : console.log("Markdown Successfully Generated!")
  })
}
```
## Installation
To install this application, clone the repository 
```
git@github.com:sharkby7e/readMeGenerator.github
```
and then run the following command 
```
npm install
```

## Usage
To use the application, run the following commant
```
node index.js
```
## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Questions?
Please contact me at:

sgquin@gmail.com

Alternatively, visit my github: 

https://www.github.com/sharkby7e

## Summary and Learning Points
This project was an introduction to the NPM as well as the node.js runtime. It also was a good 
opportunity to learn how to create a professional and comprehensive readme. I didn't end up using
the generator myself, but I am not in as much of a rush as my target user. 
