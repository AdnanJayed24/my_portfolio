"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "postgreSQL",
      "MongoDB",
      "RESTful APIs",
      "Python",
      "SQL"
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Vercel"
    ]
  },
  {
    title: "Other Skills",
    icon: Globe,
    skills: [
      "Problem Solving",
      "Team Leadership",
      "Project Management",
      "Technical Writing",
      "Code Review",
      "Mentoring"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <IconComponent className="w-5 h-5 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
