"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  Award,
  Calendar,
  Building2,
  Users,
  Code,
} from 'lucide-react';

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
    proofLink: "https://icpc.global/ICPCID/NFWW6368F3D0"
  },
  {
    id: 2,
    title: "Expert",
    category: "Achievement",
    date: "2025-present",
    organization: "Codeforces",
    description: "Expert in Codeforces with a max rating of 1650",
    icon: "codeforces",
    color: "text-purple-600",
    proofLink: "https://codeforces.com/profile/green_heaven"
  },
  {
    id: 3,
    title: "Top 2% in Multiple CodeForces Contests",
    category: "Competition",
    date: "2023-present",
    organization: "CodeForces",
    description: "Consistently ranked in the top 2% across multiple competitive programming contests on CodeForces platform.",
    icon: Award,
    color: "text-green-600",
    proofLink: "https://codeforces.com/contests/with/green_heaven"
  },
  {
    id: 4,
    title: "4*",
    category: "Achievement",
    date: "2025-present",
    organization: "CodeChef",
    description: "4* in CodeChef with a max rating of 1872 and also top 200 in Bangladesh",
    icon: Code,
    color: "text-red-600",
    proofLink: "https://www.codechef.com/users/green_heaven"
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
    proofLink: "https://www.codechef.com/rankings/START183B?itemsPerPage=100&order=asc&page=1&search=green_heaven&sortBy=rank"
  },
  {
    id: 6,
    title: "Mobile App Development Certification",
    category: "Certification",
    date: "2024",
    organization: "ICT Division",
    description: "Completed learning Mobile App Development with Kotlin",
    icon: Award,
    color: "text-blue-600",
    proofLink: "/Certificate.pdf"
  }
];

const categories = ["All", "Competition", "Certification", "Achievement"];

export function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAchievements = achievements.filter(
    (achievement) =>
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
            const isCodeforcesLogo = achievement.id === 2 || achievement.id === 3;
            const isCodechefLogo = (achievement.id === 4 || achievement.id === 5);
            return (
              <a
                key={achievement.id}
                href={achievement.proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full"
              >
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      {isCodeforcesLogo ? (
                        <img
                          src="/codeforces.png"
                          alt="Codeforces Logo"
                          className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                      ) : isCodechefLogo ? (
                        <img
                          src="/codechef.png"
                          alt="CodeChef Logo"
                          className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                      ) : (
                        <achievement.icon
                          className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform`}
                        />
                      )}
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
                  <CardContent className="mt-auto">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
}
