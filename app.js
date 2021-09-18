const inquirer = require('inquirer');
/*const fs = require('fs');
const generatePage = require('./src/page-template');

const pageHTML = generatePage(name, github);

// The first argument is the file name that will be created, or the output file. 
//The second argument is the data that's being written: the HTML string template. 
//The third argument is the callback function that will handle any errors as well as the success message.
 
/*fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});*/
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username. (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    
   {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};
promptUser().then(answers => console.log(answers));


// If there's no "projects" array property, create one 
if (!porfolioData.projects) {
  portfolioData.projects = [];
}
const promptProject = () => {
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt.then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      returnpromptProject(portfolioData);
    } else {
      return porfolioData;
    }
  }

  )([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    },
   
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
   
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('Please enter your GitHub project link!');
          return false;
        }
      }
    },
    
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};


