
interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="skill-category">
      <h3 className="flex items-center gap-2 mb-4 font-semibold text-lg" style={{ color: 'var(--primary)' }}>
        {title}
      </h3>
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

export default function Skills() {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Virtualisering & Hypervisors',
      skills: ['VMware vSphere/ESX', 'Nutanix AHV', 'Hyper-V', 'Proxmox VE', 'Hyperconverged Infrastructure'],
    },
    {
      title: 'Operativsystem & Servrar',
      skills: ['Linux-administration', 'Linux Server', 'Windows Server', 'Active Directory', 'Microsoft Exchange', 'Microsoft Azure', 'Docker'],
    },
    {
      title: 'Backup & Lagring',
      skills: ['Veeam', 'Ahsay', 'Proxmox PBS', 'Disaster Recovery', 'Backuplösningar', 'High Availability'],
    },
    {
      title: 'Nätverk & Säkerhet',
      skills: ['VPN', 'DNS/BIND', 'Fortigate', 'opnSense', 'pfSense', 'Unifi', 'Nätverkssäkerhet'],
    },
    {
      title: 'Drift & Management',
      skills: ['Datacenterdrift', 'IT-ledarskap', 'Incidenthantering', 'ITIL/SLA', 'Kapacitetsplanering', 'Övervakning'],
    },
    {
      title: 'Automation & Skriptning',
      skills: ['Ansible', 'Bash', 'PowerShell', 'VS Code', 'Infrastructure as Code', 'Packer', 'Git', 'Konfigurationshantering'],
    },
  ];

  return (
    <section className="my-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="section-icon"></div>
        <h2 className="text-3xl font-semibold">Teknisk kompetens</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>

    </section>
  );
}
