<div align="center">

<img src="https://adenui.com/favicon.ico" alt="Aiden UI" width="80" height="80" />

# AIDEN UI

**Curated Angular Component Library**  
Built from real projects. Not from tutorials.

[Aden UI Website](https://adenui.com)
</div>

---

## Philosophy

Aiden UI exists to eliminate repeated work in Angular projects.

Over time, reusable patterns and clean abstractions emerged from real-world development.  
This library collects those components and structures them properly.

It is **curated**, not community-driven.  
Every component is reviewed and must meet strict architectural standards.

---

## Core Principles

Every component must:

- Be `standalone: true`
- Use Angular Signals (`input()`, `computed()`)
- Follow clean Dependency Injection practices
- Avoid external UI frameworks (no Bootstrap, no jQuery)
- Be compatible with zoneless Angular applications
- Prioritize clarity over abstraction

No overengineering.  
No unnecessary dependencies.  
Only maintainable Angular code.

---

## What This Repository Contains

- Reusable Angular components
- Structured developer guides
- Strict contribution standards

---

## Required Folder Structure

Every component must follow this exact structure:
```
components/
└── example/
    ├── README.md
    ├── example.component.ts
    ├── example.component.html
    └── example.component.scss
```

No additional files.  
No project configuration.  
No hidden dependencies.

Each folder must be self-contained.

---

## Component Documentation Requirements

Each `example/README.md` must include:

- Short description
- Intended use case
- Required Angular version (if relevant)
- Required dependencies (if any)
- Setup instructions (only if necessary)
- Simple usage example
- Author credit

Keep it concise.  
Keep it practical.

---

## Contribution Policy

Aiden UI is curated.

Every submission is reviewed for:

- Performance
- Accessibility (ARIA compliance)
- Reusability
- Architectural clarity
- Code quality

If it aligns with the vision, it becomes part of the library.

---

## Author
Adrian Enßlin  
[Aden UI Website](https://adenui.com) <br>
[GitHub](https://github.com/EnsslinAdrian)