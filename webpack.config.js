const path = require('path');

module.exports = {
  // Your existing webpack configurations here

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};
