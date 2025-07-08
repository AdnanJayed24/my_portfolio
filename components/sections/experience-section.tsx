"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Better E-Mart",
    position: "Software Engineer Intern",
    location: "Remote",
    duration: "April 2025 - July 2025",
    description: "Developed and maintained frontend interfaces using Next.js and React Native, ensuring responsive and user-friendly design.",
    achievements: [
      "Implemented RESTful APIs with Node.js, Express.js, and MongoDB",
      "Performed full CRUD operations to support business interactions",
      "Employed Git and GitHub for version control",
      "Established streamlined workflows and code review processes"
    ],
    technologies: ["Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"]
  },
  {
    id: 2,
    company: "Udvash Academic and Admission Care",
    position: "Senior Instructor",
    location: "Chittagong, Bangladesh",
    duration: "March 2022 - Present",
    description: "Provided comprehensive instruction in Mathematics, Physics, Chemistry, and ICT, adapting materials to diverse learning styles.",
    achievements: [
      "Designed and delivered comprehensive instruction in Mathematics, Physics, Chemistry, and ICT, adapting materials to diverse learning styles.",
      "Authored detailed solution sheets and structured marking schemes for ICT assessments, enhancing clarity and consistency in evaluation.",
      "– Conducted meticulous evaluation of student scripts, earning recognition as a top-performing evaluator for accuracy and fairness.",
      "Provided constructive feedback to improve student performance and comprehension across multiple subjects."
    ],
    technologies: ["Teaching", "Evaluation"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and education, building impactful solutions and sharing knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-1">{experience.position}</CardTitle>
                      <CardDescription className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}