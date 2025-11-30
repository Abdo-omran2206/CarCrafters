<div align="center">

![CarCrafters Logo](/public/logol.png)

# 🚗 CarCrafters

### _Your Premium Car Dealership & Rental Platform_

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[Live Demo](https://carcrafters.netlify.app/) • [Report Bug](https://github.com/Abdo-omran2206/CarCrafters/issues) • [Request Feature](https://github.com/Abdo-omran2206/CarCrafters/issues)

</div>

---

## 📖 About

**CarCrafters** is a modern, premium car dealership and rental platform built with cutting-edge web technologies. The platform offers an immersive browsing experience with stunning animations, interactive 3D car previews, and a fully responsive design optimized for all devices.

Whether you're looking to buy your dream car or rent a luxury vehicle, CarCrafters provides a seamless, visually engaging experience that sets it apart from traditional automotive websites.

### 🎯 Key Highlights

- ⚡ **Lightning Fast**: Built with Next.js 16 and optimized for maximum performance
- 🎭 **Stunning Animations**: Powered by GSAP with ScrollTrigger for fluid, scroll-based animations
- 🚀 **3D Interactive Previews**: Explore cars in immersive 3D with Three.js integration
- 🎨 **Premium Design**: Modern dark theme with glassmorphism and vibrant accents
- 📱 **Fully Responsive**: Perfect experience across desktop, tablet, and mobile devices
- ♿ **Accessible**: WCAG compliant with semantic HTML

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎬 **Immersive Animations**

Smooth, scroll-triggered animations powered by GSAP and ScrollTrigger for a premium user experience

### 🎨 **Modern Design**

Sleek dark theme with glassmorphism effects and vibrant blue accents

### 📱 **Fully Responsive**

Optimized for all devices - desktop, tablet, and mobile

</td>
<td width="50%">

### 🚀 **Dynamic Navigation**

SPA-style navigation without page reloads for instant transitions

### 🏎️ **Interactive 3D Previews**

Explore cars in immersive 3D with Three.js-powered interactive models

### 🔄 **Auto-Scrolling Brands**

Showcase trusted automotive brands with seamless carousel

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Category             | Technology                            |
| -------------------- | ------------------------------------- |
| **Framework**        | Next.js 16 (App Router)               |
| **Language**         | TypeScript                            |
| **Styling**          | Tailwind CSS v4                       |
| **Animations**       | Framer Motion + GSAP                  |
| **3D Graphics**      | Three.js + React Three Fiber          |
| **UI Components**    | Swiper, Custom Components             |
| **Fonts**            | Orbitron (Headings), Open Sans (Body) |
| **State Management** | React Hooks                           |

</div>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdo-omran2206/CarCrafters.git

# Navigate to project directory
cd CarCrafters

# Install dependencies
npm install

# Run development server
npm run dev
```

🎉 Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## 📁 Project Structure

```
car-crafters/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navbar.tsx      # Navigation bar
│   │   ├── hero.tsx        # Hero section with video
│   │   ├── about.tsx       # About & Why Us sections
│   │   ├── featured.tsx    # Featured cars grid
│   │   ├── 3dPrev.tsx      # 3D car preview modal
│   │   ├── cta.tsx         # Call to action
│   │   └── footer.tsx      # Footer component
│   ├── page.tsx            # Main page with SPA navigation
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── public/
│   ├── garage/             # Car images
│   ├── brands/             # Brand logos
│   ├── fonts/              # Custom fonts
│   ├── garage-3d/           # 3D car models
│   └── *.jpg, *.mp4        # Media assets
└── package.json
```

---

## 🎨 Key Features Breakdown

### 🏠 Hero Section

- Full-screen video background
- Animated headline and CTA buttons
- Smooth entrance animations

### 🚗 Featured Cars

- Grid layout with 9+ premium vehicles
- Interactive hover effects with smooth transitions
- **Interactive 3D car previews** with Three.js
- Detailed specifications (year, mileage, fuel type)
- Dynamic pricing display
- "View in 3D" button for supported models

### 🏢 About & Why Us

- Company overview with mission statement
- Animated statistics counter
- Scroll-triggered content reveals

### 📞 Contact Footer

- Quick navigation links
- Business hours and contact info
- Social media integration

---

## 🎯 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 🌟 Highlights

- ⚡ **Lightning Fast**: Optimized with Next.js 16 and server components
- 🎭 **Smooth Animations**: Framer Motion for fluid transitions
- 🚀 **3D Car Previews**: Interactive Three.js models with loading states and error handling
- 🎨 **Premium UI**: Custom design with Tailwind CSS v4 and glassmorphism effects
- 📊 **SEO Optimized**: Meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant components with keyboard navigation

---


### Key Features Showcase

- **🎥 Hero Section**: Full-screen video background with animated headlines
- **🚗 Featured Cars Grid**: Interactive cards with hover effects and 3D preview buttons
- **🎨 Glassmorphism Design**: Modern UI with smooth animations and transitions
- **📱 Mobile Responsive**: Hamburger menu and optimized layouts for all screen sizes
- **🌐 Brand Carousel**: Auto-scrolling showcase of trusted automotive brands

---

## 🗺️ Roadmap

- [x] Initial release with Next.js 16 and TypeScript
- [x] framer-motion animations with
- [x] 3D car preview integration with Three.js
- [x] Fully responsive design across all devices
- [ ] User authentication and profiles
- [ ] Advanced search and filtering
- [ ] Online booking system
- [ ] Payment gateway integration
- [ ] Admin dashboard for inventory management
- [ ] Multi-language support

---

## 🚀 Deployment

### Deploy to Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Abdo-omran2206/CarCrafters)

1. Click the button above or connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Deploy! ✨

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Abdo-omran2206/CarCrafters)

1. Click the button above or import your repository
2. Vercel will automatically detect Next.js settings
3. Deploy! 🚀

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Abdo Omran**

- GitHub: [@Abdo-omran2206](https://github.com/Abdo-omran2206)
- Repository: [CarCrafters](https://github.com/Abdo-omran2206/CarCrafters)
- Live: [CarCrafters](https://carcrafters.netlify.app/)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made by [Abdo Omran](https://github.com/Abdo-omran2206)

</div>
