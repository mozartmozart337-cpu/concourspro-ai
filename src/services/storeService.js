const fs = require("fs");

const file = "./src/data/store.json";

function read() {
  if (!fs.existsSync(file)) return { users: {}, progress: {} };
  return JSON.parse(fs.readFileSync(file));
}

function write(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = { read, write };
