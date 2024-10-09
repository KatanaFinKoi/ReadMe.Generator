// import all required modules
import inquirer from 'inquirer';
import markdown from './utils/generateMarkdown.js';
import fs from 'fs';

// this function will initialize the app
function init() {
    inquirer
  .prompt([
    /* passes questions to the user */
    {
        type: "input", 
        name: "title", 
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name:"description",
        message: "Please provide a description of your project."
    },
    {
      type: "input",
      name:"installation",
      message:"Please provide installation instructions."
    },
    {
      type:"input",
      name:"usageInformation",
      message:"Please provide usage information."
    },
    {
      type:"input",
      name:"contributionGuidelines",
      message:"Please provide contribution guidelines."
    },
    {
      type:"input",
      name:"testInstructions",
      message:"Please provide test instructions."
    },
    {
      type:"list",
      name:"license",
      message:"Please choose a license for your project.",
      choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    },
    {
      type:"input",
      name:"GitHub",
      message:"Please enter your GitHub username."
    },
    {
      type:"input",
      name:"email",
      message:"Please enter your email address."
    }
  ])
  .then((answers) => {
   const md = markdown(answers)
   console.log(md)
    fs.writeFile("ReadMe.md", md, (err) => {
      if (err) {
        console.error(err)
      }
      else {
        console.log("File written successfully")
      }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
