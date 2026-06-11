const fs = require("fs");

class StorageService {

  save(filename, data) {
    fs.writeFileSync(
      filename,
      JSON.stringify(data, null, 2)
    );
  }

  load(filename) {
    if (!fs.existsSync(filename)) {
      return [];
    }

    const content =
      fs.readFileSync(filename);

    return JSON.parse(content);
  }

}

module.exports = new StorageService();
