"use client";

export default function Stats() {
  const stats = [
    { number: '10+', label: 'år inom IT' },
    { number: '3', label: 'företag grundade' },
    { number: 'Linux', label: 'expert' },
    { number: 'Open Source', label: 'maintainer' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b px-4" style={{ borderColor: 'var(--border)' }}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <span className="stat-number block text-3xl md:text-4xl font-bold" style={{ color: 'var(--primary)' }}>
            {stat.number}
          </span>
          <span className="stat-label text-sm mt-1" style={{ color: 'var(--light)' }}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
