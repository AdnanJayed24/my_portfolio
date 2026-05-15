"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

export function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Ambient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-violet-500/6 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Education"
          subtitle="My academic background in Computer Science and Engineering."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", damping: 20, stiffness: 90 }}
            whileHover={{ y: -4 }}
          >
            <Card className="border-border/60 overflow-hidden card-glow">
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500" />

              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-violet-500/20 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <GraduationCap className="w-7 h-7 text-violet-500" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          B.Sc. in Computer Science and Engineering
                        </h3>
                        <p className="text-violet-500 font-medium mt-0.5">
                          Chittagong University of Engineering and Technology (CUET)
                        </p>
                      </div>

                      {/* GPA badge */}
                      <motion.div
                        className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border border-cyan-400/30 bg-cyan-400/10 text-cyan-600 dark:text-cyan-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Award className="w-3.5 h-3.5" />
                        GPA: 3.61 / 4.00
                      </motion.div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-violet-400" />
                        March 2022 – April 2026
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        Chattogram, Bangladesh
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
