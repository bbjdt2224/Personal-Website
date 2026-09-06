// CreativePortfolio — Bold, image-heavy personal portfolio
const defaultContent = {
  name: 'Jordan Lee',
  title: 'Visual Designer & Art Director',
  tagline: 'Making the digital world more beautiful, one pixel at a time.',
  works: [
    { title: 'Brand Identity', year: '2024', color: '#e040fb' },
    { title: 'Mobile App UI', year: '2023', color: '#00e5ff' },
    { title: 'Web Design', year: '2023', color: '#69f0ae' },
    { title: 'Motion Design', year: '2024', color: '#ffea00' },
  ],
  email: 'hello@jordanlee.co',
}

export default function CreativePortfolio({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#1a0a2e', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Hero */}
      <div style={{ padding: '3rem 2rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#e040fb' }}>JL</span>
            <a href={`mailto:${c.email}`} style={{
              padding: '0.45rem 1rem', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 6, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none',
            }}>Contact</a>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            margin: '0 0 1.25rem',
            background: 'linear-gradient(135deg, #e040fb, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {c.name}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
            {c.title}
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, maxWidth: 460 }}>
            {c.tagline}
          </p>
        </div>
      </div>

      {/* Work Grid */}
      <div style={{ padding: '0 2rem 3rem', maxWidth: 700, margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
          Selected Work
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {c.works.map((work, i) => (
            <div key={i} style={{
              background: `${work.color}12`,
              border: `1px solid ${work.color}30`,
              borderRadius: 12,
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseOver={e => e.currentTarget.style.background = `${work.color}22`}
              onMouseOut={e => e.currentTarget.style.background = `${work.color}12`}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: work.color, marginBottom: '1rem', opacity: 0.8 }} />
              <p style={{ fontWeight: 700, color: '#f0f0f0', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{work.title}</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{work.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
