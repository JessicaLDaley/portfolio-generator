const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

// The first argument is the file name that will be created, or the output file. 
//The second argument is the data that's being written: the HTML string template. 
//The third argument is the callback function that will handle any errors as well as the success message.
 
fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});