import inquirer from "inquirer"
import fs from "fs"

const generateReadMe = ({}) => {}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter a dscription of your project.',
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
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'BSD Licenses', 'Creative Commons Attribution-NonCommercial-NoDerivs (CC-BY-NC-ND)', 'Unlicense']
        }

    ])
    .then ()