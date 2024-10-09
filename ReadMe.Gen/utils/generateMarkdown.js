// adds cooresponding badge and link to license type
function renderLicenseBadge(license) {
let licenseBadge = "";
if (license === "MIT") {
  licenseBadge = "https://img.shields.io/badge/MIT%20-%20red"
  } else if (license === "Apache") {
  licenseBadge = "https://img.shields.io/badge/apache%20-%20blue"
  } else if (license === "GPL") {
  licenseBadge = "https://img.shields.io/badge/GPL%20-%20yellow"
  } else if (license === "BSD") {
  licenseBadge = "https://img.shields.io/badge/BSD%20-%20green"
  } else {licenseBadge = "" }
  return licenseBadge;
}
// adds cooresponding badge and link to license type
function renderLicenseLink(license) {
let licenseType = "";
if (license === "MIT") {
licenseType = "[MIT](https://opensource.org/licenses/MIT)"
} else if (license === "Apache") {
licenseType = "[Apache](https://opensource.org/licenses/Apache-2.0)"
} else if (license === "GPL") {
licenseType = "[GPL](https://opensource.org/licenses/gpl-license)"
} else if (license === "BSD") {
licenseType = "[BSD](https://opensource.org/licenses/BSD-3-Clause)"
} else {licenseType = "" }
return licenseType;
}

//compiles license section
function renderLicenseSection(license) {
    const licenseLink = renderLicenseLink(license);
    const licenseBadge = renderLicenseBadge(license);
    if (!license || license === "None") {
      return "";
    }
    return `## License
${licenseLink}
${licenseBadge}`
}

// generates markdown for README
function generateMarkdown(data) {
  console.log(data)
  const { title, description, installation, usageInformation, contributionGuidelines, license, testInstructions, email, GitHub } = data;
  console.log(title, description, installation, usageInformation, contributionGuidelines, license, testInstructions, email, GitHub)
  return `
# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#Questions)
- [License](#license)

## Description
${description}

## Installation
${installation}

## Usage
${usageInformation}

## Contribution Guidelines
${contributionGuidelines}

## Test Instructions
${testInstructions}

## Questions
If you have any questions, please feel free to reach out to me at ${email} or on my GitHub: [${GitHub}]


${renderLicenseSection(license)}
`;
}

export default generateMarkdown;
