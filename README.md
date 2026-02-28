# ADEN UI WORKBENCH v1.1.0

The **Aden UI Workbench** is a professional laboratory for Angular developers to build, test, and preview premium components inside a native Aden UI environment.

It ensures that every community contribution aligns with Aden UI's architectural standards, design language, and quality requirements before it gets featured on the official platform.

### 🚀 What's new in v1.1.0?
With the introduction of the **Multi-File Engine**, contributors can now structure their components like real production packages — including dedicated folders for logic, services, interfaces, and automated Markdown documentation.

---

## Table of Contents
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Project Structure](#project-structure)
- [Usage & Workflow](#usage--workflow)
- [Technical Requirements](#technical-requirements)
- [Submission Process](#submission-process)
- [License](#license)
- [Author](#author)

---

## Prerequisites

Before you start crafting, ensure you have the following installed:
- **Node.js** (v18.13.0 or higher)
- **Angular CLI** (v18.0.0 or higher)
- **Git**

---

## Quickstart

### 1. Fork the Repository
Click the **Fork** button at the top right of the GitHub page to create your own copy.

### 2. Clone your Fork
```bash
git clone https://github.com/YOUR_USERNAME/aden-ui-community.git
cd aden-ui-community
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Launch the Workbench
```bash
ng s -o
```
Open: http://localhost:4200

---

## Project Structure

The v1.1.0 structure separates the engine from your workspace, allowing for complex multi-file components.

```text
|-- 📁 src/
|   |-- 📁 app/
|   |   |-- 📁 contributions/       <-- YOUR WORKSPACE
|   |   |   |-- 📁 my-contribution/
|   |   |   |   |-- 📁 interfaces/  <-- (Optional) Type definitions
|   |   |   |   |-- 📁 services/    <-- (Optional) Logic services
|   |   |   |   |-- 📁 my-component/ <-- Your actual logic/templates
|   |   |   |   |-- 📄 docs.md      <-- TECHNICAL DOCUMENTATION
|   |   |   |   |-- 📄 my-contribution.ts   <-- The Playground Bridge
|   |   |   |   |-- 📄 my-contribution.html <-- The Visual Wrapper
|   |   |
|   |   |-- 📁 pages/workbench/     <-- Register component here
|   |   |-- 📁 shared/              <-- Internal UI engine
|   |
|   |-- 📄 _variables.scss          <-- Global Design Tokens
```

---

## Usage & Workflow

### 1. Developing your Component
Open `src/app/contributions/my-contribution/`. You can rename or delete the starter `my-component/` folder and add your own structure (folders for interfaces, child-components, etc.).

### 2. The Logic Bridge (`my-contribution.ts`)
To show your code in the playground tabs, use Import Attributes. This automatically loads your files as raw text:

```typescript
// @ts-expect-error
import htmlCode from './my-component/my-component.html' with { loader: 'text' };

// Register in the files array:
files: PlaygroundFile[] = [
  { name: 'component.html', language: 'markup', code: htmlCode }
];
```

> **Note:** Always use `language: 'markup'` for HTML files to enable correct highlighting.

### 3. Documentation (`docs.md`)
Ditch JSDoc clutter! Fill out the `docs.md` file in your contribution folder. The Workbench automatically renders this file into a beautiful API reference in the **Docs** tab.

### 4. Handling Metadata
Inside `my-contribution.ts`, fill out the `meta` object. This generates the header:
- **Title:** Name of your component.
- **Description:** Short explanation of its purpose.
- **Username:** Your Aden UI username for credits.

---

## Technical Requirements

To ensure your component is accepted for the official library:

- **Standalone:** All components must be `standalone: true`.
- **Signals:** Mandatory use of Angular Signals (`input()`, `computed()`, `signal()`, `output()`).
- **Playground:** Templates must be wrapped in `<app-ui-playground>`.
- **Responsive:** Layouts must function flawlessly down to 320px width.
- **Design Tokens:** Never hardcode hex colors. Prioritize global variables from `_variables.scss` and prefix custom variables with `--aden-`.
- **Clean Code:** Keep logic files lean. Move all technical API descriptions to `docs.md`.

---

## Submission Process

Once your component is polished:

### 1. Commit your changes
```bash
git add .
git commit -m "feat: added [component name]"
```

### 2. Push to your Fork
```bash
git push origin main
```

### 3. Submit URL
Copy your Public Fork URL and paste it into the form at:
[https://adenui.com/contribution](https://adenui.com/contribution)

---

## License

This project is licensed under the **Aden UI Community License**.

- **Usage:** Free for personal and educational use. Commercial use (selling or sub-licensing) is strictly prohibited.
- **Contributions:** By submitting a contribution, you retain your copyright but grant Aden UI (Adrian Enßlin) a perpetual, commercial license to use and distribute your work as part of the official library.

For full details, please refer to the [LICENSE](./LICENSE) file.

---

## Author

**Adrian Enßlin**
Creator of Aden UI
