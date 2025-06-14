const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCommitMessage(diffText, callback) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
You are an assistant that writes clean, descriptive, and conventional Git commit messages.

## Format
Always use this format:
<type>: <short description>

Valid types include: feat, fix, docs, refactor, style, test, chore

## Rules:
- Use present tense ("add", not "added")
- Be specific and concise (max 10-12 words)
- Don't include files or filenames
- Only return the commit message — nothing else

## Example:
diff: (some example diff)

Output:
feat: add search input to navbar

Now generate a commit message for this diff:

\`\`\`diff
${diffText}
\`\`\`
`;
    ;

    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();
    
    callback(null, response);
  } catch (err) {
    callback(`❌ Error generating commit message: ${err.message}`, null);
  }
}

module.exports = { generateCommitMessage };
