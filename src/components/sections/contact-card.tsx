"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactCard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        aria-hidden
      />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Contact Me </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Ask a question or leave a message</p>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <ContactForm />
            </div>

            <h3 className="mt-6 mb-3 text-lg sm:text-xl font-medium">FAQ</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>How long will it take to get a response?</AccordionTrigger>
                <AccordionContent>
                  <p>I will try to respond to your message as soon as possible. However, please note that I may be busy with other projects or commitments.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How can I contact you?</AccordionTrigger>
                <AccordionContent>
                  <p>You can contact me via email at <a href="mailto:praveenjoofficial05@gmail.com">praveenjoofficial05@gmail.com</a>.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}