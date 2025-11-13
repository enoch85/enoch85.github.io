interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  employment?: string;
  description: string;
  skills: string[];
  highlight?: string;
  logo?: string; // Company logo URL
  logoAlt?: string;
}

function ExperienceItem({ title, company, period, location, employment, description, skills, highlight, logo, logoAlt }: ExperienceItemProps) {
  return (
    <div className="timeline-item">
      <div className="mb-4">
        <div className="flex items-start gap-4 mb-3">
          {logo && (
            <div className="company-logo-container">
              <img 
                src={logo} 
                alt={logoAlt || company} 
                className="company-logo"
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
      description: 'Ansvarig för ett team som driftar datacenter främst i södra Sverige men även nationellt upp till Östersund. Leder teknisk utveckling och säkerställer hög tillgänglighet för kritisk infrastruktur. Driver moderniseringsinitiativ och implementerar best practices för datacenter-management.',
      skills: ['Datacenter', 'VMware vSphere', 'Team Leadership', 'Infrastructure Management'],
      logo: '/infracom-logo.png',
      logoAlt: 'InfraCom',
    },
    {
      title: 'Applikationsspecialist',
      company: 'Redpill Linpro',
      period: 'Feb 2023 - Nov 2023',
      location: 'Linköping (Remote)',
      employment: 'Deltid',
      description: 'Specialist på open source-lösningar med fokus på Nextcloud och Jitsi. Arbetade med implementation och support för nordiska företag som bygger sin digitala infrastruktur på öppna standarder.',
      skills: ['Nextcloud', 'Jitsi', 'Open Source', 'Linux'],
      logo: '/redpill-linpro-logo.png',
      logoAlt: 'Redpill Linpro',
    },
    {
      title: 'Founder & CTO',
      company: 'T&M Hansson IT AB',
      period: 'Sep 2018 - Nov 2023',
      highlight: 'Sålt till Kafit AB',
      description: 'Grundade och drev framgångsrikt IT-konsultföretag specialiserat på open source-lösningar. Blev maintainer för Nextclouds första officiella VM som distribuerades globalt. Utvecklade automatiseringslösningar för Hyper-V, VMware och Proxmox. Företaget växte stadigt och såldes framgångsrikt till Kafit AB 2021.',
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
      description: 'DevOps-roll med fokus på automatisering, backup-lösningar och privata molntjänster. Implementerade CI/CD-pipelines och förbättrade systemarkitekturen för ökad skalbarhet.',
      skills: ['DevOps', 'Backup Solutions', 'Private Cloud', 'Automation'],
      logo: '/sensenode-logo.png',
      logoAlt: 'SenseNode',
    },
    {
      title: 'Systemadministratör → IT-tekniker',
      company: 'Vessinge IT',
      period: 'Jul 2017 - Jan 2022',
      location: 'Malmö',
      highlight: 'Karriärutveckling',
      description: 'Började som IT-tekniker och avancerade snabbt till systemadministratör och Second-Line support. Ansvarade för Microsoft-miljöer, VMware-infrastruktur och blev företagets Linux-expert. Utvecklades från nybörjare 2013 till företagets "go-to guy" för komplexa tekniska utmaningar.',
      skills: ['Microsoft SQL Server', 'Active Directory', 'VMware ESX', 'Microsoft Exchange', 'Windows Server', 'Microsoft Azure', 'Linux Administration'],
      logo: '/vessinge-logo.png',
      logoAlt: 'Vessinge IT',
    },
    {
      title: 'Account Manager',
      company: 'Orestad Linux AB',
      period: 'Nov 2016 - Maj 2017',
      location: 'Malmö',
      description: 'Teknisk säljroll med fokus på Linux-baserade lösningar. Kombinerade teknisk expertis med försäljning för att hjälpa företag migrera till open source.',
      skills: ['Technical Sales', 'Linux', 'Customer Relations'],
      logo: '/orestad-logo.png',
      logoAlt: 'Orestad Linux',
    },
    {
      title: 'Tidigare entreprenörskarriär',
      company: 'Tech and Me • HSN Konsult • Powersales',
      period: '2008 - 2018',
      highlight: 'Serial Entrepreneur',
      description: 'Över 10 år som entreprenör med flera framgångsrika bolag. Började med HSN Konsult 2008, följt av Tech and Me som fokuserade på WordPress och serveradministration. Även erfarenhet från försäkringsbranschen (Trygg-Hansa) och som IT-ansvarig på Powersales Sweden AB.',
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
