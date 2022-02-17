const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'whats your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'tell us about yourself!',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'whats your LinkedIn URL?',
            name: 'LinkedIn',
        },
        {
            type: 'input',
            message: 'whats your GitHub URL?',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'insert an image address here!',
            name: 'image',
        },
        {
            type: 'input',
            message: 'favorite band?',
            name: 'band',
        },
    ])

    .then(({ name, location, bio, band, LinkedIn, GitHub, image }) => {
        fs.writeFile('index.html',
            //drop in ReadMe styling here!
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Portfolio Page!</title>
</head>
<body>
    <main>
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="user image">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                <p class="card-text">About Me: ${bio}</p>
                <p class="card-text">My favorite band: ${band}</p>
                <a href="${LinkedIn}" class="card-link">Linkedin</a>
                <a href="${GitHub}" class="card-link">Github</a>
            </div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>
</html>`,

            (err) => err ? console.error(err) : console.log('ReadMe.md successfully created'))
    });