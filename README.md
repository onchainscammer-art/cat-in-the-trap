# The Cat in the Trap 🐱💊

A dark, satirical memecoin landing page that reimagines Dr. Seuss in a trap house aesthetic. Built with Next.js 14, featuring immersive scrollytelling experiences powered by Framer Motion.

## 🎨 The Aesthetic: "Dark Seuss"

This project balances childhood nostalgia with dark, gritty trap-house vibes:

- **Background**: Deep Charcoal (#1a1a1a) with subtle noise/paper grain texture
- **Accents**: Warning Red (#ff3b30) and Cocaine White (#ffffff)
- **Typography**:
  - Headers: "Permanent Marker" (messy, hand-drawn Dr. Seuss feel)
  - Body: "Patrick Hand" for UI elements
  - Story: "Merriweather" serif for narrative text

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Styling)
- **Framer Motion** (Scroll-based animations)
- **Lucide React** (Icons)
- **Shadcn/UI** (Components)

## 📁 Project Structure

```
cat-in-trap/
├── app/
│   ├── globals.css          # Custom theme and fonts
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Navbar.tsx           # Sticky glassmorphism navbar
│   ├── Hero.tsx             # Hero section with fade-in animations
│   ├── Story.tsx            # Scrollytelling story section
│   ├── Gallery.tsx          # Masonry grid meme gallery
│   └── Footer.tsx           # Footer with social links
└── public/                  # Static assets (add images here)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## ✨ Features

### 1. Sticky Navbar with Glassmorphism
- Smooth backdrop blur effect
- Floating "Copy CA" button that persists on scroll
- Responsive mobile layout

### 2. Hero Section
- Large animated title with fade-in effect
- Bounce animation for scroll indicator
- Placeholder for hero image (Cat next to stove)

### 3. The Story Section (Core Feature)
- **Digital book layout** with alternating text/image positions
- **Scroll-triggered animations** - text slides up and fades in smoothly
- Three complete stanzas with proper Dr. Seuss rhythm
- Image placeholders on alternating sides

### 4. Meme Gallery
- **Masonry grid layout** (responsive columns)
- Gritty CSS filters (contrast + desaturation)
- Hover effects with scale and border color transitions
- Staggered fade-in animations on scroll

### 5. Footer
- Large social link buttons (X, Telegram, Pump.fun)
- Hover effects with icon animations
- Satirical tagline

## 🎭 Customization Guide

### Adding Real Images

Replace placeholder images by adding files to `/public/` and updating components:

**Hero Image** (`components/Hero.tsx`):
```tsx
<Image
  src="/hero-cat.png"
  alt="The Cat at the stove"
  fill
  className="object-cover"
/>
```

**Story Images** (`components/Story.tsx`):
Update the `imagePlaceholder` in the `stanzas` array.

**Gallery Memes** (`components/Gallery.tsx`):
Update the `memes` array with actual image paths.

### Updating Contract Address

Edit `components/Navbar.tsx`:
```tsx
const contractAddress = 'YOUR_ACTUAL_CONTRACT_ADDRESS_HERE';
```

### Changing Colors

Edit `app/globals.css`:
```css
:root {
  --background: #1a1a1a;      /* Main background */
  --foreground: #ffffff;       /* Text color */
  --primary: #ff3b30;          /* Accent/Red */
  --accent: #ff3b30;           /* Secondary accent */
}
```

### Modifying Social Links

Edit `components/Footer.tsx` and `components/Navbar.tsx` to update URLs.

## 🎬 Animation Details

All animations use **Framer Motion**:

- **Fade + Slide**: Elements fade in while sliding from left/right
- **Scroll Detection**: `useInView` hook triggers animations when elements enter viewport
- **Staggered Delays**: Gallery items animate with 100ms delays
- **Smooth Easing**: All animations use natural easing curves

## 📱 Responsive Design

- **Mobile First**: Optimized for all screen sizes
- **Breakpoints**:
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px

## 🎯 Performance

- Server-side rendering with Next.js 14
- Optimized Google Fonts loading
- Lazy loading for images
- CSS-in-JS with Tailwind
- Static generation ready

## 📄 License

This is a satirical art project. Use responsibly.

## 🤝 Contributing

This is a demonstration project. Fork and customize for your own memecoin!

---

**Real G's move in silence.**
