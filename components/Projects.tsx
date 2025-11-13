
interface ProjectCardProps {
  title: string;
  description: string;
  links: { text: string; url: string }[];
  stars?: string;
  forks?: string;
}

function ProjectCard({ title, description, links, stars, forks }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        {(stars || forks) && (
          <div className="flex gap-3 text-sm" style={{ color: 'var(--light)' }}>
            {stars && <span>★ {stars}</span>}
            {forks && <span>⑂ {forks}</span>}
          </div>
        )}
      </div>
      <p className="mb-4 leading-relaxed" style={{ color: 'var(--light)' }}>
        {description}
      </p>
      <div className="flex gap-3 flex-wrap">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {link.text}
          </a>
        ))}
      </div>

    </div>
  );
}

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: 'Nextcloud VM',
  description: 'Officiell Nextcloud-appliance med interaktiva skript som tar dig från ren server till A+ TLS-härdad instans – inklusive valbara integrationer som Collabora/ONLYOFFICE. Projektet föddes ur behovet att äga min data och göra installationer enkla, blev officiell 2016 och används idag på tusentals servrar världen över.',
      stars: '1.5k',
      forks: '674',
      links: [
        { text: 'GitHub →', url: 'https://github.com/nextcloud/vm' },
        { text: 'Dokumentation →', url: 'https://www.hanssonit.se/nextcloud-vm/' },
      ],
    },
    {
      title: 'OVMS Home Assistant',
      description: 'MQTT-integration för Open Vehicle Monitoring System med automatisk entitets-discovery, cell-level batteridata och GPS-tracking. Löser utfasning av 3G i elbilar genom OVMS-modul med 4G/WiFi. Omfattande Home Assistant-integration via HACS.',
      stars: '23',
      forks: '1',
      links: [
        { text: 'GitHub →', url: 'https://github.com/enoch85/ovms-home-assistant' },
        { text: 'Blog: Setup →', url: 'https://www.techandme.se/ovms-open-vehicle-monitoring-system/' },
        { text: 'Blog: MQTT →', url: 'https://www.techandme.se/ovms-v3-and-mqtt/' },
      ],
    },
    {
      title: 'Global Energy Spotprices',
      description: 'Global elprisprognos-integration med stöd för 40+ regioner (Europa, Australien, USA). Intelligent 15-minuters intervallhantering med 9+ priskällor och automatisk fallback. DST-medveten valutakonvertering och self-learning cache för spot-price + effekttariff-optimering.',
      stars: '16',
      forks: '0',
      links: [
        { text: 'GitHub →', url: 'https://github.com/enoch85/ge-spot' },
      ],
    },
    {
      title: 'EffektGuard',
      description: 'Intelligent värmepumpsoptimering med ML-baserad självlärande 8-lagers beslutsmotor. Balanserar pris, effekttariff, väder, komfort och säkerhet. Klimatzon-anpassning (Arktis-Medelhavet), matematisk väderkompensation och thermisk skuld-tracking. Produktionstestas i svenska hem.',
      stars: '1',
      forks: '0',
      links: [
        { text: 'GitHub →', url: 'https://github.com/enoch85/EffektGuard' },
      ],
    },
  ];

  return (
    <section className="my-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="section-icon"></div>
        <h2 className="text-3xl font-semibold">Projekt & Open Source</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </section>
  );
}
