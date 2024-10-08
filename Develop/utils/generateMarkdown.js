// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "None") {
    return `* [License](#license)`
  } else {
    return ""
  } 

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`
  }
  else {
    return ""
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  by ${data.name}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
   
  ## Table of Contents
   ${renderLicenseLink(data.license)}
  - [Description](#description)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [contact-me](#contact-me)
  - [contributors](#contributors)
  - [Tests](#tests) 

  ## Description
  ${data.description}
  ## Requirements
  ${data.require}
  ## Usage
  ${data.usage}
  ## Contact-Me
  Name: ${data.name}
  Email: ${data.email}
    GitHub: ${data.github}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.test}

  
`;}


module.exports = generateMarkdown;
