# Merge Design System

Take the expanded analysis from `/generated/competitor-analysis.md` and fuse it with the user's specific app concept to create a unified design system.

## Input:
- User's app concept (from their command message)
- Target users and desired emotions
- Expanded competitor analysis from `/generated/competitor-analysis.md` (created by `/extract-it` and optionally enhanced by `/expand-it`)

## Process:

### 1. Contextual Analysis
Wrap your thoughts in `<pontificating>` tags while considering:
- How can [User's App] benefit from [Airbnb's warmth] + [Notion's clarity]?
- What design elements would make [Target Users] feel [Desired Emotion]?
- Which competitor patterns align with the user's app functionality?
- How to adapt professional design patterns without losing uniqueness?

### 2. Create Unified System
Generate a cohesive design system that:
- **Combines Best Elements**: Cherry-pick the most relevant patterns from analyzed apps
- **Adapts for Context**: Modify colors, typography, components for the user's specific app
- **Maintains Consistency**: Ensure all elements work together harmoniously
- **Solves User Problems**: Focus on elements that help the target users achieve their goals

### 3. Practical Implementation
Include:
- **Color Palette**: Specific hex codes adapted for the user's app context
- **Typography System**: Font choices and sizing that matches the app's personality
- **Component Library**: Buttons, cards, forms designed for the app's use cases
- **Usage Guidelines**: How to apply this system consistently
- **Philosophy Statement**: What this design system represents for the user's brand

## Output:
Save to `/generated/final-design-system.md`:
- App-specific design philosophy
- Complete style guide (colors, typography, components)
- Implementation guidelines
- Usage examples for common app screens

This becomes the blueprint for generating actual UI components with `/design-it`.