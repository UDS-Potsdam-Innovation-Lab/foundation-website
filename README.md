
# German UDS Foundation Website

This repository contains the Next.js project for the German University of Digital Science Foundation website. It is inspired by the structure and visual language of [german-uds.de](https://german-uds.de) and [innovation.german-uds.de](https://innovation.german-uds.de), and emphasizes a modular, scalable, and futuristic design system.

---

## 📁 Project Structure

```
app/
├── layout.tsx                            // Global layout with Navbar + Footer
├── page.tsx                              // Home Page
├── about/
│   └── page.tsx                          // Why the German UDS Foundation Exists
├── values/
│   ├── guiding-principles.tsx
│   └── core-beliefs.tsx
├── what-we-do/
│   ├── purpose.tsx
│   ├── foundation-wants.tsx
│   ├── support-us.tsx
│   └── interested.tsx
├── ecosystem/
│   ├── german-uds-overview.tsx
│   ├── shareholding.tsx
│   └── participation.tsx
├── global/
│   └── international-market.tsx
├── learn-more/
│   ├── info.tsx
│   └── links.tsx
├── team/
│   └── page.tsx
├── contact/
│   └── page.tsx
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── ui/
    ├── Button.tsx
    ├── SectionTitle.tsx
    └── Card.tsx
```

---

## 🖼 Public Assets

Place all images in the `/public` directory.

---

### 🔨 Scaffold Setup

Create all pages and folders as per the project structure above. Implement layout sharing and ensure internal routing is consistent with the folder tree.

### 🔁 Refactor Existing Code

Move all current logic and components to their appropriate files. Preserve any existing Tailwind styling, animation classes, or component logic.

---

## 🔗 Navigation Guidelines

Navbar should include:

- Home
- About
- Values → Guiding Principles, Core Beliefs
- What We Do → Purpose, Support
- Ecosystem
- Global
- Learn More
- Team
- Contact

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 📬 Contact

For questions and collaboration:

- Prof. Dr. Mike Friedrichsen: `mike.friedrichsen@german-uds.de`
- Jan Renz: `jan.renz@german-uds.de`
- Partha Das: `partha.das@german-uds.de`
- Manoj Bevoor: `manoj.bevoor@german-uds.de`


---

## License
