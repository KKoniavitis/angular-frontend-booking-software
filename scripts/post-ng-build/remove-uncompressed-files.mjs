import fs from "fs";
import path from "path";

const buildPath = "dist/angular-redux-rxjs-clean-architecture-skeleton";

fs.readdir(buildPath, (err, files) => {
  if (err) {
    console.error("Error reading directory contents:", err);
    return;
  }

  // Filter files to keep only those with the .js extension
  const jsFiles = files.filter((file) => path.extname(file).match(/\.(js|css|svg|txt|eot|otf|ttf|gif)$/));

  // Delete each file
  jsFiles.forEach((file) => {
    const filePath = path.join(buildPath, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${filePath}`);
  });

  console.log("Uncompressed files deleted successfully!");
});
