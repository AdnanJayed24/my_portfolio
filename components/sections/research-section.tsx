"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, BrainCircuit, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const interests = [
  "Federated Learning",
  "Privacy-Preserving Machine Learning",
  "Deep Learning for Healthcare Analytics",
  "Multi-Label Clinical Prediction",
];

export function ResearchSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 20 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Research</h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring trustworthy machine learning for real-world healthcare data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div className="lg:col-span-1" initial={{ opacity: 0, y: 35 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 20, delay: 0.08 }}>
            <Card className="h-full border-border/60">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-6 h-6 text-cyan-500" />
                  <CardTitle>Research Interests</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {interests.map((interest) => <Badge key={interest} variant="secondary" className="text-sm">{interest}</Badge>)}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 35 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 20, delay: 0.16 }}>
            <Card className="h-full border-border/60">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FlaskConical className="w-6 h-6 text-violet-500 mt-0.5" />
                  <div>
                    <CardTitle>Multi-Label Federated Learning for Diabetes Complication Prediction Across Heterogeneous Hospitals</CardTitle>
                    <CardDescription className="mt-2">International Conference on Recent Progresses in Science, Engineering and Technology | Under review</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>Evaluated federated multi-label prediction of five diabetes complications using 2,500 anonymous records distributed across three heterogeneous hospitals in Chattogram.</p>
                <p>Developed a shared multilayer perceptron with FedAvg and class-weighted binary cross-entropy, reaching 0.599 F1-micro and 0.795 macro ROC-AUC.</p>
                <p>Investigated privacy and robustness through DP-SGD utility analysis and feature-leakage sensitivity experiments.</p>
                <div className="flex items-center gap-2 pt-1 text-foreground font-medium">
                  <BookOpen className="w-4 h-4 text-cyan-500" />
                  Federated learning, clinical prediction, and privacy analysis
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
