// FreelancerCard — Clean personal brand page for freelancers
const defaultContent = {
  name: 'Sarah Chen',
  title: 'Full-Stack Developer',
  tagline: 'I help startups ship better products, faster.',
  description: 'With 8 years of experience in React, Node.js, and cloud infrastructure, I partner with founders and product teams to turn ideas into well-engineered products.',
  skills: ['React / Next.js', 'Node.js', 'TypeScript', 'AWS'],
  rate: '$150/hr',
  email: 'hello@sarahchen.dev',
  available: true,
}

export default function FreelancerCard({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f8f8f8', minHeight: '100vh', color: '#1a1a1a' }}>
      {/* Top bar */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '1rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{c.name}</span>
        {c.available && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: '#16a34a' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
            Available for work
          </span>
        )}
      </div>

      {/* Main card */}
      <div style={{ maxWidth: 600, margin: '3rem auto', padding: '0 2rem' }}>
        <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 16, padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
          {/* Avatar */}
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #0066cc, #0044aa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem' }}>
            {c.name.charAt(0)}
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>{c.name}</h1>
          <p style={{ fontSize: '1rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.75rem' }}>{c.title}</p>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>{c.tagline}</p>
          <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.7, marginBottom: '1.75rem' }}>{c.description}</p>

          {/* Skills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {c.skills.map(skill => (
              <span key={skill} style={{ padding: '0.3rem 0.75rem', background: '#f0f7ff', border: '1px solid #cce0ff', borderRadius: 999, fontSize: '0.78rem', fontWeight: 500, color: '#0066cc' }}>
                {skill}
              </span>
            ))}
          </div>

          {/* Rate + CTA */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href={`mailto:${c.email}`} style={{ flex: 1, textAlign: 'center', padding: '0.75rem', background: '#0066cc', color: 'white', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              Get in Touch
            </a>
            <span style={{ padding: '0.75rem 1.25rem', border: '1px solid #e5e5e5', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a', background: 'white', whiteSpace: 'nowrap' }}>
              {c.rate}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
