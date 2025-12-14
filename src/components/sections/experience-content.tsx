"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Code2, Database, Cloud, GitBranch } from "lucide-react";

export function ExperienceContent() {
  const experience = {
    title: "Full Stack Developer",
    company: "LogBase Technologies",
    duration: "Internship (6 months) + Full-time (6 months)",
    period: "2024 Dec – 2025 Nov",
    description: "Worked in a product-based SaaS environment contributing to the development of a live Shopify Upsell & Cross-Sell application. Took ownership of features spanning UI, API integration, data handling, and production support.",
    contributions: [
      "Built and maintained web application features using React, Next.js, JavaScript, HTML, and CSS.",
      "Developed and integrated REST and GraphQL APIs to support admin dashboards and storefront flows.",
      "Implemented multi-language admin translations to support international merchants.",
      "Added event tracking (PostHog) to capture user behavior and feature usage.",
      "Built import and export functionality for managing upsell offers.",
      "Developed Refer & Earn pages, promotional banners, and reusable application components.",
      "Implemented nested cart line item logic to support complex upsell workflows on the storefront.",
      "Worked with AWS services (EBS, S3, SQS) and DynamoDB as part of backend and infrastructure workflows.",
      "Collaborated with designers, backend engineers, product managers, and CX teams throughout the development lifecycle.",
      "Investigated and resolved production and customer support issues, improving application stability and reliability.",
    ],
    techStack: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Shopify Polaris",
      "REST APIs",
      "GraphQL",
      "AWS (EBS, S3, SQS)",
      "DynamoDB",
      "Git",
      "Bitbucket",
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">
        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl mb-2">{experience.title}</CardTitle>
              <p className="text-xl font-semibold text-primary mb-3">{experience.company}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              Key Contributions
            </h3>
            <ul className="space-y-3">
              {experience.contributions.map((contribution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="text-primary">▸</span>
                  <span className="leading-relaxed">{contribution}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                >
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
