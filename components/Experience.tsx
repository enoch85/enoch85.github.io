import Image from 'next/image';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  employment?: string;
  description: string;
  skills: string[];
  highlight?: string;
  logo?: string;
  logoAlt?: string;
}

function ExperienceItem({ title, company, period, location, employment, description, skills, highlight, logo, logoAlt }: ExperienceItemProps) {
  return (
    <div className="timeline-item">
      <div className="mb-4">
        <div className="flex items-start gap-4 mb-3">
          {logo && (
            <div className="company-logo-container">
              <Image 
                src={logo} 
                alt={logoAlt || company} 
                className="company-logo"
                width={80}
                height={80}
                unoptimized
              />
            </div>
          )}
          <div className="flex-1">
            <div className="text-xl md:text-2xl font-semibold mb-1">{title}</div>
            <div className="company-name font-medium mb-2" style={{ color: 'var(--primary)' }}>{company}</div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap text-sm md:text-base" style={{ color: 'var(--light)' }}>
          <span>{period}</span>
          {location && <span>{location}</span>}
          {employment && <span>{employment}</span>}
          {highlight && <span className="highlight-badge">{highlight}</span>}
        </div>
      </div>
      <p className="mb-4 leading-relaxed" style={{ color: 'var(--dark)' }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      title: 'Datacenter Manager',
      company: 'InfraCom Smart Digital Solutions',
      period: 'Nov 2023 - Nuvarande',
      location: 'Malmö',
      description: 'Ansvarar för ett team i södra Sverige som jobbar med drift och utveckling av datacenter nationellt. Säkerställer hög tillgänglighet för kritisk infrastruktur genom proaktiv monitoring, incident management och kontinuerliga förbättringar. Driver moderniseringsprojekt inkl. migrering mellan hypervisors, och automation av rutinuppgifter. Jobbar under ISO 27001 enligt ITIL-ramverk.',
      skills: ['Datacenter Operations', 'VMware vSphere', 'Nutanix', 'Proxmox', 'Team Leadership', 'Incident Management', 'ITIL/SLA', 'BCP/DR', 'Infrastructure Automation', 'DNS', 'Fortigate'],
      logo: '/infracom-logo.png',
      logoAlt: 'InfraCom',
    },
    {
      title: 'Applikationsspecialist',
      company: 'Redpill Linpro',
      period: 'Feb 2023 - Nov 2023',
      location: 'Linköping (Remote)',
      employment: 'Deltid',
      description: 'Implementerade och supporterade enterprise open source-lösningar för svenska myndigheter. Fokus på säkra, skalbara plattformar baserade på öppna standarder med krav på hög tillgänglighet och compliance.',
      skills: ['Nextcloud Enterprise', 'Jitsi', 'Linux', 'Customer Support'],
      logo: '/redpill-linpro-logo.png',
      logoAlt: 'Redpill Linpro',
    },
    {
      title: 'Founder & CTO',
      company: 'T&M Hansson IT AB',
      period: 'Sep 2018 - Nov 2023',
      highlight: 'Sålt till Kafit AB',
      description: 'Grundade och drev IT-konsultbolag specialiserat på open source-infrastruktur och automation. Maintainer för Nextclouds officiella VM (100+ nedladdningar/dag globalt). Utvecklade automatiserade deployment-lösningar för flera virtualiseringsplattformar. Supporterade kunder över hela världen. Sålde bolaget till Kafit AB 2021.',
      skills: ['Entrepreneurship', 'Infrastructure as Code', 'Bash Automation', 'Open Source Maintenance', 'Business Development'],
      logo: '/hanssonit-logo.png',
      logoAlt: 'T&M Hansson IT',
    },
    {
      title: 'Operations / DevOps Engineer',
      company: 'SenseNode',
      period: 'Feb 2022 - Feb 2023',
      location: 'Lund',
      employment: 'Deltid',
      description: 'Tillverkade och installerade IoT-enheter för energimätning hos stora industrier. Ansvarade för att organisera RAM-avtal med telefonioperatörer och säkerställa enheter alltid var uppkopplade. Gav support och förvaltade infrastruktur för säker dataöverföring.',
      skills: ['IoT', 'Operations', 'Customer Support', 'Vendor Management'],
      logo: '/sensenode-logo.png',
      logoAlt: 'SenseNode',
    },
    {
      title: 'IT-tekniker → Systemadministratör',
      company: 'Vessinge IT',
      period: 'Jul 2017 - Jan 2022',
      location: 'Malmö',
      highlight: 'Karriärutveckling',
      description: 'Vessinge IT är del av större koncern inom fastighet. Började som IT-tekniker och avancerade till systemadministratör med huvudansvar för alla servrar och mjukvaror. Blev senare ansvarig för Second-Line. Förvaltade Windows/Linux hybrid-miljö med VMware, Hyper-V, Windows Server 2008-2019, Ubuntu, Docker och Portainer. Daglig kontakt med leverantörer och åtgärdade problem på högre teknisk nivå.',
      skills: ['System Administration', 'VMware/Hyper-V', 'Windows/Linux Hybrid', 'Second-Line Support', 'Vendor Management'],
      logo: '/vessinge-logo.png',
      logoAlt: 'Vessinge IT',
    },
    {
      title: 'Account Manager',
      company: 'Örestad Linux AB',
      period: 'Nov 2016 - Maj 2017',
      location: 'Malmö',
      description: 'Teknisk säljroll med fokus på Linux-baserade hosting-lösningar. Gjorde Örestad Linux till Nextcloud partner och implementerade VPS-plattform för Nextcloud-hosting. Hanterade försäljning och mindre supportuppdrag.',
      skills: ['Technical Pre-Sales', 'Linux Solutions', 'Customer Relations', 'Nextcloud'],
      logo: '/orestad-logo.png',
      logoAlt: 'Orestad Linux',
    },
    {
      title: 'Tidigare entreprenörskarriär och försäljning',
      company: 'HSN Konsult • Powersales • Trygg-Hansa',
      period: '2008 - 2016',
      highlight: 'Företagare & Säljare',
      description: 'HSN Konsult (2008-2011) – Mitt första företag med 4 anställda och kontor i centrala Västerås. B2B-försäljning av mobiltelefoni och telefoniväxlar. Diplomerad för vår insats och sålde företaget 2011.\n\nPowersales Sweden AB (2011-2014) – CTO i företaget som köpte HSN Konsult. Ansvarade för alla IT-relaterade frågor från konfiguration till inköp.\n\nTrygg-Hansa (2014-2016) – Framgångsrik försäkringsrådgivare vid sidan av studier. Toppade försäljningslistorna.',
      skills: ['Business Development', 'CTO', 'B2B Sales', 'Team Leadership'],
      logo: '/hsn-konsult-logo.jpg',
      logoAlt: 'HSN Konsult',
    },
  ];

  return (
    <section className="my-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="section-icon"></div>
        <h2 className="text-3xl font-semibold">Arbetslivserfarenhet</h2>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
