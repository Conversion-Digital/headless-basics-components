# @conversiondigital/cd-headless-component-lib

> **Headless UI + React + Tailwind** component library for building custom user interfaces.

This repository contains a collection of React (and Next.js–compatible) components, styles, utilities, and example stories. You can integrate these components into your Next.js projects—or any React-based workflow—to accelerate your UI development.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Local Development](#local-development)
6. [Storybook](#storybook)
7. [Environment Details](#environment-details)
8. [Scripts](#scripts)
9. [Project Structure](#project-structure)
10. [Contributing](#contributing)
11. [License](#license)

---

## Overview

This library includes various UI primitives and components built with **React**, **TypeScript**, and **Tailwind CSS**. Many components are wrapped around [Radix UI](https://www.radix-ui.com/) primitives (e.g., `Dropdown`, `Popover`, `Dialog`, etc.) and integrated with **daisyUI** plus standard Tailwind classes.

Some highlights:

- Multiple reusable UI elements: **Accordion**, **Alert Dialog**, **Badges**, **Buttons**, **Checkboxes**, **Dropdowns**, **Menus**, **Navigation** bars, **Modals**, **Tables**, **Tabs**, **Tooltips**, etc.
- Utility hooks and functions for working with cookies, color processing, string parsing, dynamic style injection, and more.
- Opinionated color tokens & theming approach with `tailwind.config.cjs`.
- Example usage in `.stories.tsx` files for each component (via **Storybook**).

---

## Features

- **React 18/19+** support (peers listed in `package.json`).
- **Tailwind CSS** for styling and utility classes (plus daisyUI).
- **TypeScript** for type definitions and a consistent developer experience.
- **Radix UI** for accessible, composable UI primitives.
- **Storybook** for local component development and visual documentation.
- **ESLint** + **Prettier** (with recommended configs) to maintain a clean, consistent code style.

---

## Installation

1. **Clone** the repository or add it as a submodule in your own project:

   ```bash
   git clone https://github.com/your-org-or-username/this-repository.git


## 2. Features

- ✅ **Pre-built UI Components** – Ready-to-use, customizable components for faster development.
- 🎨 **Tailwind CSS** – Utility-first CSS framework for styling.
- 🔧 **Headless UI** – Components without styles, making it easy to integrate into any design system.
- ⚛ **React + Next.js** – Optimized for server-side rendering (SSR) and static site generation (SSG).
- 🌙 **Dark Mode Support** – Built-in theme switching.
- 🔄 **Storybook Integration** – Preview, test, and document UI components.
- 🛠 **Utilities & Hooks** – Common utilities for formatting, state management, and data handling.
- 🌐 **Internationalization Ready** – Components designed to support multiple languages.

---

---

## 3. Installation

### Using npm

```
npm install @conversiondigital/cd-headless-component-lib
```

### Using Yarn

```
yarn add @conversiondigital/cd-headless-component-lib
```

---

## 4. Usage

Import and use a component in your React project:

```jsx
import { Button } from "@conversiondigital/cd-headless-component-lib";

function App() {
  return <Button color="primary">Click me</Button>;
}

export default App;
```

Ensure you have Tailwind CSS configured in your project. Add the following to your `tailwind.config.cjs`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@conversiondigital/cd-headless-component-lib/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 5. Components

### Button

```jsx
import { Button } from "@conversiondigital/cd-headless-component-lib";

<Button color="primary">Click me</Button>;
```

### Input

```jsx
import { Input } from "@conversiondigital/cd-headless-component-lib";

<Input placeholder="Enter text" />;
```

### Accordion

```jsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@conversiondigital/cd-headless-component-lib";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Accordion 1</AccordionTrigger>
    <AccordionContent>
      This is the content of the first item.
    </AccordionContent>
  </AccordionItem>
</Accordion>;
```

---

## 6. Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

---

## 7. License

This project is licensed under the MIT License.
