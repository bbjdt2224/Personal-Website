// YogaRetreat — Soft, serene wellness landing page
const defaultContent = {
  name: 'Stillwater',
  subtitle: 'Yoga & Wellness Studio',
  tagline: 'Find stillness in the chaos.',
  description: 'A sanctuary for mind, body, and breath. Our studio offers Vinyasa, Yin, and Restorative classes for all levels.',
  classes: ['Vinyasa Flow', 'Yin Yoga', 'Restorative', 'Meditation'],
  cta: 'Book a Class',
  location: 'Hyde Park Village, Tampa',
}

export default function YogaRetreat({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#f9f5ef', minHeight: '100vh', color: '#2c2c2c' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em', color: '#4a4238' }}>{c.name}</span>
        <a href="#" style={{
          padding: '0.5rem 1.25rem',
          border: '1px solid #a8927a',
          borderRadius: 4,
          fontSize: '0.8rem',
          color: '#a8927a',
          textDecoration: 'none',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.05em',
        }}>
          {c.cta}
        </a>
      </nav>

      {/* Hero */}
      <div style={{ padding: '3rem 2.5rem 4rem', maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8927a', marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif" }}>
          {c.subtitle}
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '1.5rem', color: '#3a322a', fontStyle: 'italic' }}>
          {c.tagline}
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#7a6e63', lineHeight: 1.8, marginBottom: '2.5rem', fontFamily: "'Inter', sans-serif" }}>
          {c.description}
        </p>
        <a href="#" style={{
          display: 'inline-block',
          padding: '0.875rem 2.5rem',
          background: '#a8927a',
          color: 'white',
          borderRadius: 4,
          fontSize: '0.85rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          {c.cta}
        </a>
      </div>

      {/* Classes */}
      <div style={{ background: 'white', borderTop: '1px solid #e8e0d5', borderBottom: '1px solid #e8e0d5', padding: '2.5rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {c.classes.map((cls, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#f0e8dc', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
              🌿
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 500, color: '#4a4238' }}>{cls}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '1.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#9a9088' }}>
        📍 {c.location}
      </div>
    </div>
  )
}
