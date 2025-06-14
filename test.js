const { getStagedDiff } = require('./src/git');

(async () => {
  await getStagedDiff((err, diff) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('✅ Git diff:\n');
    console.log(diff);
  });
})();
