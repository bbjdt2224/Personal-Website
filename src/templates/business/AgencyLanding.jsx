// AgencyLanding — Bold, conversion-focused agency/studio page
const defaultContent = {
  name: 'Vanta Studio',
  tagline: 'We build digital products that move people.',
  description: 'A design and engineering studio for ambitious brands. We take ideas from zero to launch.',
  services: ['Brand Identity', 'Web Design', 'Product Development', 'Growth Strategy'],
  cta: 'Start a Project',
  email: 'hello@vantastudio.co',
}

export default function AgencyLanding({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#0f0f0f', color: '#f5f5f5', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2.5rem', borderBottom: '1px solid #222' }}>
        <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>{c.name}</span>
        <a href={`mailto:${c.email}`} style={{
          padding: '0.5rem 1.25rem',
          background: '#970c10',
          color: 'white',
          borderRadius: 6,
          fontSize: '0.85rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          {c.cta}
        </a>
      </nav>

      {/* Hero */}
      <div style={{ padding: '5rem 2.5rem 4rem', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(151,12,16,0.15)', border: '1px solid rgba(151,12,16,0.3)', borderRadius: 999, padding: '0.3rem 0.875rem', marginBottom: '2rem' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#970c10', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#cf4040' }}>Currently taking new clients</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          {c.tagline}
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.7, maxWidth: 520, marginBottom: '2.5rem' }}>
          {c.description}
        </p>
        <a href={`mailto:${c.email}`} style={{
          display: 'inline-block',
          padding: '0.875rem 2.25rem',
          background: '#970c10',
          color: 'white',
          fontWeight: 700,
          borderRadius: 8,
          textDecoration: 'none',
          fontSize: '0.95rem',
        }}>
          {c.cta} →
        </a>
      </div>

      {/* Services */}
      <div style={{ borderTop: '1px solid #222', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {c.services.map((service, i) => (
          <div key={i} style={{ padding: '1.75rem 2rem', borderRight: i < 3 ? '1px solid #222' : 'none' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: '0.5rem' }}>0{i + 1}</p>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f0f0f0' }}>{service}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
