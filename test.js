const { getStagedDiff } = require('./src/git');
const { generateCommitMessage } = require('./src/generateMessage');

(async () => {
  await getStagedDiff(async (err, diff) => {
    if (err) {
      console.error(err);
      return;
    }

    await generateCommitMessage(diff, (err, message) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('✅ Suggested commit message:\n');
      console.log(message);
    });
  });
})();
