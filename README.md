# ADEN UI WORKBENCH

The **Aden UI Workbench** is a specialized laboratory for Angular
developers to build, test, and preview components in a native Aden UI
environment.\
This project ensures that every community contribution aligns with
architectural standards and design language before it gets featured on
the official platform.

## Table of Contents
-   [Prerequisites](#prerequisites)
-   [Quickstart](#quickstart)
-   [Project Structure](#project-structure)
-   [Usage & Workflow](#usage--workflow)
-   [Technical Requirements](#technical-requirements)
-   [Submission Process](#submission-process)
-   [Author](#author)


## Prerequisites

Before you start crafting, ensure you have the following installed:
-   **Node.js**
-   **Git**


## Quickstart

### 1. Fork the Repository

Click the **Fork** button at the top right of the GitHub page to create
your own copy.

### 2. Clone your Fork
``` bash
git clone https://github.com/YOUR_USERNAME/aden-ui-community.git
cd aden-ui-community
```

### 3. Install Dependencies
``` bash
npm install
```

### 4. Launch the Workbench
``` bash
ng s -o
```

Access the environment at:
    http://localhost:4200


## Project Structure
This project is structured to keep the workbench engine separate from
your creative work.

```
|-- 📁 src/
|   |-- 📁 app/
|   |   |-- 📁 contributions/   <-- YOUR WORKSPACE (Focus here)
|   |   |   |-- 📁 my-component/
|   |   |   |   |-- my-comp.ts, .html, .scss
|   |   |
|   |   |-- 📁 pages/
|   |   |   |-- 📁 workbench/   <-- Register your contribution here
|   |   |   |-- 📁 home/
|   |   |
|   |   |-- 📁 shared/          <-- Internal UI elements (Playground, BaseUi)
|   |   |-- 📄 app.routes.ts    <-- Routing configuration
|   |
|   |-- 📄 _variables.scss  <-- Global colors (The Source of Truth)
|   |   📄 styles.scss      <-- Global resets & imports
|   |-- 📄 main.ts              <-- Application entry point
|
|-- 📄 angular.json             <-- Build & PrismJS configuration
|-- 📄 package.json             <-- Dependencies & Scripts
```

## Usage & Workflow

### 1. Developing your Component

Open:

    src/app/contributions/my-contribution/

This folder is pre-configured with the `<app-ui-playground>` wrapper.\
Edit the files and see your changes instantly in **Lab Mode**
(`/workbench`).

### 2. Handling Metadata

Inside your component's `.ts` file, you must fill out the `meta`
object.\
This data generates the header in the playground:

-   **Title** -- Name of your component\
-   **Description** -- Short explanation of its purpose\
-   **Username** -- Your Aden UI username for credits

### 3. Multiple Components

If you want to submit multiple elements, generate a new component:

``` bash
ng generate component contributions/your-component-name
```

To preview it, swap the selector in:

    src/app/pages/workbench/workbench.component.html


## Technical Requirements

To ensure your component is accepted for the Aden UI library, it must follow these rules:

- **Standalone**: All components must be `standalone: true`.
- **Signals**: Use Angular Signals for state management (`input()`, `computed()`, `signal()`).
- **Playground**: The component template must be wrapped in `<app-ui-playground>`.
- **Design Tokens**: Prioritize using the global CSS variables from `_variables.scss` for all styling to ensure UI consistency. If you need to define custom colors, declare them in the `:host` selector using the `--aden-` prefix and a clear, descriptive name.
- **Required Workbench Variables**: The variables `codeHtml`, `codeScss`, `codeTs`, and `installCode` must be filled with the final, production-ready code. These are used to generate the live preview, provide copy-paste snippets for other developers, and generate installation instructions. They must not be left empty or contain placeholder content.

## Submission Process

Once your component is polished and ready:

### 1. Commit your changes

``` bash
git add .
git commit -m "feat: added [component name]"
```

### 2. Push to your Fork

``` bash
git push origin main
```

### 3. Submit URL

Copy the URL of your GitHub Fork and paste it into the contribution form on:
https://adenui.com/contribution


## Author

**Adrian Enßlin**\
Creator of Aden UI

