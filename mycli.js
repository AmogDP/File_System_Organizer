#!/usr/bin/env node

let helpfn = require("./Commands/help");
let organizeFn = require("./Commands/organize");
let viewFn = require("./Commands/view");

let input = process.argv.slice(2);

let command = input[0];

switch(command){
    case "view":
        viewFn.view(input[1], input[2]);
        break;
    case "organize":
        organizeFn.organize(input[1]);
        break;
    default: //help
        helpfn.help();
        break;
}