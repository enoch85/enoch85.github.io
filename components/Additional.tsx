
interface UniqueItemProps {
  icon: string;
  title: string;
  description: string;
}

function UniqueItem({ icon, title, description }: UniqueItemProps) {
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
      icon: '',
      title: 'Entreprenöriell bakgrund',
      description: 'Grundat och drivit fyra företag med framgång. Förstår både tekniska och affärsmässiga aspekter av IT-lösningar.',
    },
    {
      icon: '',
      title: 'Linux-expert',
      description: 'Från nybörjare 2013 till företagets "go-to guy". Djup förståelse för både Linux och Windows-miljöer.',
    },
    {
      icon: '',
      title: 'Open Source-bidragare',
      description: 'Aktiv inom open source-communityn. "Ger tillbaka till världen" genom kod, dokumentation och support.',
    },
    {
      icon: '',
      title: 'Social & Teknisk',
      description: 'Ovanlig kombination av djup teknisk expertis och starka sociala färdigheter från säljbakgrund.',
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
