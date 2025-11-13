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
  description: 'Ansvarar för ett team i södra Sverige som jobbar med drift och utveckling av datacenter nationellt. Säkerställer hög tillgänglighet och stabilitet för kritisk infrastruktur. Driver modernisering och migreringsprojekt samt implementerar best practices för skalbar driftmiljö.',
  skills: ['Datacenter', 'VMware vSphere', 'Nutanix', 'Proxmox', 'Hyper-V', 'Xen', 'Teamledning', 'Incident Management', 'SLA/ITIL', 'BCP/DR (kontinuitet/återställning)', 'Projektledning'],
      logo: '/infracom-logo.png',
      logoAlt: 'InfraCom',
    },
    {
      title: 'Applikationsspecialist',
      company: 'Redpill Linpro',
      period: 'Feb 2023 - Nov 2023',
      location: 'Linköping (Remote)',
      employment: 'Deltid',
      description: 'Implementerade och supporterade open source-lösningar för svenska myndigheter. Specialiserade mig på Nextcloud och Jitsi med fokus på säkra, skalbara lösningar baserade på öppna standarder.',
      skills: ['Nextcloud', 'Jitsi', 'Open Source', 'Linux'],
      logo: '/redpill-linpro-logo.png',
      logoAlt: 'Redpill Linpro',
    },
    {
      title: 'Founder & CTO',
      company: 'T&M Hansson IT AB',
      period: 'Sep 2018 - Nov 2023',
      highlight: 'Sålt till Kafit AB',
      description: 'Grundade och drev IT-konsultbolag med fokus på open source-lösningar. Maintainer för Nextclouds första officiella VM som laddades ner globalt ~100 gånger/dag. Utvecklade automatiseringslösningar för Hyper-V, VMware och Proxmox. Sålde bolaget till Kafit AB 2021.',
      skills: ['Entreprenörskap', 'Bash Scripting', 'Nextcloud', 'VMware', 'Hyper-V', 'Business Development'],
      logo: '/hanssonit-logo.png',
      logoAlt: 'T&M Hansson IT',
    },
    {
      title: 'Operations / DevOps Engineer',
      company: 'SenseNode',
      period: 'Feb 2022 - Feb 2023',
      location: 'Lund',
      employment: 'Deltid',
      description: 'Automatiserade backup-lösningar och privata molntjänster. Byggde CI/CD-pipelines och förbättrade systemarkitekturen för ökad stabilitet och skalbarhet.',
      skills: ['DevOps', 'Backup Solutions', 'Private Cloud', 'Automation'],
      logo: '/sensenode-logo.png',
      logoAlt: 'SenseNode',
    },
    {
      title: 'IT-tekniker  → Systemadministratör',
      company: 'Vessinge IT',
      period: 'Jul 2017 - Jan 2022',
      location: 'Malmö',
      highlight: 'Karriärutveckling',
      description: 'Började som IT-tekniker, avancerade till systemadministratör och blev senare ansvarig för Second-Line. Förvaltade Microsoft-miljöer, VMware-infrastruktur och SQL-servrar. Etablerade Linux-kompetens internt och drev migrering till moderna plattformar.',
      skills: ['Microsoft SQL Server', 'Active Directory', 'VMware ESX', 'Microsoft Exchange', 'Windows Server', 'Microsoft Azure', 'Linux Administration'],
      logo: '/vessinge-logo.png',
      logoAlt: 'Vessinge IT',
    },
    {
      title: 'Account Manager',
      company: 'Örestad Linux AB',
      period: 'Nov 2016 - Maj 2017',
      location: 'Malmö',
      description: 'Teknisk säljroll där jag hanterade kundrelationer och utvecklade affärer för Linux-baserade lösningar. Sjösatte deras VPS hosting baserad på Nextcloud. Hjälpte företag att migrera från proprietära system till open source.',
      skills: ['Technical Sales', 'Linux', 'Customer Relations'],
      logo: '/orestad-logo.png',
      logoAlt: 'Orestad Linux',
    },
    {
      title: 'Tidigare entreprenörskarriär',
      company: 'Tech and Me • HSN Konsult • Powersales',
      period: '2008 - 2018',
      highlight: 'Serial Entrepreneur',
      description: 'Över tio års erfarenhet inom försäljning och affärsutveckling från olika roller.\n\nHSN Konsult (B2B-försäljning) – mitt första företag med kontor i centrala Västerås och 4 anställda säljare. Blev diplomerade för vår insats.\n\nTech and Me fokuserade på WordPress och serveradministration med över 1500 unika besökare/dag.\n\nÄven IT-ansvarig på Powersales och försäkringsrådgivare på Trygg-Hansa där jag gjorde bäst resultat i utbildningsteamet, och toppade listorna nationellt',
      skills: ['Business Development', 'WordPress', 'IT Management', 'Sales'],
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
