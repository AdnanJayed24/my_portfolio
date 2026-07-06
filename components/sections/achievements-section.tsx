"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Building2 } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  category: 'Competition' | 'Achievement' | 'Certification';
  date: string;
  organization: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  logo?: 'codeforces' | 'codechef' | 'leetcode';
  color: string;
  proofLink: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICPC Asia Dhaka Regionalist 2024",
    category: "Competition",
    date: "2024",
    organization: "ACM-ICPC",
    description: "Ranked 23rd in the ICPC Asia Dhaka Regional Preliminary 2024, competing against hundreds of university teams from across Bangladesh.",
    icon: Trophy,
    color: "text-yellow-500",
    proofLink: "https://icpc.global/ICPCID/NFWW6368F3D0",
  },
  {
    id: 10,
    title: "7th Place – CoU CSE Fest 2025",
    category: "Competition",
    date: "2025",
    organization: "University of Chittagong",
    description: "Secured 7th place in the programming contest at CoU CSE Fest 2025, competing against top programmers from universities across Bangladesh.",
    icon: Trophy,
    color: "text-orange-500",
    proofLink: "https://coderoj.com/c/cou-iupc-2025-div/standings",
  },
  {
    id: 11,
    title: "2,000+ Problems Solved",
    category: "Achievement",
    date: "2023-present",
    organization: "Multiple Platforms",
    description: "Solved over 2,000 competitive programming problems across Codeforces, LeetCode, CodeChef, and other platforms, demonstrating deep algorithmic expertise.",
    icon: Trophy,
    color: "text-green-500",
    proofLink: "https://codeforces.com/profile/green_heaven",
  },
  {
    id: 2,
    title: "Top 50 in SRBD Code Contest 2025",
    category: "Competition",
    date: "2025",
    organization: "Samsung R&D Institute Bangladesh",
    description: "Ranked 46th in the first round of SRBD Code Contest 2025.",
    icon: Trophy,
    color: "text-purple-500",
    proofLink: "https://www.hackerrank.com/contests/srbd-code-contest-2025-round-1/leaderboard",
  },
  {
    id: 3,
    title: "Expert",
    category: "Achievement",
    date: "2025-present",
    organization: "Codeforces",
    description: "Expert in Codeforces with a max rating of 1873.",
    logo: "codeforces",
    color: "text-purple-600",
    proofLink: "https://codeforces.com/profile/green_heaven",
  },
  {
    id: 4,
    title: "Guardian",
    category: "Achievement",
    date: "2025-present",
    organization: "LeetCode",
    description: "Guardian in LeetCode with a max rating of 2190.",
    logo: "leetcode",
    color: "text-orange-500",
    proofLink: "https://leetcode.com/u/green_heaven/",
  },
  {
    id: 5,
    title: "4★",
    category: "Achievement",
    date: "2025-present",
    organization: "CodeChef",
    description: "4★ in CodeChef with a max rating of 1949 and also top 200 in Bangladesh.",
    logo: "codechef",
    color: "text-red-500",
    proofLink: "https://www.codechef.com/users/green_heaven",
  },
  {
    id: 6,
    title: "Top 2% in Multiple CodeForces Contests",
    category: "Competition",
    date: "2023-present",
    organization: "CodeForces",
    description: "Consistently ranked in the top 2% across multiple competitive programming contests on CodeForces platform.",
    logo: "codeforces",
    color: "text-green-500",
    proofLink: "https://codeforces.com/contests/with/green_heaven",
  },
  {
    id: 7,
    title: "Top-50 in CodeChef Contest",
    category: "Competition",
    date: "2025",
    organization: "CodeChef",
    description: "Secured top-50 in a CodeChef programming contest, showcasing superior algorithmic problem-solving skills.",
    logo: "codechef",
    color: "text-purple-500",
    proofLink: "https://www.codechef.com/rankings/START183B?itemsPerPage=100&order=asc&page=1&search=green_heaven&sortBy=rank",
  },
  {
    id: 8,
    title: "1st in the Country",
    category: "Competition",
    date: "2025",
    organization: "CodeChef",
    description: "Ranked 1st in Bangladesh (top 3.4% in the world) in CodeChef Starters 200 (Div 2).",
    logo: "codechef",
    color: "text-yellow-500",
    proofLink: "https://www.codechef.com/rankings/START200B?filterBy=Country%3DBangladesh&itemsPerPage=100&order=asc&page=1&sortBy=rank",
  },
  {
    id: 9,
    title: "Top 10 in the World",
    category: "Competition",
    date: "2025",
    organization: "LeetCode",
    description: "Ranked 9th in the world (top 0.02% globally) in Biweekly Contest 164.",
    logo: "leetcode",
    color: "text-cyan-500",
    proofLink: "https://leetcode.com/contest/biweekly-contest-164/ranking/?region=global_v2",
  },
];

const CATEGORIES = ["All", "Competition", "Certification", "Achievement"] as const;
type Category = (typeof CATEGORIES)[number];

const logoMap: Record<string, string> = {
  codeforces: "/codeforces.png",
  codechef:   "/codechef.png",
  leetcode:   "/leetcode.png",
};

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const logo = achievement.logo ? logoMap[achievement.logo] : null;

  return (
    <motion.a
      href={achievement.proofLink}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full block"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Card className="h-full cursor-pointer border-border/60 overflow-hidden group transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <div className="h-0.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between mb-3">
            {logo ? (
              <motion.div whileHover={{ rotate: 10, scale: 1.15 }} transition={{ type: "spring", stiffness: 400 }}>
                <Image src={logo} alt={achievement.organization} width={36} height={36} className="object-contain" />
              </motion.div>
            ) : achievement.icon ? (
              <motion.div whileHover={{ rotate: 10, scale: 1.15 }} transition={{ type: "spring", stiffness: 400 }}>
                <achievement.icon className={`w-9 h-9 ${achievement.color}`} />
              </motion.div>
            ) : null}
            <Badge
              variant="secondary"
              className="text-xs bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
            >
              {achievement.category}
            </Badge>
          </div>

          <CardTitle className="text-lg group-hover:text-violet-500 transition-colors duration-200">
            {achievement.title}
          </CardTitle>

          <CardDescription className="flex flex-wrap items-center gap-3 text-xs mt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-violet-400" />
              {achievement.date}
            </span>
            <span className="flex items-center gap-1">
              <Building2 className="w-3 h-3 text-cyan-500" />
              {achievement.organization}
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    </motion.a>
  );
}

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

export function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filtered = achievements.filter(
    (a) => selectedCategory === "All" || a.category === selectedCategory
  );

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Achievements & Recognition"
          subtitle="A collection of my accomplishments in competitive programming, certifications, and professional development."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedCategory === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Cards grid with AnimatePresence for filter transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {filtered.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="h-full"
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.92 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", damping: 20, stiffness: 110 },
                  },
                }}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
