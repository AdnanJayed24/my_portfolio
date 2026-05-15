"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/* ─── Animated section heading ─── */
function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", damping: 20 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
      <motion.div
        className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mb-4"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammad.adnan.jayed@gmail.com",
    href: "mailto:muhammad.adnan.jayed@gmail.com",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1301220681",
    href: "tel:+8801301220681",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chittagong, Bangladesh",
    href: null,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]     = useState(false);
  const [error, setError]             = useState<string | null>(null);

  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView  = useInView(leftRef,  { once: true, margin: "-60px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to send message');
      (e.target as HTMLFormElement).reset();
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-violet-500/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-32 w-72 h-72 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Left: contact info ── */}
          <motion.div
            ref={leftRef}
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", damping: 22, stiffness: 90 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href, color, bg }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={leftInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ type: "spring", delay: 0.15 + i * 0.1, stiffness: 200 }}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-violet-500 transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <p className="font-semibold text-foreground mb-3 text-sm">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/greenheaven24",              icon: FaGithub,  label: "GitHub" },
                  { href: "https://www.linkedin.com/in/greenheaven2002/", icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-border/60 text-muted-foreground hover:text-violet-500 hover:border-violet-500/60 hover:bg-violet-500/10 transition-colors"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", damping: 22, stiffness: 90 }}
          >
            <Card className="border-border/60 overflow-hidden hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] transition-all duration-300">
              <div className="h-0.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500" />
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-950/30 dark:border-green-800">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800 dark:text-green-400">
                        Message sent successfully! I&apos;ll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                  >
                    <Alert className="mb-6 border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800 dark:text-red-400">
                        {error}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={rightInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required disabled={isSubmitting} placeholder="Adnan"
                        className="focus:border-violet-500/60 focus:ring-violet-500/20 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required disabled={isSubmitting} placeholder="Jayed"
                        className="focus:border-violet-500/60 focus:ring-violet-500/20 transition-colors" />
                    </div>
                  </motion.div>

                  {[
                    { id: "email",   name: "email",   type: "email",  label: "Email",   placeholder: "adnan@example.com",  delay: 0.15 },
                    { id: "subject", name: "subject", type: "text",   label: "Subject", placeholder: "Project inquiry",    delay: 0.20 },
                  ].map(({ id, name, type, label, placeholder, delay }) => (
                    <motion.div
                      key={id}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={rightInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay, type: "spring" }}
                    >
                      <Label htmlFor={id}>{label}</Label>
                      <Input id={id} name={name} type={type} required disabled={isSubmitting} placeholder={placeholder}
                        className="focus:border-violet-500/60 focus:ring-violet-500/20 transition-colors" />
                    </motion.div>
                  ))}

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={rightInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25, type: "spring" }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message" name="message" rows={5} required disabled={isSubmitting}
                      placeholder="Tell me about your project or just say hello..."
                      className="focus:border-violet-500/60 focus:ring-violet-500/20 transition-colors resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={rightInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, type: "spring" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full border-0 text-white"
                      style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
