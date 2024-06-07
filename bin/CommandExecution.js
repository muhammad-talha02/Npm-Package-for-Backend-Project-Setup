import { exec } from "node:child_process";

export default async function CommandExecution(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing package: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
