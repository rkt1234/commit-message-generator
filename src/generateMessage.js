const axios = require('axios');

// Replace this with your deployed backend URL
const API_URL = 'http://localhost:3000/generate-commit';

async function generateCommitMessage(diffText, callback) {
  try {
    const response = await axios.post(API_URL, { diffText });

    if (response.data && response.data.message) {
      callback(null, response.data.message);
    } else {
      callback('❌ Unexpected response from the commit message API', null);
    }
  } catch (error) {
    callback(`❌ Error generating commit message: ${error.message}`, null);
  }
}

module.exports = { generateCommitMessage };
