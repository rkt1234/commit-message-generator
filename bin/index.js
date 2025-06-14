#!/usr/bin/env node

const { getStagedDiff } = require('../src/git');
const { generateCommitMessage } = require('../src/generateMessage');

(async () => {
  await getStagedDiff(async (err, diff) => {
    if (err) {
      console.error("❌ Error getting git diff:", err);
      return;
    }

    await generateCommitMessage(diff, (err, message) => {
      if (err) {
        console.error("❌ Error generating commit message:", err);
        return;
      }

      console.log("✅ Suggested commit message:\n");
      console.log(message);
    });
  });
})();
