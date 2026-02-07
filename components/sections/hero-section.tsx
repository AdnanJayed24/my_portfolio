"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { SiCodeforces } from "react-icons/si";
import { TypewriterText } from '@/components/typewriter-text';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive two-column: avatar on top for mobile, row for ≥md */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto">
          
          {/* Avatar */}
          <div
            className={`mb-8 md:mb-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Avatar className="w-52 h-52 mx-auto md:mx-0 ring-6 ring-primary/20 ring-offset-4 ring-offset-background">
              <AvatarImage src="/Adnan.jpg" alt="Muhammad Adnan Jayed" />
              <AvatarFallback className="text-2xl font-bold">
                green_heaven
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Text block */}
          <div className="text-center md:text-left md:pl-12">
            {/* Name & Title */}
            <div
              className={`mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Muhammad Adnan Jayed
              </h1>
              <div className="text-xl sm:text-2xl text-muted-foreground mb-4">
                <TypewriterText
                  texts={[
                    'Software Engineer',
                    'Full-Stack Developer',
                    'Competitive Programmer',
                  ]}
                />
              </div>
              <div className="flex items-center justify-center md:justify-start text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Chittagong, Bangladesh</span>
              </div>
            </div>

            {/* Description */}
            <div
              className={`mb-8 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-stack software engineer with a strong Competitive Programming background 
                and experience building scalable web apps using 
                React, Node.js, and modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`mb-8 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild className="group">
                  <a href="/AdnanJayed_UpdatedResume.pdf" download>
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-center md:justify-start space-x-6">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/AdnanJayed24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/greenheaven2002/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:muhammad.adnan.jayed@gmail.com">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://codeforces.com/profile/green_heaven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/codeforces.png"
                      alt="Codeforces Logo"
                      width={20} // Matches w-5 (5 * 4px = 20px)
                      height={20} // Matches h-5 (5 * 4px = 20px)
                      className="object-contain"
                    />
                    <span className="sr-only">Codeforces</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}