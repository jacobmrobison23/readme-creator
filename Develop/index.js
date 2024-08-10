// TODO: Include packages needed for this application


const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");


// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "name",
        message: "What is your name?",
 },
{
    type: "input",
    name: "title",
    message: "Name your project",
},
{
type: "input",
name: "description",
message: "Describe your project",
},
{
type: "checkbox",
name:"license", 
message: "Choose a license",
choices: ["MIT", "Apache", "GPL", "BSD", "None"]
},
{
    type: "input",
    name: "require",
    message: "list any dependencies",

},
{
    type: "input",
    name: "install",
    message: "How do you install your project?",
},
{
    type: "input",
    name: "usage",
    message: "How do you use your project?",
},
{
    type: "input",
    name: "test",
    message: "How do you test your project?",
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},
{
type:"input",
name:"contributors",
message:"Who helped contribute to the project?"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
