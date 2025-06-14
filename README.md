# 🚀 Git Commit Message Generator (gitcommitgen)

**Auto-generate meaningful and conventional commit messages using AI!**

This CLI tool uses the power of Google Gemini AI to generate commit messages based on your latest staged changes. It's designed for developers who want clean, descriptive, and standardized commit messages without the hassle.

---

## ✨ Features

- 🤖 AI-generated commit messages
- ✅ Follows conventional commit format (`feat:`, `fix:`, `chore:`, etc.)
- ⚡ Fast and easy to use from the command line
- 📦 Lightweight and minimal setup
- 🧠 Understands your code changes and writes relevant summaries

---

## 📦 Installation

```bash
npm install -g gitcommitgen
```

---

## 🛠️ Usage

1. In your Git project, **stage your changes**:
   ```bash
   git add .
   ```

2. Then simply run:
   ```bash
   gitcommitgen
   ```

3. The tool will:
   - Collect the `git diff` of staged changes
   - Send it to Google Gemini API
   - Print a commit message in the **conventional commit format**

4. Copy the generated message or use it directly as needed:
   ```bash
   git commit -m "✨ Generated commit message"
   ```

---

## 🔐 Environment Variables

To use the Gemini API, create a `.env` file in your project root with:
```env
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 🧪 Example Output

```bash
feat: add user login API with JWT token authentication
```

---

## 💡 Tip

You can alias it to make it even quicker:
```bash
alias gcg="gitcommitgen"
```