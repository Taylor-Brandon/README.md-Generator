// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            name:'title',
            type:'input',
            message:'What is the title of your project?',
        },
        {
            name:'description',
            type:'input',
            message:'Please provide a description of your project.',
        },
        {
            name:'tableOfContents',
            type:'input',
            message:'Please provide a table of contents for your project.',
        },
        {
            name:'installation',
            type:'input',
            message:'Please provide installation instructions for your project.',
        },
        {
            name:'usage',
            type:'input',
            message:'Please provide usage information for your project.',
        },
        {
            name:'license',
            type:'input',
            message:'Please provide license information for your project.',
        },
        {
            name:'contributing',
            type:'input',
            message:'Please provide contribution guidelines for your project.',
        },
        {
            name:'tests',
            type:'input',
            message:'Please provide test instructions for your project.',
        },
        {
            name:'questions',
            type:'input',
            message:'Please provide your GitHub username and email address for questions.',
        },
    ]);
};

// TODO: Create a function to write README file
const data = "This is my project's README file.";
const fileName = "README.md";

fs. writeFile(fileName, data, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Successfully written to ${fileName}`);
});

fs.appendFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`Successfully appended to ${fileName}`);
  });
  
   

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();