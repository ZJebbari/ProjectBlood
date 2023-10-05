const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      // Define rules for processing different file types (e.g., JavaScript, CSS, etc.)
    ],
  },
};
