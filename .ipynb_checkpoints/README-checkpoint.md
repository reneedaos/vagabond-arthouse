# Vagabond Arthouse LLC

A cyberpunk-themed consulting website for Renee Davis, showcasing expertise in Web3, DeSci, and DAO governance with interactive sci-fi visualizations.

## 🚀 Features

- **Cyberpunk Aesthetic**: Neon color scheme with cyan and magenta themes
- **Interactive Network Visualization**: Real-time animated network nodes and connections
- **Matrix Rain Effect**: Falling code animation in the background
- **Smart Terminal Widgets**: 
  - SystemStatus: Real-time metrics for DAO health, network nodes, and neural activity
  - DataTerminal: Animated terminal with typing effects
  - Hover-to-expand functionality with smooth animations
- **Responsive Design**: Mobile-optimized cyberpunk interface
- **Custom Typography**: Orbitron and Rajdhani fonts for futuristic feel

## 🛠️ Technology Stack

- **Framework**: Next.js 15.2.3
- **Styling**: Custom CSS with CSS-in-JS (styled-jsx)
- **Animations**: CSS animations and canvas-based visualizations
- **Fonts**: Google Fonts (Orbitron, Rajdhani)
- **Build Tool**: Next.js with TypeScript support

## 🎯 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

## 📁 Project Structure

```
├── components/           # React components
│   ├── nav.js           # Navigation component
│   ├── NetworkVisualization.js  # Interactive network canvas
│   ├── DataTerminal.js  # Terminal widget with typing animation
│   ├── MatrixRain.js    # Matrix-style falling code effect
│   └── SystemStatus.js  # Real-time metrics widget
├── pages/               # Next.js pages
│   ├── index.js         # Homepage
│   ├── about.js         # About page with bio
│   ├── contact.js       # Contact information
│   └── _app.js          # App wrapper
├── styles/              # Global styles
│   └── globals.css      # Cyberpunk theme CSS
└── public/              # Static assets
```

## 🎨 Design Philosophy

The website embodies a cyberpunk aesthetic that reflects the cutting-edge nature of Web3 and DeSci work:

- **Color Palette**: Neon cyan (#00ffff) and magenta (#ff00ff) on dark backgrounds
- **Typography**: Futuristic fonts (Orbitron for headings, Rajdhani for body)
- **Interactions**: Subtle hover effects and smooth transitions
- **Visual Effects**: Glowing borders, animated backgrounds, and sci-fi UI elements

## 🔧 Interactive Components

### Terminal Widgets
- **Default State**: Minimized with 70% opacity
- **Hover Behavior**: Automatically expand to show full content
- **Manual Control**: Click yellow button to toggle minimize state
- **Animations**: Smooth slide effects and glow enhancements

### Network Visualization
- Real-time animated nodes with connecting lines
- Dynamic particle system with physics-based movement
- Responsive to screen size and device capabilities

## 📱 Responsive Design

Optimized for all devices with specific mobile considerations:
- Adjusted terminal sizes for mobile screens
- Responsive grid layouts
- Touch-friendly interactive elements
- Optimized animations for mobile performance

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended): `vercel --prod`
- **Netlify**: Build command `npm run build && npm run export`
- **Static hosting**: Use `npm run build && npm run export` for static files

## 📞 Contact

For questions about this project or Vagabond Arthouse services:
- Email: renee@rarecompute.io
- LinkedIn: [@research-wizard](https://www.linkedin.com/in/research-wizard/)

---

*Built with Next.js and powered by cyberpunk aesthetics* 🔮
