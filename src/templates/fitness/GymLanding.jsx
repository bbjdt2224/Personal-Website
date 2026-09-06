// GymLanding — Dark, high-energy fitness landing page
const defaultContent = {
  name: 'FORGE GYM',
  tagline: 'No excuses. Just results.',
  description: 'Tampa\'s most intense strength and conditioning facility. Open 24/7. Real coaching. Real results.',
  cta: 'Claim Your Free Week',
  phone: '(813) 555-0100',
  features: ['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Recovery Suite'],
}

export default function GymLanding({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <span style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.1em', color: '#ff6b35' }}>{c.name}</span>
        <a href={`tel:${c.phone}`} style={{ fontSize: '0.85rem', color: '#999', textDecoration: 'none' }}>{c.phone}</a>
      </nav>

      {/* Hero */}
      <div style={{ padding: '5rem 2rem 4rem', textAlign: 'center', borderBottom: '1px solid #1a1a1a', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '60%', height: '100%',
          background: 'radial-gradient(ellipse at center top, rgba(255,107,53,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6b35', marginBottom: '1rem', fontWeight: 600 }}>
          Est. 2019 · Tampa, FL
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
          {c.tagline}
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#888', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          {c.description}
        </p>
        <a href="#" style={{
          display: 'inline-block',
          padding: '0.875rem 2.5rem',
          background: '#ff6b35',
          color: 'white',
          fontWeight: 700,
          fontSize: '0.95rem',
          borderRadius: 6,
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}>
          {c.cta}
        </a>
      </div>

      {/* Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '0', borderBottom: '1px solid #1a1a1a' }}>
        {c.features.map((feat, i) => (
          <div key={i} style={{
            padding: '2rem 1.5rem',
            borderRight: i < 3 ? '1px solid #1a1a1a' : 'none',
            textAlign: 'center',
          }}>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f0f0f0', marginBottom: '0.25rem' }}>{feat}</p>
            <p style={{ fontSize: '0.75rem', color: '#555' }}>Included</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: '#444' }}>Open 24/7 · No contract · Cancel anytime</p>
      </div>
    </div>
  )
}
