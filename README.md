# MyCLI - Node + TypeScript CLI Tool

This is a fully functional Command Line Interface (CLI) tool built using Node.js, TypeScript, and Object-Oriented Programming (OOP) concepts. It was built for the SESD Workshop 2!

## 🚀 Features
- **Object-Oriented Structure**: Every command extends an abstract `BaseCommand` class.
- **API Integrations**: Includes commands to fetch GitHub user info, random quotes, and programming jokes.
- **Utility Commands**: Includes an interactive guessing game, dice roller, calculator, and more.
- **Bonus Flags & Options**: Built-in support for `--help`, `--version`, and an explicit `--loud` flag for greetings.
- **Colored Output**: Utilizes `chalk` for clear visual feedback (errors in red, success in green, data in blue/cyan).

---

## 🛠 Setup Instructions

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended because native fetch is used).
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Compile TypeScript**:
   ```bash
   npm run build
   ```
4. **Link the CLI Globally**:
   ```bash
   # This will create a global symlink so you can run 'mycli' anywhere
   npm link
   ```

---

## 💻 Available Commands

### API Integrations (Mandatory)
- `mycli github <username>` : Fetches public details about a GitHub user.
- `mycli quote` : Displays a random inspirational quote.
- `mycli joke` : Tells a random programming joke.

### Fun & Utilities (7 Additional Commands)
- `mycli greet <name>` : Greets the user. (Bonus: use `--loud` or `-l` to yell the greeting).
- `mycli calc <num1> <operator> <num2>` : Simple calculator supporting `+`, `-`, `*`, `/`.
- `mycli time` : Outputs your current local date and time.
- `mycli roll [sides]` : Rolls an N-sided dice (defaults to 6 if no sides given).
- `mycli guess <number>` : A mini guessing game (guess a number between 1 and 10).
- `mycli reverse <text>` : Reverses any string/text you provide.
- `mycli info` : Displays information about the tool.

---

## 🔥 Example Usage

```bash
# Get GitHub details for 'octocat'
mycli github octocat

# Calculate a sum
mycli calc 50 + 25

# For multiplication, ensure to quote the asterisk so the terminal doesn't confuse it for files:
mycli calc 10 "*" 5

# Yell a greeting using a custom flag
mycli greet Alice --loud

# View all available options
mycli --help
```
