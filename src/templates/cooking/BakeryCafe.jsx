// BakeryCafe — Warm, artisan bakery/café landing page
const defaultContent = {
  name: 'Morning Proof',
  tagline: 'Baked fresh. Every morning.',
  description: 'Handcrafted breads, pastries, and seasonal specials. Made with local ingredients and a whole lot of love.',
  hours: 'Tue–Sun · 7am–3pm',
  location: '1204 Hyde Park Ave, Tampa',
  menu: [
    { name: 'Country Sourdough', price: '$9', note: 'Available whole or half loaf' },
    { name: 'Butter Croissant', price: '$4.50', note: 'Laminated dough, baked daily' },
    { name: 'Seasonal Galette', price: '$6', note: 'Changes weekly' },
    { name: 'Drip Coffee', price: '$3', note: 'Single origin, rotating' },
  ],
}

export default function BakeryCafe({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#fdf6e8', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '4rem 2rem 3rem', background: 'white', borderBottom: '1px solid #e8d8b8' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🥐</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3a2a1a', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          {c.name}
        </h1>
        <p style={{ fontStyle: 'italic', color: '#8b5e3c', fontSize: '1rem', marginBottom: '1.25rem' }}>
          {c.tagline}
        </p>
        <p style={{ fontSize: '0.95rem', color: '#6b4e30', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 2rem', fontFamily: "'Inter', sans-serif" }}>
          {c.description}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ background: '#fdf0d5', border: '1px solid #d4a76a', borderRadius: 999, padding: '0.4rem 1rem', fontSize: '0.8rem', fontFamily: "'Inter', sans-serif", color: '#7a4e25' }}>
            ⏰ {c.hours}
          </span>
          <span style={{ background: '#fdf0d5', border: '1px solid #d4a76a', borderRadius: 999, padding: '0.4rem 1rem', fontSize: '0.8rem', fontFamily: "'Inter', sans-serif", color: '#7a4e25' }}>
            📍 {c.location}
          </span>
        </div>
      </div>

      {/* Menu */}
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '2.5rem 2rem 3rem' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a07050', marginBottom: '1.25rem', fontWeight: 600 }}>
          Today's Menu
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {c.menu.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: '1rem 0',
              borderBottom: '1px solid #e8d8b8',
            }}>
              <div>
                <p style={{ fontWeight: 600, color: '#3a2a1a', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{item.name}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#a07050', fontStyle: 'italic' }}>{item.note}</p>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#8b5e3c', fontSize: '0.95rem', flexShrink: 0, marginLeft: '1rem', marginTop: '0.1rem' }}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
