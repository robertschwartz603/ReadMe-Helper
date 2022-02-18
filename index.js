const inquirer = require('inquirer');
const fs = require('fs');


const Badges = {
    None: "None",
    "Apache License 2.0": `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    "MIT": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
};
   
//terminal user prompt

inquirer
    .prompt([
        {
            type: 'input',
            message: 'whats your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'please provide a short description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'provide contribution guidelines',
            name: 'contribute',
        },
        {
            name: 'license',
            type: 'list',
            message: 'Please select the license of your repo:',
            choices: [
                "None",
                "Academic Free License v3.0",
                "Apache license 2.0",
                "Artistic license 2.0",
                "Boost Software License 1.0",
                "BSD 2-clause 'Simplified' License",
                "BSD 3-clause 'New' or 'Revised' license",
                "BSD 3-clause Clear license",
                "Creative Commons license family",
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What The F*ck You Want To Public License (yes this is real)",
                "Educational Community License v2.0",
                "Eclipse Public License 1.0",
                "Eclipse Public License 2.0",
                "European Union Public License 1.1",
                "GNU Affero General Public License v3.0",
                "GNU General Public License family",
                "GNU General Public License v2.0",
                "GNU General Public License v3.0",
                "GNU Lesser General Public License v2.1",
                "GNU Lesser General Public License v3.0",
                "ISC",
                "LaTeX Project Public License v1.3c",
                "Microsoft Public License",
                "MIT",
                "Mozilla Public License 2.0",
                "Open Software License 3.0",
                "PostgreSQL License",
                "SIL Open Font License 1.1",
                "University of Illinois/NCSA Open Source License",
                "The Unlicense",
                "zLib License",
            ],
        },
        {
            type: 'input',
            message: 'Status of testing?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Enter GitHub username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'name of project repo (must be exact):',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'Provide a contact email:',
            name: 'email',
        },
    ])

    .then(({ title, description, install, usage, contribute, license, test, github, repo, email }) => {
        fs.writeFile('README.md',

            //below is a template literal for a README file.
`# ${title}

![GitHub](https://img.shields.io/github/license/${github}/${repo})

## Description

${description}

----------------------------------------

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#how-to-contribute)
- [Questions](#questions)
- [Testing](#testing)
- [License](#license)

----------------------------------------

## Installation

${install}

## Usage

${usage}

## How to Contribute

${contribute}

## Questions

Github: https://github.com/${github}

Email: ${email}

## Testing

${test}

## License

This project and it's contents are licensed under: ${license}

--------

[![License](https://img.shields.io/badge/License-${license}-yellowgreen.svg)]`,

//End README.md styling

//error and/or status logger at completion of writeFile

            (err) => err ? console.error(err) : console.log('README.md successfully created'))
    });



