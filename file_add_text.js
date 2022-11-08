const fs = require('fs');
  
// Get the file contents before the append operation
 console.log("\nFile Contents of file before append:",
   fs.readFileSync("text_file.txt", "utf8"));
  
fs.appendFile("text_file.txt", ". this is koushiki jaiswal", (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("text_file.txt", "utf8"));
  }
});