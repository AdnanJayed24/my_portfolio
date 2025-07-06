"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trophy, Award, Calendar, Building2, Users, Code, BookOpen } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "ICPC Regionals 2024",
    category: "Competition",
    date: "2024",
    organization: "ACM-ICPC",
    description: "Participated in the International Collegiate Programming Contest Regional competition, demonstrating problem-solving skills and algorithmic thinking.",
    icon: Trophy,
    color: "text-yellow-600",
    details: "Competed with a team of 3 members, solving complex algorithmic problems under time pressure. Gained valuable experience in competitive programming and teamwork."
  },
  {
    id: 2,
    title: "Full Stack Development Certification",
    category: "Certification",
    date: "2024",
    organization: "ICT Division",
    description: "Completed learning full-stack development with ReactJs, C#, .NET, MySQL Server",
    icon: Code,
    color: "text-blue-600",
    details: "Intensive 6-month program covering ReactJs, C#, .NET, MySQL Server"
  },
  {
    id: 3,
    title: "Mobile App Development Certification",
    category: "Certification",
    date: "2024",
    organization: "ICT Division",
    description: "Completed learning Mobile App Development with Kotlin",
    icon: Code,
    color: "text-blue-600",
    details: "Intensive 6-month program covering Kotlin"
  },
  {
    id: 4,
    title: "Top 2% in Multiple CodeForces Contests",
    category: "Competition",
    date: "2023-present",
    organization: "CodeForces",
    description: "Consistently ranked in the top 2% across multiple competitive programming contests on CodeForces platform.",
    icon: Award,
    color: "text-green-600",
    details: "Demonstrated exceptional problem-solving abilities and algorithmic knowledge through consistent high performance in competitive programming contests."
  },
  {
    id: 5,
    title: "Top-50 in CodeChef Contest",
    category: "Competition",
    date: "2025-present",
    organization: "CodeChef",
    description: "Secured top-50 in a CodeChef programming contest, showcasing superior algorithmic problem-solving skills.",
    icon: Trophy,
    color: "text-purple-600",
    details: "45th among thousands of participants in a challenging algorithmic programming contest, solving complex problems efficiently."
  },
  {
    id: 6,
    title: "LUNE_NOIRE",
    category: "Achievement",
    date: "2024",
    organization: "ICPC Regional",
    description: "23rd in ICPC Asia Dhaka Regional Preliminary Contest 2024",
    icon: Users,
    color: "text-red-600",
    details: "Successfully secured top 30 in ICPC Asia Dhaka Regional Preliminary Contest 2024 and top 100 ICPC Asia Dhaka Regional Contest 2024 in with good team collaboration"
  },
  {
    id: 7,
    title: "Expert",
    category: "Codeforces",
    date: "2025-present",
    organization: "Codeforces",
    description: "Expert in Codeforces",
    icon: Code,
    color: "text-purple-600",
    details: "Got the Expert Rank in Codeforces with max rating of 1650 after several contests"
  }
];

const categories = ["All", "Competition", "Certification", "Achievement", "Codeforces"];

export function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAchievements = achievements.filter(achievement => 
    selectedCategory === "All" || achievement.category === selectedCategory
  );

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my accomplishments in competitive programming, certifications, and professional development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Dialog key={achievement.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <IconComponent className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform`} />
                        <Badge variant="secondary" className="text-xs">
                          {achievement.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-3 h-3" />
                          <span>{achievement.organization}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                      <Badge variant="secondary">{achievement.category}</Badge>
                    </div>
                    <DialogTitle className="text-xl">{achievement.title}</DialogTitle>
                    <DialogDescription className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{achievement.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4" />
                        <span>{achievement.organization}</span>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.details}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}