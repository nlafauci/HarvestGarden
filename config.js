const CryptoJS = require('crypto-js');

// Generate a random secret key
const secretKey = CryptoJS.lib.WordArray.random(32).toString();

// Export the secret key
module.exports = {
  secretKey: secretKey,
  // Other configuration options...
};