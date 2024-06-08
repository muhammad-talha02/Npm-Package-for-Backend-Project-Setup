import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import { promisify } from "util";
import { execSync } from "node:child_process";

//? Es Module -> in ES6 we get Directory Name in this way
const __filename = fileURLToPath(import.meta.url); // Return File Name
const __dirname = path.dirname(__filename); // Return Directory Name

//? Get Template Directory path of our template files
const CURRENT_TEMPLATE_DIR = path.join(__dirname, "..", "template"); // path of our template

const PromoptQuestions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project name?",
    default: "backend-app",
  },
];

async function main() {
  const answers = await inquirer.prompt(PromoptQuestions);
  console.log("answers", answers);
  const { projectName } = answers;

  //? Current Target Directory to Setup Project
  const USER_TARGET_DIR = path.join(process.cwd(), projectName);

  //? Copy All Template files in new Created ProjectName Folder
  await fs.copy(CURRENT_TEMPLATE_DIR, USER_TARGET_DIR);

  //? Now Execute Commands (Install Dependencies) in New Created Project
  console.log(chalk.blue("Starting....."));
  
  process.chdir(USER_TARGET_DIR);
  console.log("User directory", USER_TARGET_DIR)
    
  if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`Directory ${projectName} already exists. Please choose another name.`));
    process.exit(1);
  }

  try {
    execSync('npm init -y', { cwd: USER_TARGET_DIR, stdio: 'inherit' });
    console.log(chalk.blue("Installing Dependencies....."));
    console.log(chalk.red("Please wait.... 😎"));
    execSync('npm install express dotenv', { cwd: USER_TARGET_DIR, stdio: 'inherit' });
    console.log(chalk.green("Dependencies installed successfully!"));
  } catch (err) {
    console.error(chalk.blue("Error installing dependencies:"), err.message);
    process.exit(1);
  }


  console.log(
    chalk.green(`\nSuccess! Created ${projectName} in \n ${USER_TARGET_DIR}\n`)
  );
  console.log(`cd ${answers.projectName}`);
  console.log(chalk.cyan("\n  npm start\n"));
  console.log(chalk.blue("Happy coding!\n"));
}

main();
