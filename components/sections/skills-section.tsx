"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-violet-500",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-cyan-500",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    skills: ["Node.js", "Express.js", "Django", "PostgreSQL", "MongoDB", "RESTful APIs", "Python", "SQL"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "text-indigo-500",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]",
    skills: ["Git/GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    title: "Other Skills",
    icon: Globe,
    color: "text-pink-500",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    skills: [
      "Problem Solving",
      "Team Leadership",
      "Project Management",
      "Technical Writing",
      "Code Review",
      "Mentoring",
    ],
  },
];

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

function SkillCard({
  category,
  cardIndex,
}: {
  category: (typeof skillCategories)[number];
  cardIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const IconComponent = category.icon;

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 90,
        delay: cardIndex * 0.12,
      }}
    >
      <motion.div
        className="h-full"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className={`h-full border-border/60 overflow-hidden group transition-all duration-300 hover:border-violet-500/30 ${category.glow}`}
        >
          {/* Top accent bar */}
          <div className="h-0.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2.5 text-base">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <IconComponent className={`w-5 h-5 ${category.color}`} />
              </motion.div>
              <span>{category.title}</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                    delay: cardIndex * 0.12 + skillIndex * 0.04,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-sm cursor-default hover:border-violet-500/60 hover:bg-violet-500/8 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-violet-500/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills across various domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} cardIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
