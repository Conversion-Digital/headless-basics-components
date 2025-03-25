# <@conversiondigital/headless-basics-components>

## <Overview>

The <@conversiondigital/headless-basics-components> project is a comprehensive UI component library built using React, Next.js, and Tailwind CSS. It offers a modular and customizable set of components that empower developers to rapidly build accessible, themeable, and high-performance web applications.

## <Architecture Overview>

This project is structured in a modular way to separate concerns and enhance scalability. The repository is organized into several key directories:

- **src/**: Contains the core codebase including components, themes, interfaces, and utilities.
- **src/theme/default/**: The default theme providing base styling, layouts, and component variations.
- **src/components/**: Reusable UI components such as buttons, forms, accordions, modals, and more.
- **src/interfaces/**: TypeScript interfaces defining data structures for components and configuration.
- **src/utils/**: Utility functions for string manipulation, theming, URL processing, and reCAPTCHA integration.
- **custom.d.ts**: Type declarations for assets like SVG, PNG, JPG, etc.
- **postcss.config.cjs** and **tailwind.config.mjs**: Configuration files for PostCSS and Tailwind CSS respectively.
- **package.json**: Defines project dependencies, scripts, and build configurations.

This modular structure allows for easy customization, theming, and integration of components into any React or Next.js project. Each component has its own set of associated files for styling (CSS), logic (TypeScript/JavaScript), and schema (for CMS integration with Sanity).

## <Components Overview>

Components in this project are designed as self-contained, reusable pieces of UI that can be combined to build complex interfaces. Key points include:

- **Atomic Design Principles**: Components are built from simple atoms (like buttons, icons, inputs) up to complex organisms (like navigation menus, grids, and layouts).
- **Theming and Customization**: Themes are defined to allow easy switching of visual styles. The default theme is found in the <src/theme/default> directory.
- **CMS Integration**: Sanity is used for content management. Each component includes Sanity schema, mapping, and query files to integrate with dynamic content.
- **TypeScript Interfaces**: Strict typing via interfaces ensures reliable component usage and simplifies development and maintenance.

## <How Components Are Used>

Components are utilized by importing them into your project and configuring them via props. They are designed to be highly customizable and work seamlessly with Next.js for server-side rendering (SSR) and static site generation (SSG). For example, to use a Button component:

``` tsx
import { Button } from &quot;@conversiondigital/headless-basics-components&quot;;

function App() {
  return <Button color=&quot;primary&quot;>Click me</Button>;
}

export default App;
```

The component library also supports theming and responsive design. Global styles are managed via Tailwind CSS, and components can be easily themed using configuration files. Components often have associated developer tools such as DevButton for debugging and dynamic content renderers for integration with headless CMS systems.

## <Installation>

### <Using pnpm>
`
pnpm install https://github.com/Conversion-Digital/headless-basics-components
`

## <Project Structure>

The repository is organized to separate concerns and support modular development. The key directories include:

- **src/**: Core source code.
- **src/theme/**: Themes available for styling components.
- **src/components/**: Reusable UI components.
- **src/interfaces/**: Type definitions.
- **src/utils/**: Utility functions and helpers.

## <Contributing>

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear messages.
4. Push your branch and create a pull request.
5. Ensure your code adheres to the project&apos;s linting and formatting guidelines.

## <License>

This project is licensed under the MIT License. See the LICENSE file for more details.
