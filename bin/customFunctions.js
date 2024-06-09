import fs from "fs-extra";

export default async function ModifyPackageJsonFile() {
    console.log("start");
        const data = await fs.readJson("package.json");
        data.type = "module"
        console.log("data", data);
        await fs.writeJson("package.json", data, {spaces:2})
};

// ModifyPackageJsonFile();
