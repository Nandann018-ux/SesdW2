# My Custom OOP CLI Tool

Hey there! 👋 Welcome to my custom Command Line Interface (CLI) project. I built this tool using **Node.js** and **TypeScript** to demonstrate core Object-Oriented Programming (OOP) concepts in a real-world application.

##  What's Inside?

This isn't just a simple script—it's a fully structured, modular CLI engine. I've packed it with **10 custom commands**, ranging from local system utilities to live API integrations. 

Here are some of the cool features:
- **OOP Architecture**: Everything is built around a robust `CliEngine` class and modular `BaseCommand` extensions.
- **Input Validation**: Uses `Zod` to ensure you don't accidentally break things with bad inputs!
- **Beautiful Output**: Features colorful console logs using `Chalk`.
- **API Integrations**: Fetches live data from GitHub, current weather, and randomized quotes.

### The Custom CLI Banner 🎨
Whenever you run the tool without any specific commands (just `npm start`), you'll be greeted by a custom, block-filled **"FAHHH"** ASCII art banner! I used `figlet` (specifically the Star Wars font) and `chalk` to give it a bold, solid white look before displaying the help menu.

##  How to Use It

It's super easy to get started. Just clone the repo, install the dependencies, and use the `npm start` command!

```bash
# Install dependencies
npm install

# See the custom FAHHH banner and the help menu
npm start

# Test out some of the 10 commands!
npm start -- greet "Your Name"
npm start -- add 10 25
npm start -- github octocat
npm start -- weather London
npm start -- quote
npm start -- sysinfo
```

Enjoy exploring the CLI! Feel free to poke around the `/src` directory to see how the OOP patterns are set up.
