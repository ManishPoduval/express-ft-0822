
// import chalk from 'chalk';
// import data, {info, name} from './main.js'


// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

// console.log(chalk.blue('Hello world!'));

// import http from 'http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Manish');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import express from 'express'
const app = express()
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
    console.log('In the middleware')
    next();
})

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res, next) {
  res.sendFile( __dirname + '/views/home.html')
})

app.get('/about', function (req, res) {
    res.sendFile( __dirname + '/views/about.html')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})