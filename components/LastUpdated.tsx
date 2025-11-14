import { execSync } from 'child_process';

export default function LastUpdated() {
  let lastUpdated = 'okänt datum';
  
  try {
    // Hämta senaste commit-datum från git
    const gitDate = execSync('git log -1 --format=%cd --date=format:"%Y-%m-%d"', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore']
    }).trim().replace(/"/g, '');
    
    lastUpdated = gitDate;
  } catch (error) {
    // Om git inte finns eller kommandot misslyckas, använd build-datum
    const now = new Date();
    lastUpdated = now.toISOString().split('T')[0];
  }

  return (
    <p className="mt-4 text-xs" style={{ opacity: 0.6 }}>
      Senast uppdaterad: {lastUpdated}
    </p>
  );
}
