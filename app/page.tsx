import dynamic from 'next/dynamic';
import { ExperienceSection } from '@/components/sections/experience-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

const DynamicHeroSection = dynamic(() => import('@/components/sections/hero-section-wrapper'), {
  ssr: false,
});

const DynamicNavigation = dynamic(() => import('@/components/navigation').then(mod => ({ default: mod.Navigation })), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <DynamicNavigation />
      <DynamicHeroSection />
      <ExperienceSection />
      <AchievementsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}