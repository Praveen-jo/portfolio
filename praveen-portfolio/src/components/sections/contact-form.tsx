"use-client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function Toast({ message, open }: { message: string, open: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-md bg-slate-900 text-white px-4 py-2 shadow-md">
      {message}
    </div>
  )
}

export function ContactForm() {

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action || 'https://formspree.io/f/xgvgdqzw', {
        method: form.method || 'POST',
        body: formData,
        headers: {
          Accept: "application/json",
        }
      });

      if (response.ok) {
        setToast({ open: true, message: 'Message sent — thanks!' });
        form.reset();
      } else {
        setToast({ open: true, message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setToast({ open: true, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast({ open: false, message: '' }), 5000);
    }
  }

  // simple controlled form sumbit via fetch + tiny toast
  return (
    <>
      <form action="https://formspree.io/f/xgvgdqzw" method="POST" onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Your name" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Your email" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea name="message" id="message" placeholder="Your message" required />
        </div>

        {/* recommended Formspree fields */}
        <input type="hidden" name="_subject" value="New contact from website" />
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
          <p className="text-sm text-muted-foreground">I will get back to you as soon as possible.</p>
        </div>
      </form>

      <Toast open={toast.open} message={toast.message} />
    </>
  )
}