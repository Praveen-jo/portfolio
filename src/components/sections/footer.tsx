import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-muted-foreground px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>

        <p className="text-sm">
          Built with <a href="https://nextjs.org" className="text-primary hover:underline" target="_blank">Next.js</a> and <a href="https://tailwindcss.com" className="text-primary hover:underline" target="_blank">TailwindCSS</a>
        </p>

        <p className="text-xs text-center">Copyright © 2025 Praveen Jo. All rights reserved.</p>
      </div>
    </footer>
  )
}