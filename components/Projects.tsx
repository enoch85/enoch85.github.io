
interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  links: { text: string; url: string }[];
}

function ProjectCard({ icon, title, description, links }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
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
      icon: '',
      title: 'Nextcloud VM',
      description: 'Huvudutvecklare och maintainer för omfattande VM-appliance med interaktiva installationsskript. 1.5k stars, 674 forks, distribueras officiellt av Nextcloud med ~100 nedladdningar/dag sedan 2016. A+ säkerhetsbetyg med TLS-support och Collabora/ONLYOFFICE-integration.',
      links: [
        { text: 'GitHub →', url: 'https://github.com/nextcloud/vm' },
        { text: 'Dokumentation →', url: 'https://www.hanssonit.se/nextcloud-vm/' },
      ],
    },
    {
      icon: '',
      title: 'OVMS Home Assistant',
      description: 'MQTT-integration för Open Vehicle Monitoring System med automatisk entitets-discovery, cell-level batteridata och GPS-tracking. Löser utfasning av 3G i elbilar genom OVMS-modul med 4G/WiFi. Omfattande Home Assistant-integration via HACS.',
      links: [
        { text: 'GitHub →', url: 'https://github.com/enoch85/ovms-home-assistant' },
        { text: 'Blog: Setup →', url: 'https://www.techandme.se/ovms-open-vehicle-monitoring-system/' },
        { text: 'Blog: MQTT →', url: 'https://www.techandme.se/ovms-v3-and-mqtt/' },
      ],
    },
    {
      icon: '',
      title: 'GE-Spot',
      description: 'Global elprisprognos-integration med stöd för 40+ regioner (Europa, Australien, USA). Intelligent 15-minuters intervallhantering med 9+ priskällor och automatisk fallback. DST-medveten valutakonvertering och self-learning cache för spot-price + effekttariff-optimering.',
      links: [
        { text: 'GitHub →', url: 'https://github.com/enoch85/ge-spot' },
      ],
    },
    {
      icon: '',
      title: 'EffektGuard',
      description: 'Intelligent värmepumpsoptimering med ML-baserad självlärande 8-lagers beslutsmotor. Balanserar pris, effekttariff, väder, komfort och säkerhet. Klimatzon-anpassning (Arktis-Medelhavet), matematisk väderkompensation och thermisk skuld-tracking. Produktionstestas i svenska hem.',
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
