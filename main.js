#! usr/bin/env node
// word counter
// Printing a welcome message
console.log("\n\tWelcome to \'Giminikhan\' - Word Counter in Typescript\n");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
