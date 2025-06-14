const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCommitMessage(diffText, callback) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
You are an assistant that generates clear and meaningful Git commit messages.

Based on the following Git diff, generate a concise commit message in present tense.

Only return the commit message and nothing else.

\`\`\`diff
${diffText}
\`\`\`
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();
    
    callback(null, response);
  } catch (err) {
    callback(`❌ Error generating commit message: ${err.message}`, null);
  }
}

module.exports = { generateCommitMessage };
