#!/usr/bin/env node


// Above command for Globaly access command for passgen, check package.json

const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log



const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')


program.version('1.0.0').description('Simple Password Generator')


// program.command('generate').action(() => {
//     // console.log("Generated") // for extra command like [ node index generate ]
// }).parse()

program
    .option('-l, --length <number>', 'length of password', '8') // to see and test run console.log(program.opts())
    .option('-s, --save', 'Password saved to the file password.txt')
    .option('-nn, --no-numbers', 'removed numbers')
    .option('-ns, --no-symbols', 'removed symbols')
    .parse()

// console.log(program.opts())

const { length, save, numbers, symbols } = program.opts();

// get generated password
const generatedPassword = createPassword(length, numbers, symbols)


// Save Password to a file

if (save) {
    savePassword(generatedPassword)
}


// copy to clipboard

clipboardy.writeSync(generatedPassword)


// Output generated password
log(chalk.red('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))



