"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Restaurant",
    description: "A practice project for a restaurant using MealDB API, with full menu browsing and cart functionality.",
    image: "/digidine.png",
    technologies: ["React", "TypeScript", "Redux"],
    category: "Frontend",
    demoUrl: "https://digidenrestaurant.vercel.app/",
    githubUrl: "https://github.com/AdnanJayed24/Restaurant",
  },
  {
    id: 2,
    title: "EchoChat",
    description: "A real-time full-stack chat application with WebSocket messaging and JWT authentication.",
    image: "/echochat.png",
    technologies: ["React", "Node.js", "Express.js", "WebSockets", "PostgreSQL", "JWT"],
    category: "Full Stack",
    demoUrl: "https://chat-2iuj.vercel.app/",
    githubUrl: "https://github.com/AdnanJayed24/Chat",
  },
  {
    id: 3,
    title: "URL Shortener",
    description: "A full-stack URL shortening service with analytics, custom slugs, and user authentication.",
    image: "/url-shortener.png",
    technologies: ["Next.js", "Node.js", "Express.js", "Tailwind CSS", "JWT"],
    category: "Full Stack",
    demoUrl: "https://url-shortener-8g2i.vercel.app/",
    githubUrl: "https://github.com/AdnanJayed24/url-Shortener",
  },
  {
    id: 4,
    title: "Online Judge",
    description: "A full-stack competitive programming judge platform supporting code submission, real-time verdict, and problem management.",
    image: "/online-judge.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    category: "Full Stack",
    demoUrl: "",
    githubUrl: "https://github.com/AdnanJayed24/OnlineJudge",
  },
];

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];

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

/* ─── 3-D tilt card ─── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  /* mouse-tracking tilt */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });
  const glowX   = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY   = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width  - 0.5);
    my.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 65 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", damping: 20, stiffness: 90, delay: index * 0.12 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        {/* Spotlight gradient following cursor */}
        <motion.div
          className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(139,92,246,0.25) 0%, transparent 60%)`,
            zIndex: 0,
          }}
        />

        <Card className="relative h-full flex flex-col overflow-hidden border-border/60 group-hover:border-violet-500/40 transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]">
          {/* Image */}
          <div className="relative overflow-hidden h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              style={{ transform: "scale(1.01)" }}
            />
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Category badge */}
            <div className="absolute top-3 right-3">
              <Badge className="bg-violet-500/80 text-white border-0 backdrop-blur-sm text-xs">
                {project.category}
              </Badge>
            </div>
          </div>

          <CardHeader className="pb-2">
            <CardTitle className="text-xl group-hover:text-violet-500 transition-colors duration-200">
              {project.title}
            </CardTitle>
            <CardDescription className="leading-relaxed">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col flex-1 justify-between">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <motion.div key={tech} whileHover={{ scale: 1.08, y: -1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Badge variant="secondary" className="text-xs hover:bg-violet-500/15 transition-colors">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1">
                <Button
                  size="sm"
                  asChild
                  className="w-full border-0 text-white"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Demo
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:border-violet-500/60 hover:text-violet-500 hover:bg-violet-500/8 transition-colors"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-3.5 h-3.5 mr-1.5" />
                    Code
                  </a>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );
  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies."
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedCategory === cat && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Filter className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length > 4 && (
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="px-8 hover:border-violet-500/60 hover:bg-violet-500/8 hover:text-violet-500 transition-colors"
              >
                {showAll ? "Show Less" : `Show All ${filtered.length} Projects`}
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
