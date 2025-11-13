import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Additional from "@/components/Additional";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <main className="max-w-5xl mx-auto">
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Additional />
        
        <footer className="text-center py-12 mt-16 border-t px-4" style={{ borderColor: 'var(--border)', color: 'var(--light)' }}>
          <p>© {new Date().getFullYear()} Daniel Hansson • Byggt med passion för clean code och minimalism</p>
          <p className="mt-4 text-sm">
            <a href="https://www.openstreetmap.org/?#map=13/55.59949/13.37809" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>📍 Genarp, Skåne</a> • 🚀 Redo för nya utmaningar
          </p>
        </footer>
      </main>
    </div>
  );
}
