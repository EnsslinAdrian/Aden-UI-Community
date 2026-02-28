# ADEN UI WORKBENCH

The **Aden UI Workbench** is a professional laboratory for Angular
developers to build, test, and preview premium components inside a
native Aden UI environment.

It ensures that every community contribution aligns with Aden UI's
architectural standards, design language, and quality requirements
before it gets featured on the official platform.

With the introduction of the **Multi-File Engine**, contributors can now
structure their components like real production packages --- including
dedicated folders for logic, services, interfaces, and documentation.

------------------------------------------------------------------------

## Prerequisites

-   Node.js (v18.13.0 or higher)
-   Angular CLI (v18 or higher)
-   Git

------------------------------------------------------------------------

## Quickstart

### 1. Fork & Clone

``` bash
git clone https://github.com/YOUR_USERNAME/aden-ui-community.git
cd aden-ui-community
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Launch the Workbench

``` bash
ng serve -o
```

Open: http://localhost:4200

------------------------------------------------------------------------

## Project Structure

    |-- src/
    |   |-- app/
    |   |   |-- contributions/        <-- YOUR WORKSPACE
    |   |   |   |-- my-contribution/
    |   |   |   |   |-- interfaces/
    |   |   |   |   |-- services/
    |   |   |   |   |-- my-component/
    |   |   |   |   |-- docs.md
    |   |   |   |   |-- my-contribution.ts
    |   |   |   |   |-- my-contribution.html
    |   |   |
    |   |   |-- pages/workbench/
    |   |   |-- shared/
    |   |
    |   |-- _variables.scss
    |-- typings.d.ts

------------------------------------------------------------------------

## Technical Requirements

-   Components must be standalone: true
-   Must use Angular Signals (input, output, signal, computed)
-   No hardcoded colors (use \_variables.scss tokens)
-   Must be responsive down to 320px
-   codeHtml, codeScss, codeTs and installCode must contain final
    production-ready code

------------------------------------------------------------------------

## Submission Process

``` bash
git add .
git commit -m "feat: added component"
git push origin main
```

Submit your fork at: https://adenui.com/contribution

------------------------------------------------------------------------

## License

MIT License (see LICENSE file)

------------------------------------------------------------------------

## Author

Adrian Enßlin\
Creator of Aden UI
