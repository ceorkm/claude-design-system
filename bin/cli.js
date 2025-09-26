#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

async function setup() {
  try {
    console.log('🎨 Setting up Claude Design System...');

    const homeDir = os.homedir();
    const claudeDir = path.join(homeDir, '.claude');
    const commandsDir = path.join(claudeDir, 'commands');

    // Create .claude/commands directory
    if (!fs.existsSync(commandsDir)) {
      fs.mkdirSync(commandsDir, { recursive: true });
    }

    // Copy commands from the installed package
    const commandsPath = path.join(__dirname, '..', 'commands');

    if (!fs.existsSync(commandsPath)) {
      console.error('❌ Commands directory not found at:', commandsPath);
      console.error('Package may be corrupted. Try reinstalling.');
      process.exit(1);
    }

    const commands = fs.readdirSync(commandsPath);

    for (const command of commands) {
      const src = path.join(commandsPath, command);
      const dest = path.join(commandsDir, command);
      fs.copyFileSync(src, dest);
    }

    // Create project folders
    const currentDir = process.cwd();
    const inspirationDir = path.join(currentDir, 'inspiration');
    const generatedDir = path.join(currentDir, 'generated');

    if (!fs.existsSync(inspirationDir)) {
      fs.mkdirSync(inspirationDir);
    }
    if (!fs.existsSync(generatedDir)) {
      fs.mkdirSync(generatedDir);
    }

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

    fs.writeFileSync(path.join(currentDir, 'DESIGN-SYSTEM.md'), readmeContent);

    console.log('✅ Setup complete!');
    console.log('📁 Created: /inspiration and /generated folders');
    console.log('📚 Commands installed to ~/.claude/commands');
    console.log('📖 Instructions saved to DESIGN-SYSTEM.md');
    console.log('');
    console.log('🚀 Ready! Add images to /inspiration then run:');
    console.log('/extract-it "your app description"');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

setup();