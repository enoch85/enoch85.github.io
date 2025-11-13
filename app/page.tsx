import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Additional from "@/components/Additional";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto">
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Additional />
        
        <footer className="text-center py-12 mt-16 border-t px-4" style={{ borderColor: 'var(--border)', color: 'var(--light)' }}>
          <p>© 2024 Daniel Hansson • Byggt med passion för clean code och minimal komplexitet</p>
          <p className="mt-4 text-sm">
            Genarp, Skåne • Redo för nya utmaningar
          </p>
        </footer>
      </main>
    </div>
  );
}
