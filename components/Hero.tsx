"use client";

export default function Hero() {
  return (
    <header className="text-center py-16 md:py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
        Daniel Hansson
      </h1>
      <p className="text-xl md:text-2xl mb-6" style={{ color: 'var(--primary)' }}>
        Datacenter Manager • Open Source-expert • Entreprenör • Systemadministratör
      </p>
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 px-4" style={{ color: 'var(--light)' }}>
        Resultatorienterad Datacenter Manager och Open Source-expert med passion för automation, stabilitet och kontinuerlig förbättring. 
        Över 12 års erfarenhet inom IT-infrastruktur, virtualisering och automation med beprövad förmåga att leda team, driva moderniseringsprojekt och säkerställa 24/7 driftstabilitet för kritiska system (700+ servrar). 
        Kombinerar teknisk expertis inom Linux och virtualisering med entreprenöriell bakgrund, affärsförståelse och lösningsorienterat mindset. 
        Söker en utmanande roll där jag kan använda min tekniska passion för att driva innovation och effektivitet.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-4xl mx-auto px-4 mb-8">
        <a 
          href="mailto:mailto@danielhansson.nu" 
          className="contact-item"
        >
          <span>E-post</span>
        </a>
        <a 
          href="https://linkedin.com/in/daniel-hansson-7564a490/" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/enoch85" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>GitHub</span>
        </a>
        <a 
          href="https://cloud.danielhansson.nu/s/BKeknxsZargdRL6" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>CV</span>
        </a>
        <a 
          href="https://www.openstreetmap.org/?#map=11/55.5799/13.2632" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>Var finns jag?</span>
        </a>
      </div>
    </header>
  );
}
