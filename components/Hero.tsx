"use client";

export default function Hero() {
  return (
    <header className="text-center py-16 md:py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
        Daniel Hansson
      </h1>
      <p className="text-xl md:text-2xl mb-6" style={{ color: 'var(--primary)' }}>
        Datacenter Manager med bakgrund som entreprenör och teknisk specialist
      </p>
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 px-4" style={{ color: 'var(--light)' }}>
        Leder drift av datacenter i södra Sverige. Specialist på Linux, virtualisering och serverdrift med dokumenterad erfarenhet från både småföretag och enterprise-miljöer. 
        Grundat och sålt tre IT-bolag. Kombinerar teknisk expertis med affärsförståelse och stark kommunikativ förmåga.
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
          <span>CV & Personligt brev</span>
        </a>
        <a 
          href="https://www.openstreetmap.org/?#map=13/55.59949/13.37809" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>Genarp, Skåne</span>
        </a>
      </div>
    </header>
  );
}
