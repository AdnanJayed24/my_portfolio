"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 80 }
    ]
  },
  {
    title: "Other Skills",
    icon: Globe,
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Technical Writing", level: 75 },
      { name: "Code Review", level: 85 },
      { name: "Mentoring", level: 80 }
    ]
  }
];

const certifications = [
  "ICPC Regionals 2024 Participant",
  "Full Stack Development Course",
  "React Advanced Patterns",
  "Node.js Best Practices",
  "MongoDB Certified Developer"
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
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        {/* <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Certifications & Training</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}