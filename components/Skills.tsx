
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
      title: 'Infrastructure & Cloud',
      skills: ['Linux Administration', 'VMware vSphere', 'Hyper-V', 'Proxmox', 'Docker', 'Kubernetes', 'Microsoft Azure', 'Datacenter Management'],
    },
    {
      title: 'System & Nätverk',
      skills: ['Active Directory', 'Windows Server', 'Microsoft Exchange', 'DNS/DHCP', 'VPN', 'Backup Solutions', 'Microsoft SQL Server', 'RAS'],
    },
    {
      title: 'Development & Automation',
      skills: ['Bash Scripting', 'PowerShell', 'Git', 'CI/CD', 'Infrastructure as Code', 'Python', 'Home Assistant', 'API Integration'],
    },
    {
      title: 'Open Source & Tools',
      skills: ['Nextcloud', 'Jitsi Meet', 'WordPress', 'GitHub', 'Open Source Contribution', 'Documentation'],
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
