import { Metadata } from "next";

export type SocialLink  = {
  label: string,
  url: string,
  icon?: string
};

export type NavItem = {
  label: string,
  href: string,
  external?: string
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  author_img: string;
  keywords: string[];
  author: string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    github: string;
    linkedIn: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string;
    locale?: string;
    type?: string;
    twitterCard?: string;
    robots?: string;
    themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'Praveen Jo',
  domain: '',
  author: 'Praveen Jo',
  description: 'Full Stack developer passionate about building meaningful and delightful digital experiences with great user interfaces.',
  about: 'I am a Full Stack developer who loves creating new things.',
  author_img: 'https://avatars.githubusercontent.com/Praveen-jo',
  keywords: [
    'Praveen Jo',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
    'Machine Learning',
    'AI'
  ],

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    github: 'https://github.com/Praveen-jo',
    linkedIn: 'https://www.linkedin.com/in/praveen-joseph-09755423b/',
    email: 'praveenjoofficial05@gmail.com',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/Praveen-jo', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/praveen-joseph-09755423b/', icon: 'linkedin' },
    { label: 'Website', url: 'https://portfolio-three-indol-55.vercel.app', icon: 'globe' },
  ],
  navigation: [
    { label: 'Home', href: '/'},
    { label: 'About', href: '/about'},
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact'}
  ],

  seo: {
    title: 'Praveen Jo Porfolio',
    description: 'Full Stack developer creating useful & delightful web experience with greate user interface.',
    keywords: [
      'Praveen Jo',
      'Full Stack Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS'
    ],
    canonical: 'https://portfolio-three-indol-55.vercel.app',
    image: 'https://portfolio-three-indol-55.vercel.app/og-image.png',
    locale: 'en_US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    themeColor: '#0f172a',
  }
}

export function buildMetaData(overrides: Partial<Metadata> = {}): Metadata {
  const {seo, siteName} = siteConfig;
  
  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author }],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName,
      images: seo.image,
      type: seo.type ?? 'website',
      locale: seo.locale
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image ?? ''],
    },
    other: {
      robots: seo.robots ?? 'index, follow',
      themeColor: seo.themeColor ?? '#0f172a',
    }
  } as Metadata;

  return { ...base, ...overrides};
}

export type { Metadata }