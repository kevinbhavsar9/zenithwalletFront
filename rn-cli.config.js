const nodeLibs = require("node-libs-browser");
const util = require("util");
module.exports = {
  resolver: {
    extraNodeModules: [nodeLibs, util],
  },
};
