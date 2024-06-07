// Top of the file
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = path.join(__dirname, '..', 'template');
const execAsync = promisify(exec);

// Main execution
try {
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
      default: 'my-node-app',
    },
  ]);

  const targetDir = path.join(process.cwd(), projectName);

  // Copy template
  await fs.copy(TEMPLATE_DIR, targetDir);

  // Install dependencies
  console.log(chalk.blue('Installing dependencies...'));
  process.chdir(targetDir);
  const { stdout } = await execAsync('npm install express dotenv');
  console.log(stdout);

  console.log(chalk.green(`\nSuccess! Created ${projectName} at ${targetDir}`));
  console.log('Inside that directory, you can run:');
  console.log(chalk.cyan('\n  npm start\n'));
  console.log('Happy coding!');
} catch (error) {
  console.error(chalk.red(error));
  process.exit(1);
}