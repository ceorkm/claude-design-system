const fs = require('fs-extra');
const path = require('path');
const os = require('os');

async function installCommands() {
  try {
    const homeDir = os.homedir();
    const claudeDir = path.join(homeDir, '.claude');
    const commandsDir = path.join(claudeDir, 'commands');

    // Ensure .claude/commands directory exists
    await fs.ensureDir(commandsDir);

    // Copy commands to .claude/commands
    const commandsPath = path.join(__dirname, 'commands');
    const commands = await fs.readdir(commandsPath);

    for (const command of commands) {
      const src = path.join(commandsPath, command);
      const dest = path.join(commandsDir, command);
      await fs.copy(src, dest);
    }

    // Create project structure
    const currentDir = process.cwd();
    await fs.ensureDir(path.join(currentDir, 'inspiration'));
    await fs.ensureDir(path.join(currentDir, 'generated'));

    // Create helpful README
    const readmeContent = `# Design System Ready! 🎨

## Quick Start:
1. Add 5-10 inspiration screenshots to /inspiration folder
2. Run: /extract-it "I'm building [your app] for [target users]. I want users to feel [emotion]. I like [what you like about the images]."
3. Run: /design-it "[screen description]"

## Example:
/extract-it "I'm building a fitness app for busy professionals. I want users to feel motivated and organized. I like Airbnb's warm welcoming feeling and Notion's clean organized interface."

## Commands Available:
- /extract-it - Analyze inspiration and create design system
- /expand-it - Add philosophy and usage guidance
- /merge-it - Merge with your app concept
- /design-it - Generate UI screens

Ready to build professional UIs! 🚀
`;

    await fs.writeFile(path.join(currentDir, 'README.md'), readmeContent);

    console.log('✅ Claude Design System installed!');
    console.log('📁 Created: /inspiration and /generated folders');
    console.log('📚 Commands added to ~/.claude/commands');
    console.log('🚀 Ready to use! Check README.md for instructions');

  } catch (error) {
    console.error('❌ Installation failed:', error);
  }
}

installCommands();