// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // license = process.argv 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## Description
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

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Testing
  ${data.testin}

  ## Questions?
    Please email me at: ${data.email}
  Alternatively you can see my github at:
  http://www.github.com/${data.github}
  `;
}

module.exports = {
  generateMarkdown, 
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
}
