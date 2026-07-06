"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, FileDown } from 'lucide-react';
import Link from "next/link";

const experiences = [
  {
    id: 1,
    company: "Intellectify.io",
    position: "Software Engineer Intern",
    location: "Remote",
    duration: "January 2026 - March 2026",
    description:
      "Shipped frontend pages and admin-side features across 3 production web platforms in the company's portfolio — intellectify.io (mentor-matching for paid 1:1 sessions), arektakichu.com, and arektaboi.com.",
    achievements: [
      "Built 3 admin-panel modules — a cash-management interface plus product and order views — in React + Django on arektakichu.com",
      "Deployed features to production through Git/GitHub PR review with senior engineers, using Docker, AWS, PM2, and Gunicorn",
    ],
    technologies: ["React", "Django", "Docker", "AWS", "PM2", "Gunicorn", "Git", "GitHub"],
    certificate: null,
  },
  {
    id: 2,
    company: "Better E-Mart",
    position: "Software Engineer Intern",
    location: "Remote",
    duration: "April 2025 - June 2025",
    description:
      "Developed and maintained frontend interfaces using Next.js and React Native, ensuring responsive and user-friendly design.",
    achievements: [
      "Implemented RESTful APIs with Node.js, Express.js, and MongoDB",
      "Performed full CRUD operations to support business interactions",
      "Employed Git and GitHub for version control",
      "Established streamlined workflows and code review processes",
    ],
    technologies: ["Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"],
    certificate: "\Better Certificate.pdf",
  },
  {
    id: 3,
    company: "EchoLogyx Ltd.",
    position: "Industrial Attachment, AI Product Team",
    location: "Hybrid",
    duration: "September 2025 - November 2025",
    description:
      "Developed Next.js interview-flow components and candidate-side UI for Echointerview, an AI-powered recruitment SaaS.",
    achievements: [
      "Collaborated with the AI product team on LLM-integrated evaluation features, running A/B tests across product iteration cycles",
    ],
    technologies: ["Next.js", "React", "AI/LLM Integration", "A/B Testing", "REST API"],
    certificate: null,
  },
  {
    id: 4,
    company: "Udvash Academic and Admission Care",
    position: "Senior Instructor",
    location: "Chattogram, Bangladesh",
    duration: "March 2022 - Present",
    description:
      "Provided comprehensive instruction in Mathematics, Physics, Chemistry, and ICT, adapting materials to diverse learning styles.",
    achievements: [
      "Designed and delivered comprehensive instruction across multiple subjects.",
      "Authored detailed solution sheets and structured marking schemes for ICT assessments.",
      "Conducted meticulous evaluation of student scripts, earning recognition as a top-performing evaluator.",
      "Provided constructive feedback to improve student performance and comprehension.",
    ],
    technologies: ["Teaching", "Evaluation"],
  },
];

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
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
      <motion.div
        className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mb-4"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      />
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}

/* ─── Single experience card ─── */
function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Animated timeline dot */}
      <motion.div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10"
        style={{
          background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
          border: "3px solid hsl(var(--background))",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", delay: 0.15, stiffness: 200 }}
      />
      {/* Dot glow */}
      <motion.div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-violet-500/25 blur-md z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      {/* Card */}
      <motion.div
        className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}
        initial={{ opacity: 0, x: -70 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: "spring", damping: 22, stiffness: 100, delay: 0.1 }}
      >
        <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="card-glow border-border/60 overflow-hidden">
            {/* Top gradient accent */}
            <div className="h-0.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500" />
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 text-violet-500" />
                  <span>{experience.duration}</span>
                </div>
                {experience.certificate && (
                  <Link
                    href={experience.certificate}
                    download
                    className="flex items-center gap-1 text-violet-500 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Certificate</span>
                  </Link>
                )}
              </div>

              <CardTitle className="text-xl mb-1">{experience.position}</CardTitle>

              <CardDescription className="flex items-center flex-wrap gap-3">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-cyan-500" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  {experience.location}
                </span>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {experience.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-violet-500 mt-0.5 flex-shrink-0">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.08, y: -1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs hover:bg-violet-500/15 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Section ─── */
export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 90%", "end 10%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey in software development and education, building impactful solutions and sharing knowledge."
        />

        <div className="max-w-4xl mx-auto">
          <div ref={timelineRef} className="relative">
            {/* Static grey track */}
            <div className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            {/* Animated gradient fill */}
            <motion.div
              className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-0.5 origin-top"
              style={{
                scaleY,
                background: "linear-gradient(180deg, #8b5cf6, #06b6d4, #6366f1)",
              }}
            />

            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
