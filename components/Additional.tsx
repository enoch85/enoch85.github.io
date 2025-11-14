
import type { ReactNode } from 'react';

interface UniqueItemProps {
  title: string;
  description: string | ReactNode;
}

function UniqueItem({ title, description }: UniqueItemProps) {
  return (
    <div className="unique-item">
      <h3 className="mb-3 font-semibold text-lg" style={{ color: 'var(--primary)' }}>
        {title}
      </h3>
      <div style={{ color: 'var(--light)', lineHeight: '1.7' }}>
        {description}
      </div>

    </div>
  );
}

export default function Additional() {
  const uniquePoints: UniqueItemProps[] = [
    {
      title: 'Dokumenterad expertis',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Grundare och maintainer för <a href="https://nextcloud.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '2px' }}>Nextcloud</a>s officiella VM med global distribution via mitt egna företag</li>
          <li>Talare på <a href="https://owncloud.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '2px' }}>ownCloud</a> Conference och Nextcloud Conference i Berlin samt <a href="https://foss-north.se/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '2px' }}>foss-north</a> i Göteborg</li>
          <li>Nutanix ECA-certifierad (Enterprise Cloud Administration)</li>
        </ul>
      ),
    },
    {
      title: 'Entreprenöriell erfarenhet',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Grundat och sålt tre företag</li>
          <li>Suttit i flera företagsstyrelser</li>
          <li>Väldigt driven personlighet</li>
          <li>Förstår både tekniska och affärsmässiga aspekter av IT-lösningar</li>
          <li>Erfarenhet av att bygga team och skala verksamhet</li>
        </ul>
      ),
    },
    {
      title: 'Open Source-bidragare',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Aktiv bidragsgivare till Nextcloud och ownCloud med flera års historia</li>
          <li>Utvecklat automationsskript och auto-deploy appliances som används på tusentals servrar globalt</li>
          <li>Fokus på att göra komplexa system tillgängliga</li>
        </ul>
      ),
    },
    {
      title: 'Teknisk kommunikatör',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Kombinerar djup teknisk kunskap med stark kommunikativ förmåga från 10+ års erfarenhet inom försäljning och kundrelationer</li>
          <li>Kan översätta tekniska lösningar till affärsnytta</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="my-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="section-icon"></div>
        <h2 className="text-3xl font-semibold">Vad gör mig unik?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {uniquePoints.map((point, index) => (
          <UniqueItem key={index} {...point} />
        ))}
      </div>

    </section>
  );
}
