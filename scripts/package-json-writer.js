/* This script reads the package.json file, makes any necessary adjustments 
to the JSON object, and writes the updated package.json file to a 
specified output directory. 
The output directory defaults to "./dist", but can be changed by updating the
"outputDirectory" variable. 
If any errors occur during this process, the script will log an error message to the console.
Add the following to package.json scripts section
"write-package-json": "node ./scripts/package-json-writer.js"
*/
import fs from 'fs';
import path from 'path';

const outputDirectory = './dist';

try {
  // ensure the output directory exists
  fs.mkdirSync(outputDirectory, { recursive: true });

  // copy package.json to the output directory
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const newPackagePath = path.join(outputDirectory, 'package.json');
  fs.copyFileSync(packageJsonPath, newPackagePath);

  console.log(`The package.json file has been copied to ${newPackagePath}.`);
} catch (error) {
  console.error(`An error occurred while processing the package.json file: ${error.message}`);
}
