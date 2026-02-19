<div align="center">

<img src="https://adenui.com/favicon.ico" alt="Aiden UI" width="80" height="80" />

# AIDEN UI

**Angular Component Library & Collection of Developer Guides**

[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-6366f1?style=flat-square)](LICENSE)

[About This Project](#about-this-project) · [Why Aiden UI Exists](#why-aiden-ui-exists) · [Components](#components) · [Requirements](#requirements)

---

</div>

## About This Project

**Aiden UI** is a private Angular component library and collection of developer guides. Based on real development experience, not theoretical examples.

This project started as a personal toolkit. The same components were recreated repeatedly across different projects. The same problems were solved over and over.

Developer notes accumulated. Quick references became structured guides. Reusable components were extracted and organized.

What began as scattered notes and copy-paste code evolved into **Aiden UI** — a curated collection of practical components and experience-driven guides.

> This is not open-source in the classical sense. It is a structured resource that emerged from real development work.

**Aiden UI is privately owned and curated.** External submissions are selectively reviewed, and there is no automatic inclusion of submitted components.

---

## Why Aiden UI Exists

**Reduce Repetitive Work**  
Stop constantly rebuilding the same components.

**Provide Practical Solutions**  
Components based on real development experience.

**Ensure Maintainability**  
Clean, well-structured code that stands the test of time.

**Avoid Over-Engineering**  
Practical solutions that prioritize clarity.

This project reflects how things are actually built in everyday Angular development.

---

## Components

A collection of reusable Angular components built according to specific architectural guidelines.

### Component Principles

```typescript
// ✅ Dependency Injection required
constructor(private service: DataService) {}

// ❌ No Zoneless Components
// Standard Angular Change Detection is used

// ✅ Clean separation
// Logic and presentation are separated

// ❌ No bootstrap code
// Components only, no complete applications
```

### What is NOT Included

- Application bootstrap code
- Angular project setup
- Complete application examples

---

## Requirements

The following requirements are **mandatory** for all component submissions.

### Component Structure

Every component submitted to Aiden UI must follow this exact structure:

```
components/
└── example-component/
    ├── example.component.ts
    ├── example.component.html
    └── example.component.scss
```

**No additional files or folders are allowed.**

### Component README

Each component directory must contain a `README.md` with:

- Brief description
- Intended use case
- Required Angular version (if relevant)
- Required dependencies (if any)
- Setup instructions (only if required)
- Simple usage example
- Author credits

Keep documentation concise and practical.

#### Example

````markdown
# DatePicker Component

Lightweight datepicker for Angular forms.

## Use Case
Simple date selection with keyboard navigation.

## Requirements
- Angular 17+
- @angular/forms

## Setup
Import the component:

```ts
import { DatePickerComponent } from './date-picker';
```

## Usage
```html
<date-picker [(ngModel)]="selectedDate"></date-picker>
```
````

## Author
GitHub: [@EnsslinAdrian](https://github.com/EnsslinAdrian)


