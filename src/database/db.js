const fs = require("fs");
const path = require("path");

function filePath(file) {
  return path.join(__dirname, file);
}

function read(file) {
  const pathFile = filePath(file);
  if (!fs.existsSync(pathFile)) return [];
  return JSON.parse(fs.readFileSync(pathFile));
}

function write(file, data) {
  const pathFile = filePath(file);
  fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
}

module.exports = { read, write };
