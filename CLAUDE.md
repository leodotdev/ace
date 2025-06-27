# Claude Development Notes

This file contains development notes, patterns, and reminders for working with Claude on this project.

## Project Overview
- Next.js application with React 19
- Uses pnpm for package management
- BaseUI for component library (@base-ui-components/react)
- TailwindCSS for styling
- Git repository: https://github.com/leodotdev/ace

## Development Workflow
- Continuously update this CLAUDE.md file with development notes
- Add helpful comments throughout the codebase
- Regular git commits and pushes during development
- Document patterns, decisions, and important implementation details

## Commands to Remember
```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build
pnpm build

# Lint (if available)
pnpm lint

# Test (if available)
pnpm test
```

## Recent Changes
- Initial setup with Next.js
- Added pnpm-lock.yaml
- Connected to GitHub repository

## Performance Notes
- Hero background effect was causing performance issues (Performance score: 68)
- Need to optimize visual effects for better Lighthouse scores

## BaseUI Configuration
- Package: @base-ui-components/react v1.0.0-beta.0
- Tree-shakeable component library
- Use compound components pattern (Root, Trigger, Portal, etc.)
- Apply styling with TailwindCSS classes

### BaseUI Component Usage Pattern
```tsx
import { Component } from '@base-ui-components/react/component';

// Use compound components
<Component.Root>
  <Component.Trigger />
  <Component.Portal>
    <Component.Positioner>
      <Component.Content />
    </Component.Positioner>
  </Component.Portal>
</Component.Root>
```

### Available BaseUI Components (v1.0.0-beta.0)
**Form & Input:**
- Checkbox, Checkbox Group, Radio, Radio Group
- Input, Number Field, Switch, Slider
- Select, Field, Fieldset, Form

**Layout & Navigation:**
- Accordion, Collapsible, Tabs, Toolbar
- Menu, Menubar, Context Menu, Navigation Menu
- Separator, Scroll Area

**Feedback & Overlay:**
- Dialog, Alert Dialog, Popover, Tooltip
- Toast, Progress, Meter
- Avatar, Preview Card

**Interactive:**
- Toggle, Toggle Group
- use-button hook (no Button component yet)

**Note:** BaseUI doesn't have a Button component yet, use styled HTML buttons with Tailwind

## Web App Studio Architecture

### Core Concept
Building a visual web app studio similar to Subframe/Plasmic/Framer, specifically for NextJS + BaseUI + Tailwind development.

### Key Features
- **Layout**: Sticky left/right panels with resizable canvas in center
- **Left Panel Tabs**: AI Chat History, Component Tree, Pages, Assets
- **Right Panel**: Properties inspector for selected elements
- **Canvas**: Buttery smooth zoom, multi-select elements
- **AI Workflow**: Select elements and prompt "add nav" → agent generates code
- **Output**: Pure NextJS apps using only BaseUI components + Tailwind
- **Asset Management**: Images, icons, files, and reusable components
- **Design System**: Editable Tailwind/BaseUI tokens and component variants

### Technical Stack
- Frontend: NextJS 15 + React 19 + TypeScript
- Components: BaseUI + Tailwind CSS (no plain HTML buttons/elements)
- Canvas: Custom zoom/pan implementation with smooth performance
- Multi-select: Advanced selection system for canvas elements
- AI Integration: Claude/OpenAI for code generation
- Code Generation: NextJS project output with BaseUI components

### Canvas Requirements
- Smooth zoom (60fps+) using CSS transforms
- Multi-select with bounding box selection
- Drag and drop for components
- Real-time preview of generated components
- Responsive preview modes

### Component System
- All UI uses BaseUI components (Button, Dialog, Popover, etc.)
- Tailwind for styling with custom design tokens
- Component variants using Tailwind's variant system
- Reusable component library built by users

## TODO
- [x] Install BaseUI dependencies
- [x] Set up root layout with isolation styles
- [ ] Plan application architecture and core features
- [ ] Set up main layout with sticky left/right panels
- [ ] Implement canvas with smooth zoom functionality
- [ ] Create left panel with tabs (AI, tree, pages, assets)
- [ ] Build right panel properties inspector
- [ ] Implement multi-select functionality for canvas elements
- [ ] Create AI chat integration for element generation
- [ ] Build NextJS project generation system
- [ ] Implement asset management system
- [ ] Create design system editor for Tailwind/BaseUI

---
*Last updated: 2025-06-27*