"use client";

import { siteConfig } from "@/config/site.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">
        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
            {/* SaaS-style background effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">{siteConfig.author}</div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I’m Praveen Jo, a Full Stack Developer who enjoys building reliable, scalable, and user-centric web applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I like working across the stack — from designing clean user interfaces to integrating APIs, handling data flows, and supporting production systems. I enjoy understanding how different parts of an application work together and taking ownership of features from idea to implementation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I come from an engineering background from PSG College of Technology and transitioned into software development through hands-on experience and real-world problem solving. I value clean code, thoughtful design, and continuous learning, and I’m always motivated to improve both technical depth and product understanding.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently, I’m focused on growing as a strong Full Stack Developer, building modern web applications and contributing to meaningful, production-ready products.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}