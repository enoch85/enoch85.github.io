
interface UniqueItemProps {
  title: string;
  description: string;
}

function UniqueItem({ title, description }: UniqueItemProps) {
  return (
    <div className="unique-item">
      <h3 className="mb-3 font-semibold text-lg" style={{ color: 'var(--primary)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--light)', lineHeight: '1.7' }}>
        {description}
      </p>

    </div>
  );
}

export default function Additional() {
  const uniquePoints: UniqueItemProps[] = [
    {
      title: 'Entreprenöriell bakgrund',
      description: 'Grundat och drivit fyra företag. Förstår både tekniska och affärsmässiga aspekter av IT-lösningar.',
    },
    {
      title: 'Linux-expert',
      description: 'Dokumenterad djup kompetens i Linux och Windows-miljöer.',
    },
    {
      title: 'Open Source-bidragare',
      description: 'Aktiv inom open source genom kod, dokumentation och support.',
    },
    {
      title: 'Social & Teknisk',
      description: 'Kombinerar djup teknisk expertis med stark kommunikativ förmåga och säljbakgrund.',
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
