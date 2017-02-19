#!/usr/bin/env node

var program = require('commander')
var path = require('path')
var fs = require('fs')
var readline = require('readline')

program
    .version('1.0.3')
    .description('creat initial react component')
    .option('-s, --semicolon', 'use semicolon in file')
    .parse(process.argv)

main()

function confirm(msg, cb) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question(msg, function (input) {
        rl.close()
        cb(/^y|yes|ok|true$/i.test(input))
    })
}

function loadTemplate(semicolon) {
    var fileName = semicolon ? 'componentS.js' : 'component.js'
    return fs.readFileSync(path.join(__dirname, '../template', fileName), 'utf-8')
}

function write(filePath, str, mode) {
    fs.writeFileSync(filePath, str, { mode: mode || 0666 })
    console.log(`${path.basename(path.resolve(filePath))} done!`)
}

function main() {
    var fileName = program.args.shift()
    if (!fileName) return console.log('there should be a filename!') 
    var filePath = path.resolve('.', fileName + '.js')
    var content = loadTemplate(program.semicolon)
    fs.exists(filePath, function (exists) {
        if (exists) {
            confirm(`ATTENTION: ${fileName} already exists, over write? [y/N] `, function (ans) {
                ans ? write(filePath, content) : console.log('bye!')
            })
        } else {
            write(filePath, content)
        }
    })
}

