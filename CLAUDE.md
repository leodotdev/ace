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

### Available Components to Prioritize
- Popover, Dialog, Menu, Accordion
- Button, Checkbox, Radio, Switch  
- Select, Slider, Progress
- Tooltip, Alert Dialog

## TODO
- [x] Install BaseUI dependencies
- [ ] Set up root layout with isolation styles
- [ ] Implement optimized hero background effect
- [ ] Add comprehensive comments to components
- [ ] Document component patterns and conventions
- [ ] Set up proper linting and testing workflows

---
*Last updated: 2025-06-27*