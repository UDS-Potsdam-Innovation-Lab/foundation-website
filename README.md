# German UDS Foundation Website

This repository contains the Next.js project for the German University of Digital Science Foundation website. The site is inspired by [German UDS](https://german-uds.de) and [German UDS Innovation](https://innovation.german-uds.de), emphasizing a modular, scalable, and future-oriented design system.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [framer-motion](https://www.framer.com/motion/)
- **Icons:** [@heroicons/react](https://github.com/tailwindlabs/heroicons)
- **Particles:** [tsparticles](https://github.com/matteobruni/tsparticles)
- **TypeScript**
- **Deployment:** GitHub Pages

---

## 📁 Project Structure

```
app/
├── layout.tsx                // Global layout (Navbar, Footer)
├── page.tsx                  // Home Page
├── about/                    // About the Foundation
│   └── page.tsx
├── values/                   // Values, Principles, Beliefs
│   └── page.tsx
├── what-we-do/               // Foundation Activities
│   └── page.tsx
├── ecosystem/                // Ecosystem & Participation
│   └── page.tsx
├── global/                   // International Activities
│   └── page.tsx
├── get-involved/             // Support & Participation
│   └── page.tsx
├── team/                     // Team Members
│   └── page.tsx
├── contact/                  // Contact Form/Info
│   └── page.tsx
├── imprint/                  // Legal Notice
│   └── page.tsx
├── privacy/                  // Privacy Policy
│   └── page.tsx
├── de/                       // German Localized Pages
│   └── ...
├── components/               // Shared React Components
│   ├── layout/               // Navbar, Footer
│   ├── ui/                   // UI Elements (Button, Card, etc.)
│   └── ParticlesBackground.tsx
├── locales/                  // i18n translation files
│   ├── en.ts
│   ├── de.ts
│   └── useTranslation.ts
├── globals.css               // Tailwind & global styles
...
public/                       // Static assets (images, icons, etc.)
```

---

## 🌐 Features

- **Multi-language support** (EN/DE)
- **Responsive, accessible design**
- **Animated backgrounds and transitions**
- **Modular, reusable components**
- **SEO-friendly static export**
- **Deployed on GitHub Pages**

---

## 🔗 Navigation Structure

- Home
- About
- Values
  - Guiding Principles
  - Core Beliefs
- What We Do
  - Purpose
  - Support
- Ecosystem
- Global
- Learn More
- Team
- Contact

---

## 🖼 Public Assets

All images and static files are located in the `/public` directory. Use subfolders for organization (e.g., `/public/support/`, `/public/images/`).

---

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production:**

   ```bash
   pnpm build && pnpm export
   # or
   npm run build && npm run export
   # or
   yarn build && yarn export
   ```

---

## 🚢 Deployment

- The site is deployed via **GitHub Actions** to GitHub Pages.
- Custom domain: [foundation.german-uds.de](https://foundation.german-uds.de)
- See `.github/workflows/deploy.yml` for CI/CD details.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements, bug fixes, or new features.

---

## 📬 Contact

For questions about German UDS Foundation, please contact:   

- [Prof. Dr. Mike Friedrichsen](mailto:mike.friedrichsen@german-uds.de)

For questions about collaboration, please contact:  

- [Jan Renz](mailto:jan.renz@german-uds.de)
- [Partha Das](mailto:partha.das@german-uds.de)
- [Manoj Bevoor](mailto:manoj.bevoor@german-uds.de)

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
