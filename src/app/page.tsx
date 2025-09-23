import { FindMeSection } from '@/components/find-me-section'
import { Footer } from '@/components/footer'
import { IntroSection } from '@/components/intro-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* X Organizations Black Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000'
        }}
      />

      {/* Your Content/Components */}
      <div className="relative z-20 space-y-4 py-6 font-mono">
        <main className="space-y-4">
          <IntroSection />

          <div className="bg-muted mx-auto h-px w-full max-w-2xl" />

          <SkillsSection />

          <div className="bg-muted mx-auto h-px w-full max-w-2xl" />

          <ProjectsSection />

          <div className="bg-muted mx-auto h-px w-full max-w-2xl" />

          <FindMeSection />

          <div className="bg-muted mx-auto h-px w-full max-w-2xl" />
        </main>

        <Footer />
      </div>
    </div>
  )
}
