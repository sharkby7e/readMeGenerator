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
  
  \`${data.installation}\`

  ## Usage

  \`${data.usage}\`

  ## License

  The full license text can be found by clicking the badge

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
