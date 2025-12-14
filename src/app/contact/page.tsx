import React from "react";
import { buildMetaData, siteConfig } from "@/config/site.config"
import { ContactCard } from "@/components/sections/contact-card";

export const metadata = buildMetaData({
  title: `Contact | ${siteConfig.siteName}`,
  description: 'Get in touch with me and let&apos;s build something great together.',
})

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <ContactCard />
    </main>
  )
}