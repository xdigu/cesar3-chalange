const fs = require("fs");

module.exports = {
  saveJSON: (objectToSave, cbError) => {
    fs.writeFile("answer.json", JSON.stringify(objectToSave), "utf8", err =>
      cbError(err)
    );
  },
};
