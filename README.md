# BusyNotify - BUSY Software Automation Platform

<div align="center">
  <img src="public/logo.svg" alt="BusyNotify Logo" width="300">
  
  **BUSY Accounting Software Automation & WhatsApp Integration for Indian Businesses**
  
  [Website](https://busynotify.in) | [GitHub](https://github.com/travel-dev82/busynotify.in)
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [CloudPanel Deployment](#cloudpanel-deployment)
- [PM2 Process Management](#pm2-process-management)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [License](#license)

---

## Overview

BusyNotify is a SaaS platform designed specifically for Indian businesses using BUSY Accounting Software. It provides automation tools for WhatsApp integration, payment reminders, reporting dashboards, Google Sheets sync, and custom API solutions.

### Business Information

| Field | Value |
|-------|-------|
| **Product Name** | BusyNotify |
| **Domain** | https://busynotify.in |
| **Company** | M/S WILFORD TECHNOLOGY |
| **GST** | 23DBQPA9343Q1Z1 |
| **Location** | Ujjain, Madhya Pradesh, India |
| **GitHub** | https://github.com/travel-dev82/busynotify.in.git |

---

## Features

### Solutions Offered

1. **WhatsApp Integration** - Send invoices, payment reminders, and documents via WhatsApp
2. **Payment Reminder System** - Automated payment follow-ups and due reminders
3. **Reporting Dashboard** - Visual analytics and business intelligence reports
4. **Google Sheet Automation** - Sync BUSY data with Google Sheets automatically
5. **Customer Map Report** - Geographic visualization of customer distribution
6. **Credit Line Sender** - Automated credit/debit note notifications
7. **Due Follow-up System** - Systematic overdue payment tracking
8. **Custom APIs** - Tailored API integrations for BUSY Software
9. **Transportation Slip Management** - Logistics and delivery automation
10. **BUSY Chatbot** - AI-powered customer support integration

### Website Features

- 🌙 Dark/Light theme support
- 📱 Fully responsive design
- 📝 SEO-optimized blog system with static content
- 🗺️ Sitemap and robots.txt generation
- 🎨 Modern UI with Framer Motion animations
- ⚡ Static site generation for optimal performance

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Runtime** | Bun / Node.js 18+ |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui (New York style) |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **State Management** | Zustand |
| **Form Handling** | React Hook Form + Zod |
| **Theme** | next-themes |

---

## Project Structure

```
busynotify/
├── public/                     # Static assets
│   ├── icons/                  # Favicon and app icons
│   │   └── icon.svg
│   ├── images/                 # Blog and content images
│   │   └── blog/
│   ├── logo.svg                # Main logo
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
│
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── blog/               # Blog pages
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── pricing/            # Pricing page
│   │   ├── solutions/          # Solution pages (10+ pages)
│   │   ├── (legal)/            # Legal pages
│   │   │   ├── privacy/
│   │   │   ├── terms/
│   │   │   └── cookies/
│   │   └── api/                # API routes
│   │
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ...
│   │   └── ui/                 # shadcn/ui components
│   │
│   ├── lib/                    # Utility libraries
│   │   ├── static-data.ts      # Static blog data
│   │   ├── blog.ts             # Blog utilities
│   │   ├── utils.ts            # Helper functions
│   │   ├── metadata.ts         # SEO metadata
│   │   └── structured-data.ts  # JSON-LD schemas
│   │
│   └── hooks/                  # Custom React hooks
│       ├── use-mobile.ts
│       ├── use-toast.ts
│       ├── use-scroll-reveal.ts
│       └── use-scroll-progress.ts
│
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── ecosystem.config.js         # PM2 configuration
└── Caddyfile                   # Caddy reverse proxy config
```

---

## Prerequisites

Before installing BusyNotify, ensure you have the following:

| Requirement | Version | Purpose |
|-------------|---------|---------|
| Node.js | ≥ 18.0.0 | JavaScript runtime |
| Bun | Latest | Package manager & runtime |
| PM2 | Latest | Process manager (production) |

### Install Prerequisites (Ubuntu/Debian)

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Bun
curl -fsSL https://bun.sh/install | bash

# Install PM2 globally
sudo npm install -g pm2
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/travel-dev82/busynotify.in.git
cd busynotify.in
```

### 2. Install Dependencies

Using Bun (recommended):
```bash
bun install
```

Using npm:
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (optional):

```bash
# Application Settings
NODE_ENV="production"
PORT=3000
```

### 4. Start Development Server

```bash
bun run dev
```

The application will be available at `http://localhost:3000`

---

## Environment Variables

Create a `.env` file in the project root with the following variables (all optional):

```env
# ===========================================
# APPLICATION SETTINGS
# ===========================================
# Environment mode
NODE_ENV="development"

# Server port (default: 3000)
PORT=3000
```

### Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | ⬜ No | Environment mode (`development`/`production`) |
| `PORT` | ⬜ No | Server port (default: 3000) |

---

## Building for Production

### 1. Build the Application

```bash
# Install dependencies
bun install

# Build for production
bun run build
```

The build output will be in `.next/` directory with standalone output enabled.

### 2. Test Production Build Locally

```bash
bun run start:default
# or with custom port
PORT=3000 bun run start
```

---

## CloudPanel Deployment

### Step-by-Step Guide for CloudPanel

#### 1. Create a New Node.js Application

1. Log in to your CloudPanel dashboard
2. Navigate to **Applications** → **Add Application**
3. Select **Node.js** as the application type
4. Configure the following:
   - **Domain**: `busynotify.in`
   - **App Root**: `/var/www/busynotify.in`
   - **Node.js Version**: 20.x

#### 2. Clone Repository

```bash
cd /var/www/busynotify.in
git clone https://github.com/travel-dev82/busynotify.in.git .
```

#### 3. Install Dependencies

```bash
bun install
# or
npm install
```

#### 4. Build the Application

```bash
bun run build
```

#### 5. Configure Process Manager

**Option A: Using PM2 (Recommended)**

```bash
# Create logs directory
mkdir -p logs

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Generate startup script
pm2 startup
```

**Option B: Using CloudPanel's Built-in Process Manager**

In CloudPanel, configure:
- **Startup File**: `node_modules/next/dist/bin/next`
- **Arguments**: `start`
- **Port**: 3000

#### 6. Configure Nginx/Reverse Proxy

CloudPanel typically handles this automatically. Ensure your domain points to the application.

#### 7. SSL Configuration

1. In CloudPanel, navigate to your application
2. Go to **SSL/HTTPS**
3. Request a free Let's Encrypt certificate for `busynotify.in`

---

## PM2 Process Management

### PM2 Commands

```bash
# Start the application
pm2 start ecosystem.config.js

# Restart the application
pm2 restart busynotify

# Stop the application
pm2 stop busynotify

# Delete from PM2
pm2 delete busynotify

# View logs
pm2 logs busynotify

# Monitor processes
pm2 monit

# Save process list (persists across reboots)
pm2 save

# Generate startup script
pm2 startup
```

### PM2 Configuration (ecosystem.config.js)

The included `ecosystem.config.js` configures:

- Process name: `busynotify`
- Auto-restart on failure
- Maximum memory: 1GB
- Log rotation
- Graceful shutdown
- Environment variables loading

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `bun run dev` | Start development server on port 3000 |
| Build | `bun run build` | Create production build |
| Start | `bun run start` | Start production server (requires PORT env) |
| Start Default | `bun run start:default` | Start production server on port 3000 |
| Lint | `bun run lint` | Run ESLint for code quality |
| PM2 Start | `bun run pm2:start` | Start with PM2 |
| PM2 Restart | `bun run pm2:restart` | Restart PM2 process |
| PM2 Stop | `bun run pm2:stop` | Stop PM2 process |
| PM2 Logs | `bun run pm2:logs` | View PM2 logs |

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About the company |
| `/pricing` | Pricing plans |
| `/contact` | Contact form |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/solutions` | Solutions overview |
| `/solutions/whatsapp-integration` | WhatsApp integration solution |
| `/solutions/payment-reminder-system` | Payment reminder solution |
| `/solutions/reporting-dashboard` | Reporting dashboard solution |
| `/solutions/google-sheet-automation` | Google Sheets solution |
| `/solutions/customer-map-report` | Customer map solution |
| `/solutions/credit-line-sender` | Credit line sender solution |
| `/solutions/due-follow-up-system` | Due follow-up solution |
| `/solutions/custom-apis` | Custom APIs solution |
| `/solutions/transportation-slip-management` | Transportation solution |
| `/solutions/busy-accounting-software-chatbot` | Chatbot solution |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |
| `/sitemap.xml` | XML sitemap |
| `/robots.txt` | Robots configuration |

---

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

#### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
bun install

# Try build again
bun run build
```

#### PM2 Process Won't Start
```bash
# Check PM2 logs
pm2 logs busynotify

# Check if port is already in use
pm2 delete busynotify
pm2 start ecosystem.config.js
```

---

## Support

For issues and feature requests, please use the [GitHub Issues](https://github.com/travel-dev82/busynotify.in/issues) page.

**Contact:**
- Email: support@busynotify.in
- Website: https://busynotify.in

---

## License

© 2024 M/S WILFORD TECHNOLOGY. All rights reserved.

---

<div align="center">
  Made with ❤️ in India 🇮🇳
</div>
