# Praveen Jo - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my work as a Full Stack Developer. This portfolio features a clean design, smooth animations, and a comprehensive showcase of projects, experience, and skills.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Performance Optimized**: Built with Next.js 16 for optimal performance and SEO
- **Type-Safe**: Written in TypeScript for better code quality and developer experience
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.8
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (Dark/Light mode)

## 📋 Pages

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal background and professional journey
- **Projects**: Showcase of featured projects and work
- **Experience**: Professional experience and career highlights
- **Contact**: Get in touch form and social links
- **Privacy Policy**: Privacy policy and data protection information
- **Terms of Service**: Terms and conditions
- **Cookie Policy**: Cookie usage and tracking information

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Praveen-jo/praveen-portfolio.git
cd praveen-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## ⚙️ Configuration

The site configuration is managed in `src/config/site.config.ts`. Update the following to customize:

- Site name and author information
- Social media links
- Navigation items
- SEO metadata
- Theme settings

## 📝 Project Structure

```
praveen-portfolio/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── about/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── contact/
│   │   └── ...
│   ├── components/          # React components
│   │   ├── sections/        # Page sections
│   │   └── ui/              # UI components (shadcn/ui)
│   ├── config/              # Configuration files
│   └── lib/                 # Utility functions
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit `src/config/site.config.ts` to update:
- Name, description, and bio
- Social media links
- Profile image
- Navigation items

### Modify Theme

Theme colors and styles can be customized in:
- `src/app/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration

### Add New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/config/site.config.ts`

## 📄 License

This project is private and proprietary.

## 📧 Contact

- **Email**: praveenjoofficial05@gmail.com
- **GitHub**: [@Praveen-jo](https://github.com/Praveen-jo)
- **LinkedIn**: [praveen-joseph](https://www.linkedin.com/in/praveen-joseph-09755423b/)
- **Website**: [portfolio-three-indol-55.vercel.app](https://portfolio-three-indol-55.vercel.app)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by Praveen Jo
