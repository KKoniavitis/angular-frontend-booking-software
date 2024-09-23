import * as openpgp from "@protontech/openpgp";
import { promises } from "fs";
import path from "path";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";

const yargs = _yargs(hideBin(process.argv));

const APP_UI_ENCRYPTION_KEY = yargs.argv["_"][0];
const INPUT_FILE_PATH = yargs.argv["_"][1];

if (!APP_UI_ENCRYPTION_KEY) {
  console.error("Script param: Encryption Key parameter is missing or empty!");
  console.log(`Usage: ${yargs.argv["$0"]} <encryption_key> <input_file_path>`);
  process.exit(1);
}

if (!INPUT_FILE_PATH) {
  console.error("Script param: Input File Path key parameter is missing or empty!");
  console.log(`Usage: ${yargs.argv["$0"]} <encryption_key> <input_file_path>`);
  process.exit(1);
}

const encryptedFilePath = path.join(process.env.INIT_CWD, INPUT_FILE_PATH);

(async () => {
  try {
    const encryptedFileData = await promises.readFile(encryptedFilePath, "utf8");

    const { data } = await openpgp.decrypt({
      message: await openpgp.readMessage({ armoredMessage: encryptedFileData }),
      passwords: [APP_UI_ENCRYPTION_KEY]
    });

    await promises.writeFile(encryptedFilePath, data);
    //writeFileSync(filePath, decryptedFileData,{encoding: "utf8", flag: "w"})
    console.log("Decryption successful!");
  } catch (error) {
    console.error("Decryption failed:", error.message || error);
  }
})();
