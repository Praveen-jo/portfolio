import { ExperienceHeader } from "@/components/sections/experience-header";
import { ExperienceContent } from "@/components/sections/experience-content";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: `Experience | ${siteConfig.siteName}`,
  description: `Professional experience of ${siteConfig.author} - Full Stack Developer`,
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 mt-16 md:mt-24">
        <ExperienceHeader />
        <ExperienceContent />
      </div>
    </div>
  )
}
