import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import CommandExecution from "./CommandExecution.js";

//? Es Module -> in ES6 we get Directory Name in this way
const __filename = fileURLToPath(import.meta.url); // Return File Name
const __dirname = path.dirname(__filename); // Return Directory Name

//? Get Template Directory path of our template files
const TEMPLATE_DIR = path.join(__dirname, "..", "template"); // path of our template

const PromoptQuestions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project name?",
    default: "backend-app",
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter a secure password:',
  },
  {
    type: 'list',
    name: 'theme',
    message: 'Choose a theme:',
    choices: ['Light', 'Dark', 'Solarized'],
  },
];

async function main() {
  const answers = await inquirer.prompt(PromoptQuestions);
  console.log("answers", answers);
  console.log(chalk.blue('Installing dependencies...'));

//  await CommandExecution("npm install express dotenv")

//? Current Target Directory to Setup Project
const targetDir = path.join(process.cwd(), answers.projectName);

// await fs.copy(TEMPLATE_DIR, targetDir);

}

main();
