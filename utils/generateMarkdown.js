// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
  // license = process.argv 
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// let licText
let licenseBadge
function renderLicenseBadge(license) {
  switch(license){
    case 'apache':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'gnu':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'mit':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    default: 
      licenseBadge = ''
  }
}
// function renderLicenseSection(license) {
//   switch(license){
//     case 'apache':
//       licText = require('../licenses/apache.js')
//       break;
//     case 'gnu':
//       licText = require('../licenses/gnu.js')
//       break;
//     case 'mit':
//       licText = require('../licenses/mit.js')
//       break;
//     
//     default:
//       licText = ''
//   }
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## Description
  ${licenseBadge}

  ${data.description}

  ## Table of contents

   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Testing](#tests)
   * [Contact/Questions](#questions)

  ## Installation 
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License
  Please click the badge to see full license text

  ${licenseBadge}

  ## Contributing

  ${data.contributing}

  ## Testing

  ${data.testing}

  ## Questions?
  Please email me at: ${data.email}

  Alternatively you can see my github at:
  http://www.github.com/${data.github}
  `;
}

module.exports = {
  generateMarkdown, 
  renderLicenseBadge,
  // renderLicenseLink,
  // renderLicenseSection,
}
