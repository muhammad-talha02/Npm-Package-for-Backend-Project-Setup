import fs from "fs-extra";

export default async function ModifyPackageJsonFile() {
  console.log("start");
  const packageJson = await fs.readJson("package.json");
  packageJson.type = "module";
  packageJson.scripts = {
    ...packageJson.scripts,
    dev:"node server.js"
  }
  await fs.writeJson("package.json", packageJson, { spaces: 2 });
}

export function CheckDirectoryAlreadyExist(dir) {
  return fs.existsSync(dir);
}
