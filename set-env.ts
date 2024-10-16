const { writeFile } = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
  apiKey: '${process.env["API_KEY"]}'
};
`;

writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPath}`);
});