const { exec } = require('child_process');

// Function to get the staged git diff
async function getStagedDiff(callback) {
  exec('git diff --cached', (error, stdout, stderr) => {
    if (error) {
      callback(`❌ Error executing git diff: ${error.message}`, null);
      return;
    }

    if (stderr) {
      callback(`⚠️ Git stderr: ${stderr}`, null);
      return;
    }

    if (!stdout.trim()) {
      callback('⚠️ No staged changes found. Please stage your files using git add.', null);
      return;
    }

    callback(null, stdout);
  });
}

module.exports = { getStagedDiff };
