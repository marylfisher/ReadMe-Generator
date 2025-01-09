import inquirer from "inquirer"
import fs from "fs"

const generateReadMe = ({title, description, installation, usage, contribution, test, license, username, repository}) => 
    `# ${title}

## Table of Contents
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#Usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Walkthrough Video and Screenshots](#walkthrough-video-and-screenshots)
- [Questions](#questions)

## Description 

${description}

## License

${license}

## Installation 

${installation}

## Usage 

${usage}

## Contributing

${contribution}

## Tests

${test}

## Walkthrough Video and Screenshots

[Install 'package.json' command](./assets/package-json-install.png)<br/>
[Install 'inquirer' command](./assets/inquirer-install.png)<br/>
['package.json' contents](./assets/packagejson-contents.png)<br/>
['.gitignore' contents](./assets/gitignore-contents.png)<br/>

## Questions

Please guide any questions to:

- ${username}
- [${repository}](${repository})

    `;


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your ReadMe.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter the installation instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter the usage information.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter your contribution guidelines.',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter your test instructions.',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Which license is your project using?',
            name:'license',
            choices: [
                {name: 'MIT License', value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
                {name: 'Apache License 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
                {name: 'Unlicense', value: 'Unlicensed'}
                ]
        },
        {
            type: 'input',
            message: 'Enter your github username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter your github repository link.',
            name: 'repository',
        },
    ])
    .then ((answers) => {
        const readmePageContent = generateReadMe(answers);

        fs.writeFile('ReadMe.md', readmePageContent, (err) => 
            err ? console.log(err) : console.log("Successfully created ReadMe!")
        );
    });