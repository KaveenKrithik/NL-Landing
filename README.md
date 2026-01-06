# Lumiere Foundation Website

A premium charitable trust website with Apple-inspired design, built with Next.js, Tailwind CSS, and Framer Motion. Showcasing educational and charitable initiatives under the Indian Trusts Act, 1882.

## 🚀 Features

- **Faithful Clone**: Exact content, layout, and structure matching the original
- **Premium Polish**: Apple/Linear-inspired UI enhancements
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **Modern Stack**: Next.js 14 (App Router), Tailwind CSS, TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Styling**: Tailwind CSS 3.4.7
- **Animations**: Framer Motion 11.3.19
- **Icons**: Lucide React 0.424.0
- **Language**: TypeScript 5.5.4
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with classroom image
│   │   ├── STEMPillars.tsx # 4-column STEM education pillars
│   │   ├── FutureInnovators.tsx # Partner logos section
│   │   ├── Accreditation.tsx   # STEM accreditation badges
│   │   ├── Testimonials.tsx    # Testimonials section
│   │   └── Footer.tsx          # Footer with links
│   └── ui/
│       └── Button.tsx      # Reusable button component
└── public/                 # Static assets
```

## 🎨 Design Principles

- **8px Grid System**: Consistent spacing throughout
- **Typography**: Inter font family for modern, clean look
- **Color Palette**: Primary red (#DC2626) matching original brand
- **Micro-interactions**: Subtle hover effects and transitions
- **Accessibility**: WCAG compliant with proper semantic HTML

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚢 Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📝 Notes

- Hero image uses a placeholder URL. Replace with actual image asset.
- Partner logos are placeholder divs. Add actual logo images to `/public/logos/`.
- WhatsApp and chat buttons are functional but need actual contact numbers/links.

## 📄 License

Private project - All rights reserved.

