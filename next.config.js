const path = require("path");

module.exports = {
  future: {
    webpack5: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
